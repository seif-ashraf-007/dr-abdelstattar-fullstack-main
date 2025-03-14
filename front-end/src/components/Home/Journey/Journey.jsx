import "./Journey.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

import img1 from "../../../assets/mentors/1.png";
import img2 from "../../../assets/mentors/2.png";
import img3 from "../../../assets/mentors/3.png";
import img4 from "../../../assets/mentors/4.png";
import img5 from "../../../assets/mentors/5.png";

const Journey = () => {
  const { t, i18n } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    { src: img1, text: t("journey.images.image1.text") },
    { src: img2, text: t("journey.images.image2.text") },
    { src: img3, text: t("journey.images.image3.text") },
    { src: img4, text: t("journey.images.image4.text") },
    { src: img5, text: t("journey.images.image5.text") },
  ];

  useEffect(() => {
    if (!isPaused) {
      const IntervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 8000);

      return () => clearInterval(IntervalId);
    }
  }, [isPaused]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="journey-container" id="journey">
      <div className="journey-title">
        <h2>{t("journey.title")}</h2>
        <h1>{t("journey.sub_title")}</h1>
      </div>

      <div
        className="carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <button
          className="carousel-arrow prev"
          onClick={handlePrevClick}
          aria-label={t("previous")}
        >
          <svg
            className="arrow-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="carousel-arrow next"
          onClick={handleNextClick}
          aria-label={t("next")}
        >
          <svg
            className="arrow-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          className="carousel-track"
          style={{
            transform: `translateX(${i18n.dir() === "rtl" ? "" : "-"}${
              currentIndex * 100
            }%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image.src} alt={`Journey ${index + 1}`} />
              {image.text && (
                <div className="carousel-overlay">
                  <p>{image.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
