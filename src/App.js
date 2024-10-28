// src/App.js
import React, { useState, useEffect } from "react"; // Ajoutez useState et useEffect
import { Navigate } from "react-router-dom"; // Ajoutez cette ligne

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// Importation des fichiers de traduction
import en from "./locales/en.json";
import fr from "./locales/fr.json";

import FlagFrance from "./images/france_texture.gif";
import FlagEngland from "./images/england_texture.gif";

// Contexte pour la traduction
export const TranslationContext = React.createContext();

function AnimatedRoutes() {
  const location = useLocation();
  const { translations } = React.useContext(TranslationContext);
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  const isDifferentPage = location.pathname !== prevLocation;

  useEffect(() => {
    if (isDifferentPage) {
      setPrevLocation(location.pathname);
    }
  }, [location.pathname, isDifferentPage]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={isDifferentPage ? location.key : prevLocation}
        timeout={{ enter: 500, exit: 500 }}
        classNames="slide"
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<About translations={translations} />} />
          <Route
            path="/about"
            element={<About translations={translations} />}
          />
          <Route
            path="/resume"
            element={<Resume translations={translations} />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio translations={translations} />}
          />
          <Route
            path="/contact"
            element={<Contact translations={translations} />}
          />
          {/* Redirection vers la page d'accueil pour toutes les autres routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  const [language, setLanguage] = useState("FR");
  const [translations, setTranslations] = useState(fr); // Langue par défaut : FR

  // Mise à jour des traductions en fonction de la langue
  useEffect(() => {
    setTranslations(language === "FR" ? fr : en);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <TranslationContext.Provider value={{ translations }}>
      <Router>
        {/* Boutons de sélection de langue */}
        <div className="language-selector">
          <button
            onClick={() => changeLanguage("FR")}
            className={language === "FR" ? "active" : ""}
          >
            <img
              src={FlagFrance}
              alt="French"
              style={{ width: "24px", height: "24px" }}
            />
          </button>
          <button
            onClick={() => changeLanguage("EN")}
            className={language === "EN" ? "active" : ""}
          >
            <img
              src={FlagEngland}
              alt="English"
              style={{ width: "24px", height: "24px" }}
            />
          </button>
        </div>

        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <AnimatedRoutes />
          </div>
        </main>
      </Router>
    </TranslationContext.Provider>
  );
}

export default App;
