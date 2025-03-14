import { useState } from "react";
import styles from "./BlogPostForm.module.css";
import { Helmet } from "react-helmet-async";

function BlogPostForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("content", formData.content);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
      const response = await fetch("http://localhost:5000/api/blogPosts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        setMessage("Blog post created successfully!");
        setFormData({
          title: "",
          content: "",
          image: null,
        });
      } else {
        const data = await response.json();
        setMessage(data.message || "Error creating blog post");
      }
    } catch (error) {
      setMessage("Error creating blog post");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Dr Abdelsattar Nasr - New Post</title>
      </Helmet>
      <div className={styles.formContainer}>
        <h2>Create New Blog Post</h2>
        {message && <div className={styles.message}>{message}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows="10"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Create Post
          </button>
        </form>
      </div>
    </>
  );
}

export default BlogPostForm;
