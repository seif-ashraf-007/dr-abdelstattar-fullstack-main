import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt, FaRegEye } from "react-icons/fa";

export default function Testmonials() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: `${t("testimonials.feedback.feedback_1.name")}`,
      content: `${t("testimonials.feedback.feedback_1.content")}`,
      source: "https://g.co/kgs/xxx",
    },
    {
      name: `${t("testimonials.feedback.feedback_2.name")}`,
      content: `${t("testimonials.feedback.feedback_2.content")}`,
      source: "https://facebook.com/xxx",
    },
    {
      name: `${t("testimonials.feedback.feedback_3.name")}`,
      content: `${t("testimonials.feedback.feedback_3.content")}`,
      source: "https://g.co/kgs/xxx",
    },
    {
      name: `${t("testimonials.feedback.feedback_4.name")}`,
      content: `${t("testimonials.feedback.feedback_4.content")}`,
      source: "https://g.co/kgs/xxx",
    },
    {
      name: `${t("testimonials.feedback.feedback_5.name")}`,
      content: `${t("testimonials.feedback.feedback_5.content")}`,
      source: "https://g.co/kgs/xxx",
    },
    {
      name: `${t("testimonials.feedback.feedback_6.name")}`,
      content: `${t("testimonials.feedback.feedback_6.content")}`,
      source: "https://g.co/kgs/xxx",
    },
  ];

  // Update language when it changes
  useEffect(() => {
    if (currentLanguage !== i18n.language) {
      setCurrentLanguage(i18n.language);
    }
  }, [i18n.language, currentLanguage]);

  // Set up slide animation
  useEffect(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      changeSlide((activeIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [activeIndex, testimonials.length]);

  const changeSlide = (newIndex) => {
    if (isTransitioning || newIndex === activeIndex) return;

    setIsTransitioning(true);

    // Wait for fade out, then change slide
    setTimeout(() => {
      setActiveIndex(newIndex);

      // Wait for fade in to complete
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

  return (
    <section className="relative py-8" id="testmonials">
      <div className="relative z-10 max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 md:text-3xl">
            {t("testimonials.title")}
          </h3>
          <p className="mt-3 text-gray-600">{t("testimonials.description")}</p>
        </div>

        <div className="mt-12 relative">
          {/* Testimonial Carousel */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-xl relative h-[300px]">
              <div
                className={`absolute w-full transition-opacity duration-300 ease-in-out ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="bg-white border shadow-md rounded-xl h-full overflow-hidden">
                  <div className="p-3 flex justify-between items-center">
                    <i className="text-2xl fa-solid fa-quote-left"></i>
                    {testimonials[activeIndex].source && (
                      <a
                        href={testimonials[activeIndex].source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-600 hover:text-[#136c9d] transition-colors ${
                          i18n.language === "ar" ? "mr-auto" : "ml-auto"
                        }`}
                        aria-label="View original review"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                  <figure className="flex flex-col h-[calc(300px-100px)]">
                    <blockquote className="px-4">
                      <p
                        className="text-lg text-gray-800 max-h-[150px] overflow-y-auto pr-2
                        [&::-webkit-scrollbar]:w-1
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:bg-[#136c9d]/50
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:hover:bg-[#136c9d]
                        "
                      >
                        {testimonials[activeIndex].content}
                      </p>
                    </blockquote>
                    <div
                      className="flex items-center p-4 mt-auto gap-x-4 rounded-b-xl"
                      style={{
                        background:
                          "linear-gradient(152.92deg, rgba(19, 108, 157, 0.2) 4.54%, rgba(19, 108, 157, 0.17) 34.2%, rgba(45, 54, 101, 0.1) 77.55%)",
                      }}
                    >
                      <div>
                        <span className="block font-semibold text-gray-800">
                          {testimonials[activeIndex].name}
                        </span>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => changeSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  idx === activeIndex ? "bg-[#136c9d]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 w-full h-[310px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(19, 108, 157, 0.2) 4.54%, rgba(19, 108, 157, 0.17) 34.2%, rgba(45, 54, 101, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
}
