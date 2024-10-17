import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faCode,
  faDesktop,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">À propos</h2>
        </header>

        <section className="about-text">
          <p>
            Après plusieurs années dans un autre domaine, j'ai décidé de me
            reconvertir dans le développement web, et plus précisément en tant
            qu'intégrateur web. Ce choix a été motivé par ma passion pour la
            création de sites internet et mon envie de combiner créativité et
            technologie. Aujourd'hui, je prends un réel plaisir à construire des
            sites intuitifs, modernes, et adaptés aux besoins des utilisateurs.
            Chaque projet est pour moi l'opportunité d'apprendre, de relever de
            nouveaux défis et d'améliorer mes compétences.
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">Ce que je fais</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <FontAwesomeIcon icon={faPaintBrush} size="2x" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Design Web</h4>

                <p className="service-item-text">
                  Création de designs modernes et intuitifs, adaptés aux besoins
                  des utilisateurs et des entreprises.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <FontAwesomeIcon icon={faCode} size="2x" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Intégration Web</h4>

                <p className="service-item-text">
                  Intégration de sites web responsive, optimisés pour tous types
                  d'écrans, en utilisant les meilleures pratiques du web.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <FontAwesomeIcon icon={faDesktop} size="2x" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Développement Front-End
                </h4>

                <p className="service-item-text">
                  Développement de l'interface utilisateur, en veillant à une
                  expérience fluide et agréable pour les visiteurs.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <FontAwesomeIcon icon={faRocket} size="2x" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Optimisation et Performance
                </h4>

                <p className="service-item-text">
                  Amélioration de la vitesse et des performances des sites web
                  pour une navigation rapide et sans accroc.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default About;
