import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Carousel = ({ images, currentIndex }) => {
  const { t, i18n } = useTranslation();

  const getSliderTransform = (currentIndex) => {
    const isRTL = i18n.language === "ar";
    return isRTL
      ? `translateX(${currentIndex * 100}%)`
      : `translateX(-${currentIndex * 100}%)`;
  };

  return (
    <div className="relative w-full lg:w-[600px] h-[400px] overflow-hidden rounded-[12px]">
      <div
        className="absolute w-full h-full transition-transform duration-1000 ease-in-out flex"
        style={{ transform: getSliderTransform(currentIndex) }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={image.img || image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover object-[50%_30%] mx-auto hover:scale-105 transition-transform duration-300"
            />
            {image.text && (
              <div
                className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/30 text-white p-4 transform transition-transform duration-300"
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
              >
                <p className="text-sm font-medium">{t(image.text)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        text: PropTypes.string,
      }),
    ])
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default Carousel;
