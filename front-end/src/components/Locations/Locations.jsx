import "./Locations.css";
import { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { RiVidiconLine } from "react-icons/ri";
import { GiElectric } from "react-icons/gi";
import {
  MdOutlineHealthAndSafety,
  MdMoreTime,
  MdMonitorHeart,
} from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function Locations() {
  const { t, i18n } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState("location3");

  const translation = {
    bannerSection: {
      title: t("locationsPage.bannerSection.title"),
      description: t("locationsPage.bannerSection.description"),
    },
    buttons: {
      location1: t("locationsPage.buttons.btn1"),
      location2: t("locationsPage.buttons.btn2"),
      location3: t("locationsPage.buttons.btn3"),
    },
    locations: {
      nileLocation: {
        title: t("locationsPage.locations.nileLocation.title"),
        location: t("locationsPage.locations.nileLocation.location"),
        telephone: t("locationsPage.locations.nileLocation.telephone"),
        workingHours: t("locationsPage.locations.nileLocation.workingHours"),
        note: t("locationsPage.locations.nileLocation.note"),
        extra: {
          getDirections: t(
            "locationsPage.locations.nileLocation.extra.getDirections"
          ),
          ContactSecretary: t(
            "locationsPage.locations.nileLocation.extra.ContactSecretary"
          ),
        },
      },
      homeVisit: {
        telemedicineService: {
          title: t(
            "locationsPage.locations.homeVisit.telemedicineService.title"
          ),
          subTitle: t(
            "locationsPage.locations.homeVisit.telemedicineService.subTitle"
          ),
          description: t(
            "locationsPage.locations.homeVisit.telemedicineService.description"
          ),
          buttonText: t(
            "locationsPage.locations.homeVisit.telemedicineService.buttonText"
          ),
        },
        homeVisitService: {
          title: t("locationsPage.locations.homeVisit.homeVisitService.title"),
          subTitle: t(
            "locationsPage.locations.homeVisit.homeVisitService.subTitle"
          ),
          description: t(
            "locationsPage.locations.homeVisit.homeVisitService.description"
          ),
        },
      },
      kafrShukr: {
        title: t("locationsPage.locations.kafrShukr.title"),
        location: t("locationsPage.locations.kafrShukr.location"),
        telephone: t("locationsPage.locations.kafrShukr.telephone"),
        workingHours: t("locationsPage.locations.kafrShukr.workingHours"),
        note: t("locationsPage.locations.kafrShukr.note"),
        extra: {
          ultraSound: {
            title: t(
              "locationsPage.locations.kafrShukr.extra.ultraSound.title"
            ),
            subTitle: t(
              "locationsPage.locations.kafrShukr.extra.ultraSound.subTitle"
            ),
            description: t(
              "locationsPage.locations.kafrShukr.extra.ultraSound.description"
            ),
            telephone: t(
              "locationsPage.locations.kafrShukr.extra.ultraSound.telephone"
            ),
          },
          getDirections: t(
            "locationsPage.locations.kafrShukr.extra.getDirections"
          ),
          ContactSecretary: t(
            "locationsPage.locations.kafrShukr.extra.ContactSecretary"
          ),
        },
      },
    },
  };

  const Location2Content = () => (
    <div className="loc2-container">
      <div className="tele">
        <h1 className={`${i18n.dir()}`}>
          <RiVidiconLine className="feat-icon section-icon" />
          {translation.locations.homeVisit.telemedicineService.title}
        </h1>
        <p className="subtitle">
          {t(translation.locations.homeVisit.telemedicineService.subTitle)}
        </p>
        <p className="sub-paragraph">
          {t(translation.locations.homeVisit.telemedicineService.description)}
        </p>
        <br></br>
        <a
          href="https://www.facebook.com/share/p/QEt9wGVNbnzZTVaw/"
          target="_blank"
          className="read-btn"
        >
          {t(translation.locations.homeVisit.telemedicineService.buttonText)}
        </a>
      </div>
      <hr />
      <div className="home">
        <h1 className={`${i18n.dir()}`}>
          <IoHomeOutline className={`feat-icon section-icon`} />{" "}
          {translation.locations.homeVisit.homeVisitService.title}
        </h1>
        <p className="subtitle">
          {t(translation.locations.homeVisit.homeVisitService.subTitle)}
        </p>
        <p className="sub-paragraph">
          {t(translation.locations.homeVisit.homeVisitService.description)}
        </p>
      </div>
      <hr />
      <div className="contact-icons">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=%2B201143410534&context=ARBoWH2bcXRLE46eap1ChI_
        JrR_F4ildQ9NVo4FJNRSVVu042bjoLfU_HTuC_zyOVqYLX1eECUNYu4cQPOEjSFtHnuEHDTbpyFLXjLf_uMTsoHFP1zq3pAPiuGkMmZ9LWPIZPOs8bPkYI_rqx-Ipw6qnxQ"
        >
          <FaWhatsapp className="contact-icon whatsapp" />
        </a>
        <a href="tel:+2010043410534">
          <IoCallOutline className="contact-icon call" />
        </a>
        <a target="_blank" href="https://www.facebook.com/dr.abdelsattarnasr">
          <FaFacebook className="contact-icon facebook" />
        </a>
      </div>
    </div>
  );

  return (
    <>
      <div className="locations-container">
        <div className="title-banner">
          <div className="content">
            <div className="title">{translation.bannerSection.title}</div>
            <div className="paragraph">
              {translation.bannerSection.description}
            </div>
          </div>

          <div className="features">
            <RiVidiconLine className="feat-icon" />
            <IoHomeOutline className="feat-icon" />
            <GiElectric className="feat-icon" />
            <MdOutlineHealthAndSafety className="feat-icon" />
            <MdMoreTime className="feat-icon" />
            <MdMonitorHeart className="feat-icon" />
          </div>
        </div>

        <div className="container">
          <div className="button-group">
            <button
              className={`location-button ${
                selectedLocation === "location3" ? "active" : ""
              }`}
              onClick={() => setSelectedLocation("location3")}
            >
              {translation.buttons.location1}
            </button>
            <button
              className={`location-button ${
                selectedLocation === "location2" ? "active" : ""
              }`}
              onClick={() => setSelectedLocation("location2")}
            >
              {translation.buttons.location2}
            </button>

            <button
              className={`location-button ${
                selectedLocation === "location1" ? "active" : ""
              }`}
              onClick={() => setSelectedLocation("location1")}
            >
              {translation.buttons.location3}
            </button>
          </div>

          <SwitchTransition mode="out-in">
            <CSSTransition
              key={selectedLocation}
              timeout={300}
              classNames="info-fade"
            >
              <div className="location-info">
                {selectedLocation === "location1" && (
                  <div className="info-text">
                    <h2>{translation.locations.kafrShukr.title}</h2>
                    <p>
                      <i className="lni lni-map-marker info-icon"></i>{" "}
                      {translation.locations.kafrShukr.location}
                    </p>
                    <p>
                      <i className="lni lni-phone info-icon"></i>{" "}
                      {translation.locations.kafrShukr.telephone}
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faClockFour}
                        className="info-icon"
                      />{" "}
                      {translation.locations.kafrShukr.workingHours}
                    </p>
                    <p>
                      <i className="lni lni-popup info-icon warn"></i>{" "}
                      {translation.locations.kafrShukr.note}
                    </p>
                    <hr className="divider" />
                    <div className="info-note">
                      <h5>
                        {translation.locations.kafrShukr.extra.ultraSound.title}
                      </h5>
                      <h6>
                        {
                          translation.locations.kafrShukr.extra.ultraSound
                            .subTitle
                        }
                      </h6>
                      <p className="paragprah">
                        {
                          translation.locations.kafrShukr.extra.ultraSound
                            .description
                        }
                      </p>
                      <p>
                        <TbDeviceLandlinePhone className="info-icon" />{" "}
                        {
                          translation.locations.kafrShukr.extra.ultraSound
                            .telephone
                        }
                      </p>
                    </div>
                    <hr className="divider" />
                    <div className="start-bar">
                      <div className="dirc">
                        <p className="dir-p">
                          <CiLocationArrow1 className="info-icon" />{" "}
                          <a
                            href="https://maps.app.goo.gl/weXXKKRKYs45hbQE8"
                            target="_blank"
                            className="directions"
                          >
                            {
                              translation.locations.kafrShukr.extra
                                .getDirections
                            }
                          </a>
                        </p>
                      </div>

                      <div className="call">
                        <p className="dir-p">
                          <IoCallOutline className="info-icon" />
                          <a href="tel:+201110767434" className="call-p">
                            {
                              translation.locations.kafrShukr.extra
                                .ContactSecretary
                            }
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedLocation === "location2" && <Location2Content />}

                {selectedLocation === "location3" && (
                  <div className="info-text">
                    <h2>{translation.locations.nileLocation.title}</h2>
                    <p>
                      <i className="lni lni-map-marker info-icon"></i>{" "}
                      {translation.locations.nileLocation.location}
                    </p>
                    <p>
                      <i className="lni lni-phone info-icon"></i>{" "}
                      {translation.locations.nileLocation.telephone}
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faClockFour}
                        className="info-icon"
                      />{" "}
                      {translation.locations.nileLocation.workingHours}
                    </p>
                    <p>
                      <i className="lni lni-popup info-icon warn"></i>{" "}
                      {translation.locations.nileLocation.note}
                    </p>
                    <hr className="divider" />
                    <div className="start-bar">
                      <div className="dirc">
                        <p className="dir-p">
                          <CiLocationArrow1 className="info-icon" />{" "}
                          <a
                            href="https://maps.app.goo.gl/UNmSERTcKMzkfdsx6"
                            target="_blank"
                            className="directions"
                          >
                            {
                              translation.locations.nileLocation.extra
                                .getDirections
                            }
                          </a>
                        </p>
                      </div>

                      <div className="call">
                        <p className="dir-p">
                          <IoCallOutline className="info-icon" />
                          <a href="tel:+201110767434" className="call-p">
                            {
                              translation.locations.nileLocation.extra
                                .ContactSecretary
                            }
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Conditionally render map only for location1 and location3 */}
                {selectedLocation !== "location2" && (
                  <div className="map-container">
                    <iframe
                      src={
                        selectedLocation === "location1"
                          ? "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3893.2462739316984!2d31.242094675572297!3d30.526786974684224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDMxJzM2LjQiTiAzMcKwMTQnNDAuOCJF!5e1!3m2!1sen!2seg!4v1725347939856!5m2!1sen!2seg"
                          : selectedLocation === "location3"
                          ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.76791744536!2d31.241252700000004!3d30.100832399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458411da4a8c2ab%3A0x574250ce05aa6943!2z2LnZitin2K_YqSDYr9mD2KrZiNixINi52KjYr9in2YTYs9iq2KfYsSDZhti12LEg2YTZhNmC2YTYqCDZiNin2YTYp9mI2LnZitipINin2YTYr9mF2YjZitipINmI2KfZhNmC2LPYt9ix2Kk!5e0!3m2!1sen!2seg!4v1738274556079!5m2!1sen!2seg"
                          : ""
                      }
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                    ></iframe>
                  </div>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </>
  );
}

export default Locations;
