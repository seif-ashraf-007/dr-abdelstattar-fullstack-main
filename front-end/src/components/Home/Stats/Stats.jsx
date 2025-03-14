import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import "./Stats.css";

function Stats() {
  const [counterState, setCounterState] = useState(false);
  const { t } = useTranslation();
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCounterState(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = triggerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const stats = [
    {
      data: "5124",
      title: t("stats.vales.value1.description"),
    },
    {
      data: "548",
      title: t("stats.vales.value2.description"),
    },
    {
      data: "10037",
      title: t("stats.vales.value3.description"),
    },
  ];

  return (
    <section className="stats-section">
      <div className="main-container">
        <div className="main-content">
          <div className="main-title">
            <h1>{t("stats.title")}</h1>
          </div>
          <h3 className="sub-title">{t("stats.sub_title")}</h3>
          <p className="description" style={{ textAlign: "center" }}>
            {t("stats.description")}
          </p>
        </div>
        <div className="stats-container">
          <div ref={triggerRef}>
            <ul className="stats-list">
              {stats.map((item, idx) => (
                <li key={idx} className="stats-item">
                  <h4 className="stats-number">
                    {counterState && <CountUp start={0} end={item.data} />}+
                  </h4>
                  <p className="stats-title">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
