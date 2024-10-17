// src/components/Resume.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBriefcase } from "@fortawesome/free-solid-svg-icons"; // Importer les icônes nécessaires

const Resume = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Mon Parcours</h2>
      </header>

      {/* Éducation */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBook} /> {/* Utiliser l'icône de livre */}
          </div>
          <h3 className="h3">Éducation</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              OpenClassrooms - Développeur Web
            </h4>
            <span>2024 - 9 mois</span>
            <p className="timeline-text">
              Formation intensive d'Intégrateur Web, apprenant des technologies
              front-end et back-end, et réalisant plusieurs projets concrets.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Baccalauréat Technique de l'Usinage - Lycée Le Likes
            </h4>
            <span>2008</span>
            <p className="timeline-text">
              Obtention du Baccalauréat avec spécialisation en techniques
              d'usinage, au lycée Le Likes, développant des compétences en
              programmation et en fabrication industrielle.
            </p>
          </li>
        </ol>
      </section>

      {/* Expérience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBriefcase} />{" "}
            {/* Utiliser l'icône de briefcase */}
          </div>
          <h3 className="h3">Expérience Professionnelle</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Développeur Web Freelance
            </h4>
            <span>2024 — Présent</span>
            <p className="timeline-text">
              Réalisation de sites internet et d’applications pour des clients
              dans divers secteurs, en utilisant des technologies modernes comme
              HTML, CSS, JavaScript, et React.
            </p>
          </li>
        </ol>
      </section>

      {/* Compétences */}
      <section className="skill">
        <h3 className="h3 skills-title">Mes Compétences</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">HTML / CSS</h5>
              <data value="70">70%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">JavaScript</h5>
              <data value="50">50%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "50%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">React</h5>
              <data value="50">50%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "50%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Git / GitHub</h5>
              <data value="60">60%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "60%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resume;
