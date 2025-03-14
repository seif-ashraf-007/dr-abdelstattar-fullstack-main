import { Suspense } from "react";
import "./i18n/i18n";
import Home from "./pages/HomePage/HomePage";
import Locations from "./pages/LocationsPage/LocationsPage";
import Blog from "./pages/BlogPage/Blog";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./context/AuthContext";
import BlogPostForm from "./components/Blog/BlogPostForm/BlogPostForm";
import EditBlogPost from "./components/Blog/EditBlogPost";
import BookPage from "./pages/BookPage/BookPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedInToken = localStorage.getItem("isLoggedIn");
    if (isLoggedInToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Suspense fallback="loading...">
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/blog" element={<Blog />} />
                <Route
                  path="/blog/new"
                  element={
                    isLoggedIn ? <BlogPostForm /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/blog/edit/:id"
                  element={
                    isLoggedIn ? <EditBlogPost /> : <Navigate to="/login" />
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/book" element={<BookPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </Suspense>
  );
};

export default App;
