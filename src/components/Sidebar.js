import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCalendar,
  faMapMarkerAlt,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import PhotoProfil from "../images/photo profil.jpg"; // Assurez-vous que le chemin de l'image est correct
import { TranslationContext } from "../App"; // Chemin correct

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const { translations } = useContext(TranslationContext); // Utilisez useContext pour accéder aux traductions

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={PhotoProfil} alt="Jordan Celton" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title={translations.name}>
            {translations.name}
          </h1>
          <p className="title">{translations.title}</p>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={toggleSidebar}
        >
          <span>
            {isActive ? translations.hideContacts : translations.showContacts}
          </span>
          <FontAwesomeIcon icon={isActive ? faChevronUp : faChevronDown} />
        </button>
      </div>

      <div className={`sidebar-info_more ${isActive ? "visible" : "hidden"}`}>
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-info">
              <p className="contact-title">{translations.email}</p>
              <a
                href="mailto:celton.jordan@outlook.fr"
                className="contact-link"
              >
                celton.jordan@outlook.fr
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="contact-info">
              <p className="contact-title">{translations.phone}</p>
              <a href="tel:+12133522795" className="contact-link">
                06 81 79 40 93
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div className="contact-info">
              <p className="contact-title">{translations.dob}</p>
              <time dateTime="1988-02-20">{translations.birthdate}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="contact-info">
              <p className="contact-title">{translations.location}</p>
              <address>{translations.city}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://github.com/Jordan-celton"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/jordan-celton-3b5125293/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
