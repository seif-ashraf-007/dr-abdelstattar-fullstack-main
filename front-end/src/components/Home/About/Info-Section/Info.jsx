import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Add this import
import Carousel from "../../../Carousel"; // Add this import

import "./Info.css";
import img1 from "../../../../assets/mentors/1.png";
import img2 from "../../../../assets/mentors/2.png";
import img3 from "../../../../assets/mentors/3.png";
import img4 from "../../../../assets/mentors/4.png";
import img5 from "../../../../assets/mentors/5.png";
import img6 from "../../../../assets/mentors/6.png";
import img7 from "../../../../assets/mentors/7.png";
import img8 from "../../../../assets/mentors/8.png";
import img9 from "../../../../assets/mentors/9.png";
import img10 from "../../../../assets/mentors/10.png";
import img11 from "../../../../assets/mentors/11.jpg";

import cert1 from "../../../../assets/certificates/1.jpg";
import cert2 from "../../../../assets/certificates/2.jpg";
import cert3 from "../../../../assets/certificates/3.jpg";
import cert4 from "../../../../assets/certificates/4.jpg";
import cert5 from "../../../../assets/certificates/5.jpg";
import cert6 from "../../../../assets/certificates/6.jpg";
import cert7 from "../../../../assets/certificates/7.jpg";
import Journey from "../../Journey/Journey";

const Info = () => {
  const { t } = useTranslation(); // Add i18n to get current language

  const mentorImages = [
    {
      img: img1,
    },
    {
      img: img3,
    },
    {
      img: img2,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
      img: img7,
    },
    {
      img: img8,
    },
    {
      img: img9,
    },
    {
      img: img10,
    },
    {
      img: img11,
    },
  ];

  const certificateImages = [cert1, cert2, cert3, cert4, cert5, cert6, cert7];

  const [currentMentorIndex, setCurrentMentorIndex] = useState(0);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

  useEffect(() => {
    const mentorIntervalId = setInterval(() => {
      setCurrentMentorIndex(
        (prevIndex) => (prevIndex + 1) % mentorImages.length
      );
    }, 8000);

    return () => clearInterval(mentorIntervalId);
  }, [mentorImages.length]);

  useEffect(() => {
    const certificateIntervalId = setInterval(() => {
      setCurrentCertificateIndex(
        (prevIndex) => (prevIndex + 1) % certificateImages.length
      );
    }, 8000);

    return () => clearInterval(certificateIntervalId);
  }, [certificateImages.length]);

  return (
    <section className="w-full bg-gray-100 py-12" id="cert">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mentors Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t("info_section.mentors.title")}
            </h2>
            <p className="text-gray-600">
              {t("info_section.mentors.description")}
            </p>
          </div>

          <Carousel images={mentorImages} currentIndex={currentMentorIndex} />
        </section>

        {/* Certificates Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          <Carousel
            images={certificateImages}
            currentIndex={currentCertificateIndex}
          />

          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t("info_section.certificates.title")}
            </h2>
            <p className="text-gray-600">
              {t("info_section.certificates.description")}
            </p>
          </div>
        </section>
      </div>
      <Journey />
    </section>
  );
};

export default Info;
