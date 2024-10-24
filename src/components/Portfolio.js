import React, { useEffect, useState, useContext } from "react";

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
import { TranslationContext } from "../App"; // Importer le contexte

const Portfolio = () => {
  const { translations } = useContext(TranslationContext); // Utiliser le contexte
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalData, setModalData] = useState({ title: "", description: "" });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // État pour gérer l'ouverture du menu déroulant

  const projects = [
    {
      title: translations.bookiTitle || "Booki",
      img: bookiImg,
      category: translations.webDevelopment || "Web development",
      description: translations.bookiDescription,
    },
    {
      title: translations.ohmyfoodTitle || "Ohmyfood",
      img: ohmyfoodImg,
      category: translations.webDesign || "Web design",
      description: translations.ohmyfoodDescription,
    },
    {
      title: translations.sophiebluelTitle || "Portfolio Architecte Intérieur",
      img: sophiebluelImg,
      category: translations.webDesign || "Web design",
      description: translations.sophiebluelDescription,
    },
    {
      title: translations.kasaTitle || "Refonte du site Kasa",
      img: kasaImg,
      category: translations.applications || "Applications",
      description: translations.kasaDescription,
    },
    {
      title:
        translations.ninaCarducciTitle || "Nina Carducci - Optimisation SEO",
      img: ninaCarducciImg,
      category: translations.webDevelopment || "Web development",
      description: translations.ninaCarducciDescription,
    },
    {
      title: translations.eventsTitle || "724events - Debug et test",
      img: eventsImg,
      category: translations.webDevelopment || "Web development",
      description: translations.eventsDescription,
    },
    {
      title:
        translations.argentBankTitle || "Argent Bank - Dashboard utilisateur",
      img: argentBankImg,
      category: translations.applications || "Applications",
      description: translations.argentBankDescription,
    },
    {
      title: translations.qwentaTitle || "Menu Maker - Qwenta",
      img: qwentaImg,
      category: translations.webDevelopment || "Web development",
      description: translations.qwentaDescription,
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
        <h2 className="h2 article-title">
          {translations.portfolioTitle || "Portfolio"}
        </h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {[
            "All",
            translations.webDesign || "Web design",
            translations.applications || "Applications",
            translations.webDevelopment || "Web development",
          ].map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
                data-filter-btn
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Sélecteur pour la version mobile */}
        <div className="filter-select-box">
          <button
            className={`filter-select ${isDropdownOpen ? "active" : ""}`}
            data-select
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="select-value" data-select-value>
              {translations.chooseCategory || "Choisir une catégorie"}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          {isDropdownOpen && (
            <ul className="select-list">
              {[
                "All",
                translations.webDesign || "Web design",
                translations.applications || "Applications",
                translations.webDevelopment || "Web development",
              ].map((category) => (
                <li className="select-item" key={category}>
                  <button
                    onClick={() => {
                      setActiveCategory(category);
                      setIsDropdownOpen(false); // Ferme le menu déroulant après la sélection
                    }}
                    data-select-item
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
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
                onClick={(e) => {
                  e.preventDefault();
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
