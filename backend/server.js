const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const multer = require("multer"); // Multer for file uploads
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const fs = require("fs");
const rateLimit = require("express-rate-limit");

const User = require("./models/User");
const BlogPost = require("./models/BlogPost"); // Import your BlogPost model
const { log } = require("console");
const app = express();
app.use(express.json());

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: "Too many login attempts. Please try again later.",
});

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up static folder for uploads with absolute path
app.use("/uploads", express.static(uploadDir));

// Update Multer setup with absolute path
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Add file extension handling
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${ext}`);
  },
});

// Add file filter to multer for security
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// Allow requests from your frontend origin (localhost:5173)
app.use(cors({}));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 6000;

// Use environment variable in production, fallback to generated secret for development
const JWT_SECRET =
  process.env.JWT_SECRET ||
  "8a45f26b721c7c5cb4786228a31c63b495a3d5b9a641ae875f9b5795b4f05c12";
console.log("Generated JWT Secret:", JWT_SECRET); // Log it so you can save it

// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      // Add any other user data you want in the token
    },
    JWT_SECRET,
    { expiresIn: "24h" } // Token expires in 24 hours
  );
};

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

app.post("/api/login", loginLimiter, async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const user = await User.findOne({ username }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .json({ message: "Internal server error. Please contact support." });
  }
});

// Add user route
app.post("/api/add-user", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const user = new User({ username, password });
    await user.save();

    // Verify the save
    const savedUser = await User.findOne({ username });
    console.log("User saved with hash:", savedUser.password);

    res.json({ message: "User created successfully!" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Error creating user" });
  }
});

// Change password route
app.post("/api/change-password", authenticateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(400).json({ message: "User not found" });

    // Check if old password matches
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect old password" });

    // Hash new password and update user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password changed successfully" });
  } catch (err) {
    console.error("Error during password change:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Blog posts routes

// Fetch all blog posts
app.get("/api/blogPosts", async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Add a new blog post with image upload (protected route)
app.post(
  "/api/blogPosts",
  [authenticateToken, upload.single("image")],
  async (req, res) => {
    const { title, content } = req.body;

    try {
      const newPost = new BlogPost({
        title,
        content,
        image: req.file ? `/uploads/${req.file.filename}` : "", // Save file path to the database
        date: new Date(),
      });

      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (error) {
      console.error("Error creating blog post:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// Update a blog post (protected route)
app.put(
  "/api/blogPosts/:id",
  [authenticateToken, upload.single("image")],
  async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
      // Find post first to check if it exists
      const post = await BlogPost.findById(id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      // Prepare update data
      const updateData = {
        title,
        content,
        lastModified: new Date(),
      };

      // If a new image is uploaded, add it to the update data
      if (req.file) {
        // Delete old image if it exists
        if (post.image) {
          const oldImagePath = path.join(__dirname, post.image);
          if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
          }
        }
        updateData.image = `/uploads/${req.file.filename}`;
      }

      // Update the post
      const updatedPost = await BlogPost.findByIdAndUpdate(
        id,
        updateData,
        { new: true } // Return the updated document
      );

      res.json(updatedPost);
    } catch (error) {
      console.error("Error updating blog post:", error);
      res
        .status(500)
        .json({ message: "Error updating blog post", error: error.message });
    }
  }
);

// Delete a blog post (protected route)
app.delete("/api/blogPosts/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await BlogPost.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Verify token route
app.get("/api/verify-token", authenticateToken, async (req, res) => {
  try {
    // Since authenticateToken middleware already verified the token,
    // we can just send back the user data from the token
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    res.json({
      id: user._id,
      username: user.username,
      isAuthenticated: true,
    });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get a single blog post by ID
app.get("/api/blogPosts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Verify if ID is valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const post = await BlogPost.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res
      .status(500)
      .json({ message: "Error fetching blog post", error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
