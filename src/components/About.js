import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faCode,
  faDesktop,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { TranslationContext } from "../App"; // Importer le contexte

const About = () => {
  const { translations } = useContext(TranslationContext); // Utiliser le contexte

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">{translations.aboutTitle}</h2>
      </header>

      <section className="about-text">
        <p>{translations.aboutText}</p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">{translations.serviceTitle}</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <FontAwesomeIcon icon={faPaintBrush} size="2x" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                {translations.designWebTitle}
              </h4>
              <p className="service-item-text">{translations.designWebText}</p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <FontAwesomeIcon icon={faCode} size="2x" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                {translations.integrationWebTitle}
              </h4>
              <p className="service-item-text">
                {translations.integrationWebText}
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <FontAwesomeIcon icon={faDesktop} size="2x" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                {translations.developmentFrontEndTitle}
              </h4>
              <p className="service-item-text">
                {translations.developmentFrontEndText}
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <FontAwesomeIcon icon={faRocket} size="2x" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                {translations.optimizationPerformanceTitle}
              </h4>
              <p className="service-item-text">
                {translations.optimizationPerformanceText}
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
