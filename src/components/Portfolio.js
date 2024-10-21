import React, { useEffect, useState } from "react";

// Importation des images
import bookiImg from "../images/projet-booki.png";
import ohmyfoodImg from "../images/projet-ohmyfood.png";
import sophiebluelImg from "../images/projet-sophiebluel.png";
import kasaImg from "../images/projet-kasa.png";
import ninaCarducciImg from "../images/projet-nina-carducci.png";
import eventsImg from "../images/projet-724-events.png";
import argentBankImg from "../images/projet-argentBank.png";
import qwentaImg from "../images/projet-qwenta.png";

// Importation de Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalData, setModalData] = useState({ title: "", description: "" });

  const projects = [
    {
      title: "Booki",
      img: bookiImg,
      category: "Web development",
      description:
        "Création de la page d'accueil d'une agence de voyage avec une interface responsive utilisant HTML5 et CSS3. Intégration de maquettes Figma et développement de composants personnalisés pour une expérience utilisateur optimale.\nLien vers le projet : https://github.com/Jordan-celton/P3",
    },
    {
      title: "Ohmyfood",
      img: ohmyfoodImg,
      category: "Web design",
      description:
        "Objectifs d'apprentissage : conception mobile-first, implémentation d'animations CSS, utilisation de Sass pour un code maintenable, et versionnement avec Git et GitHub.\nLien vers le projet : https://github.com/Jordan-celton/P4",
    },
    {
      title: "Portfolio Architecte Intérieur",
      img: sophiebluelImg,
      category: "Web design",
      description:
        "Développement d'une page web dynamique pour un site d'architecte d'intérieur avec JavaScript. Interaction avec une API, création de pages dynamiques et utilisation d'outils comme Figma et Visual Studio Code.\nLien vers le projet : https://github.com/Jordan-celton/P6",
    },
    {
      title: "Refonte du site Kasa",
      img: kasaImg,
      category: "Applications",
      description:
        "Implémentation du front-end d'une application avec React et React Router. Développement de composants, gestion de la navigation et utilisation de données simulées à partir d'un fichier JSON.\nLien vers le projet : https://github.com/Jordan-celton/P7",
    },
    {
      title: "Nina Carducci - Optimisation SEO",
      img: ninaCarducciImg,
      category: "Web development",
      description:
        "Optimisation du référencement d'un site web en améliorant sa performance et son accessibilité. Analyse des problèmes, mise en œuvre d'améliorations et création d'un rapport détaillant les résultats avant/après.\nLien vers le projet : https://github.com/Jordan-celton/P8",
    },
    {
      title: "724events - Debug et test",
      img: eventsImg,
      category: "Web development",
      description:
        "Débuggage et finalisation d'un site one-page. Analyse du code, résolution de bugs avec les Chrome DevTools et React Developer Tools, documentation des tests, et gestion de projet avec Yarn.\nLien vers le projet : https://github.com/Jordan-celton/P9",
    },
    {
      title: "Argent Bank - Dashboard utilisateur",
      img: argentBankImg,
      category: "Applications",
      description:
        "Développement du front-end d'une application bancaire avec React et Redux. Intégration des appels API, création d'une interface utilisateur responsive et gestion de l'état global avec Redux.\nLien vers le projet : https://github.com/Jordan-celton/P10",
    },
    {
      title: "Menu Maker - Qwenta",
      img: qwentaImg,
      category: "Web development",
      description:
        "Développement du projet **Menu Maker - Qwenta**, un outil en ligne pour la création et la personnalisation de menus par les restaurateurs.\nLien vers le projet : https://github.com/Jordan-celton/P11",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openModal = (title, description) => {
    setModalData({ title, description });
    const modal = document.getElementById("projectModal");
    modal.style.display = "block";
  };

  const closeModal = () => {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
  };

  useEffect(() => {
    const modal = document.getElementById("projectModal");
    const closeBtn = document.querySelector(".close");

    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    return () => {
      closeBtn.removeEventListener("click", closeModal);
      window.removeEventListener("click", closeModal);
    };
  }, []);

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {["All", "Web design", "Applications", "Web development"].map(
            (category) => (
              <li className="filter-item" key={category}>
                <button
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                  data-filter-btn
                >
                  {category}
                </button>
              </li>
            )
          )}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Choisir une catégorie
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {["All", "Web design", "Applications", "Web development"].map(
              (category) => (
                <li className="select-item" key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    data-select-item
                  >
                    {category}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.title}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <button
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Empêche le comportement par défaut du lien
                  openModal(project.title, project.description);
                }}
              >
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <img src={project.img} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </button>
            </li>
          ))}
        </ul>

        {/* Modale */}
        <div id="projectModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h2 id="modalTitle">{modalData.title}</h2>
            <p id="modalDescription">{modalData.description}</p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Portfolio;
