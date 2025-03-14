import "./About.css";
import Info from "./Info-Section/Info";
import { useTranslation } from "react-i18next";

import img1 from "../../../assets/cards/1.jpg";
import img2 from "../../../assets/cards/2.jpg";
import img3 from "../../../assets/cards/3.jpg";

function About() {
  const { t } = useTranslation();

  const cards = [
    {
      number: "01",
      image: img1,
      translationKey: "card1",
    },
    {
      number: "02",
      image: img2,
      translationKey: "card2",
      className: "mid-card",
    },
    {
      number: "03",
      image: img3,
      translationKey: "card3",
    },
  ];

  return (
    <>
      <div className="about-container" id="about">
        <div className="about-title">
          <h2>{t("about.title")}</h2>
          <h1>{t("about.sub_title")}</h1>
          <p>{t("about.motto")}</p>
        </div>

        <div className="cards">
          {cards.map((card) => (
            <div
              key={card.number}
              id="card"
              className={`${card.className} card`}
            >
              <img src={card.image} alt="" />
              <h2>{card.number}</h2>
              <div className="card-body">
                <div>
                  <h5>{t(`about.cards.${card.translationKey}.title`)}</h5>
                  <p>{t(`about.cards.${card.translationKey}.description`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Info />
    </>
  );
}

export default About;
