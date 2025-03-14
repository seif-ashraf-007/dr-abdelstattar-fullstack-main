import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo_main.png";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../context/AuthContext";

function Header() {
  const { isAuthenticated, logout } = useAuth(); // Use the useAuth hook
  const { t, i18n } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language); // Track current language
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Check login status on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedToken === "true"); // Ensure the state is boolean
  }, []);

  // Listen for changes in localStorage to dynamically update login state
  useEffect(() => {
    const handleStorageChange = () => {
      const storedToken = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(storedToken === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout(); // Use the logout function from context
    navigate("/");
  };

  const toggleLanguage = () => {
    const newLang = currentLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setCurrentLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", newLang);
  };

  // Initialize language on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    setCurrentLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, [i18n]);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isAtTop = currentScrollPos < 10;

      // Always show header at the top of the page or when scrolling
      if (isAtTop) {
        setVisible(true);
      } else {
        // Always show header when scrolling, regardless of direction
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const isRTL = currentLanguage === "ar";

  return (
    <header
      className={`bg-white ${isRTL ? "rtl" : "ltr"} ${
        visible ? "header-visible" : "header-hidden"
      }`}
    >
      <div className="max-w-[100%] m-[0 auto] p-[0 1rem] flex h-[4rem] justify-around items-center header-container">
        <div>
          <a href="/">
            <img src={logo} className="h-[4rem] logo-img" alt="Logo" />
          </a>
        </div>

        {/* Regular Navbar (Visible on larger screens) */}
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <ul className="flex items-center no-underline list-none gap-[1.8rem]">
            <li>
              <a
                className="text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline"
                href="/"
              >
                {t("header.home")}
              </a>
            </li>
            <li>
              <a
                className="text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline"
                href="/#cert"
              >
                {t("header.certificates")}
              </a>
            </li>
            <li>
              <a
                className="text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline"
                href="#testmonials"
              >
                {t("header.testimonials")}
              </a>
            </li>
            <li>
              <a
                className="text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline"
                href="/locations"
              >
                {t("header.locations")}
              </a>
            </li>
            <li>
              <a
                className="text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline"
                href="/blog"
              >
                {t("header.blog")}
              </a>
            </li>
            <li>
              <a
                className="text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline"
                href="/book"
              >
                {t("header.book")}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center right-section">
          <div className="navbar">
            {" "}
            {/* This will hide with the rest of navbar on mobile */}
            {isAuthenticated ? (
              <a
                onClick={handleLogout}
                className="mr-4 text-[#146a9e] hover:text-[#2e3665] font-bold flex cursor-pointer"
                href="/"
              >
                <span>{t("header.logout")}</span>
                <MdLogout className="mx-[10px] text-[1.45rem]" />
              </a>
            ) : (
              <a
                href="/login"
                className="text-[#146a9e] hover:text-[#2e3665] transition font-bold flex "
              >
                <span>{t("header.login")}</span>
                <IoMdLogIn className="mx-[10px] text-[1.45rem]" />
              </a>
            )}
          </div>

          <div className={`flex items-center lang-btn mx-2 ${i18n.language}`}>
            <button
              onClick={toggleLanguage}
              className="cursor-pointer 
                            text-[#136c9d] hover:text-[#2e3665] text-[0.875rem] 
                            transition font-bold lang-text"
            >
              {i18n.language === "en" ? "العربية" : "English"}
            </button>
            <i className="fa-solid fa-globe text-[#136c9d] ml-2"></i>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="z-100 hidden mx-3 text-xl mobile-menu-btn">
            {isMenuOpen ? (
              <IoCloseOutline
                onClick={toggleMenu}
                className="text-[#136c9d] 
                            cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={toggleMenu}
                className="text-[#136c9d] 
                            cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <nav className={`z-10 mobile-navbar ${isMenuOpen ? "open" : "closed"}`}>
        <ul className="flex flex-col items-center gap-4 no-underline list-none">
          <li>
            <a
              className="text-black text-[0.875rem] transition duration-[0.3s] no-underline"
              href="/#"
            >
              {t("header.home")}
            </a>
          </li>
          <li>
            <a
              className="text-black text-[0.875rem] transition duration-[0.3s] no-underline"
              href="/#certificates"
            >
              {t("header.certificates")}
            </a>
          </li>
          <li>
            <a
              className="text-black text-[0.875rem] transition duration-[0.3s] no-underline"
              href="/#testmonials"
            >
              {t("header.testimonials")}
            </a>
          </li>
          <li>
            <a
              className="text-black text-[0.875rem] transition duration-[0.3s] no-underline"
              href="/locations"
            >
              {t("header.locations")}
            </a>
          </li>
          <li>
            <a
              className="text-black text-[0.875rem] transition duration-[0.3s] no-underline"
              href="/blog"
            >
              {t("header.blog")}
            </a>
          </li>
          <li>
            <a
              className="text-black text-[0.875rem] transition duration-[0.3s] no-underline"
              href="/book"
            >
              {t("header.book")}
            </a>
          </li>

          {/* Add Login/Logout button to mobile menu */}
          <li>
            {isAuthenticated ? (
              <a
                onClick={handleLogout}
                className="text-[#146a9e] hover:text-[#2e3665] text-[0.875rem] transition duration-[0.3s] no-underline flex items-center cursor-pointer"
                href="/"
              >
                <span>{t("header.logout")}</span>
                <MdLogout className="mx-[10px] text-[1.45rem]" />
              </a>
            ) : (
              <a
                href="/login"
                className="text-[#146a9e] hover:text-[#2e3665] text-[0.875rem] transition duration-[0.3s] no-underline flex items-center"
              >
                <span>{t("header.login")}</span>
                <IoMdLogIn className="mx-[10px] text-[1.45rem]" />
              </a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
