import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { TranslationContext } from "../App";

const Resume = () => {
  const { translations } = useContext(TranslationContext);

  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">{translations?.resumeTitle}</h2>
      </header>

      {/* Éducation */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <h3 className="h3">{translations?.educationTitle}</h3>
        </div>

        <ol className="timeline-list">
          {translations?.educationList &&
            translations.educationList.map((item, index) => (
              <li className="timeline-item" key={index}>
                <h4 className="h4 timeline-item-title">{item.degree}</h4>
                <span>{item.year}</span>
                <p className="timeline-text">{item.description}</p>
              </li>
            ))}
        </ol>
      </section>

      {/* Expérience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <h3 className="h3">{translations?.experienceTitle}</h3>
        </div>

        <ol className="timeline-list">
          {translations?.experienceList &&
            translations.experienceList.map((item, index) => (
              <li className="timeline-item" key={index}>
                <h4 className="h4 timeline-item-title">{item.position}</h4>
                <span>{item.year}</span>
                <p className="timeline-text">{item.description}</p>
              </li>
            ))}
        </ol>
      </section>

      {/* Compétences */}
      <section className="skill">
        <h3 className="h3 skills-title">{translations?.skillsTitle}</h3>

        <ul className="skills-list content-card">
          {translations?.skillsList &&
            translations.skillsList.map((skill, index) => (
              <li className="skills-item" key={index}>
                <div className="title-wrapper">
                  <h5 className="h5">{skill.name}</h5>
                  <data value={skill.level}>{skill.level}%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
