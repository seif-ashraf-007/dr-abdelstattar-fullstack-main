import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faBookOpen,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

import bookBanner from "../../assets/book_banners/banner.png";
import bookImg1 from "../../assets/book_banners/img1.jpg";
import bookImg2 from "../../assets/book_banners/img2.jpg";
import bookImg3 from "../../assets/book_banners/img3.jpg";

const BookPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // Refs for GSAP animations
  const imageSliderRef = useRef(null);
  const bookInfoRef = useRef(null);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const descriptionRef = useRef(null);
  const purchaseOptionsRef = useRef(null);

  // GSAP animations on component mount
  useEffect(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial state - set opacity to 0 and prepare for animations
    gsap.set(
      [
        titleRef.current,
        authorRef.current,
        descriptionRef.current,
        purchaseOptionsRef.current,
      ],
      {
        opacity: 0,
        y: 20,
      }
    );

    gsap.set(imageSliderRef.current, {
      opacity: 0,
      x: isRTL ? 50 : -50,
    });

    // Animation sequence
    tl.to(imageSliderRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      .to(
        authorRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
      )
      .to(
        purchaseOptionsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
      );

    return () => {
      // Clean up animation when component unmounts
      tl.kill();
    };
  }, [isRTL]); // Re-run when language direction changes

  // Mock book data
  const bookData = {
    title: t("bookPage.bookName"),
    author: t("bookPage.Author"),
    description: t("bookPage.description"),
    releaseDate: t("bookPage.date"),
    images: [bookBanner, bookImg1, bookImg2, bookImg3],
    purchaseLinks: {
      amazon: "https://amazon.com/",
      bookstore: "https://bookstore.com/",
      physicalAddress: t("bookPage.buttons.address.Details"),
    },
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === bookData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? bookData.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Helmet>
        <title>Dr Abdelsattar Nasr - Book</title>
      </Helmet>

      <div className="container mx-auto px-4 py-12" dir={isRTL ? "rtl" : "ltr"}>
        {/* Main Content - Side by Side Layout */}
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Image Slider - Left Side */}
          <div
            ref={imageSliderRef}
            className={`relative w-full lg:w-1/2 ${
              isRTL ? "order-last" : "order-first"
            }`}
          >
            <div className="overflow-hidden">
              <div className="relative h-[500px] lg:h-[600px]">
                {bookData.images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-500 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Book preview ${index + 1}`}
                      className="w-full h-full object-contain "
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-gray-800"
              />
            </button>

            {/* Slide Indicators */}
          </div>

          {/* Book Information - Right Side */}
          <div
            ref={bookInfoRef}
            className={`w-full lg:w-1/2 flex flex-col ${
              isRTL ? "order-first" : "order-last"
            }`}
          >
            {/* Title and Author moved here */}
            <h1 ref={titleRef} className="text-4xl font-bold mb-4">
              {bookData.title}
            </h1>
            <h2 ref={authorRef} className="text-2xl mb-8 text-[#146a9e]">
              {bookData.author}
            </h2>

            {/* Book Description */}
            <div ref={descriptionRef} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                {t("bookPage.title")}
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                {bookData.description}
              </p>
              <p className="text-xl font-medium text-[#146a9e]">
                {bookData.releaseDate}
              </p>
            </div>

            {/* Purchase Options */}
            <div ref={purchaseOptionsRef} className="mt-auto">
              <h3 className="text-2xl font-semibold mb-6">
                {t("bookPage.preOrder")}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href={bookData.purchaseLinks.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-not-allowed opacity-50 flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <i className="fa-brands fa-amazon text-4xl mb-3 text-orange-500"></i>
                  <span className="font-medium">
                    {t("bookPage.buttons.amazon")}
                  </span>
                </a>

                <a
                  href={bookData.purchaseLinks.bookstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center cursor-not-allowed opacity-50 justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faBookOpen}
                    className="text-3xl mb-2 text-blue-500"
                  />
                  <span className="font-medium">
                    {t("bookPage.buttons.bookstore")}
                  </span>
                </a>

                <div className="flex flex-col items-center cursor-not-allowed opacity-50 justify-center p-4 border border-gray-200 rounded-lg">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-3xl mb-2 text-red-500"
                  />
                  <span className="font-medium mb-1">
                    {t("bookPage.buttons.address.title")}
                  </span>
                  <address className="text-center text-sm text-gray-600 not-italic">
                    {bookData.purchaseLinks.physicalAddress}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPage;
