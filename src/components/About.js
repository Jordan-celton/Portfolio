import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faCode,
  faDesktop,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { TranslationContext } from "../App";

const About = () => {
  const { translations } = useContext(TranslationContext);

  const services = [
    {
      icon: faPaintBrush,
      title: translations.designWebTitle,
      text: translations.designWebText,
    },
    {
      icon: faCode,
      title: translations.integrationWebTitle,
      text: translations.integrationWebText,
    },
    {
      icon: faDesktop,
      title: translations.developmentFrontEndTitle,
      text: translations.developmentFrontEndText,
    },
    {
      icon: faRocket,
      title: translations.optimizationPerformanceTitle,
      text: translations.optimizationPerformanceText,
    },
  ];

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
          {services.map((service, index) => (
            <li className="service-item" key={index}>
              <div className="service-icon-box">
                <FontAwesomeIcon icon={service.icon} size="2x" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
