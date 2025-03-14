import { useState, useEffect } from "react";
import "./Hero.css";
import { FaUserDoctor } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import hero_banner1 from "../../../assets/hero_banner/hero_banner1.webp";
import hero_banner2 from "../../../assets/hero_banner/hero_banner2.webp";
import hero_banner3 from "../../../assets/hero_banner/hero_banner3.webp";
import hero_banner4 from "../../../assets/hero_banner/hero_banner4.webp";
import hero_banner5 from "../../../assets/hero_banner/hero_banner5.webp";

const images = [
  hero_banner1,
  hero_banner2,
  hero_banner3,
  hero_banner4,
  hero_banner5,
];

function Hero() {
  const { t, i18n } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`hero-container ${i18n.dir()}`}>
      <div className="hero-content">
        <h1>{t(`hero.banner.title`)}</h1>
        <div className="paragraph">
          <div className="line"></div>
          <p>{t(`hero.banner.sub_title`)}</p>
        </div>
      </div>
      <div className="hero-image">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero banner ${index + 1}`}
            style={{
              opacity: index === currentImage ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        ))}
      </div>
      <div className="overlay-boxes">
        {[1, 2, 3].map((index) => (
          <div key={index} className={`box box${index}`}>
            <div className="box-title">
              <FaUserDoctor className="box-icon" />
              <h2>{t(`hero.cards.card${index}.title`)}</h2>
            </div>
            <p>{t(`hero.cards.card${index}.description`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
