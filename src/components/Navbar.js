import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { TranslationContext } from "../App"; // Chemin correct

const Navbar = () => {
  const location = useLocation();
  const { translations } = useContext(TranslationContext); // Utilisation du contexte pour les traductions

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            to="/about"
            className={`navbar-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            {translations.navbarAbout}
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/resume"
            className={`navbar-link ${
              location.pathname === "/resume" ? "active" : ""
            }`}
          >
            {translations.navbarResume}
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/portfolio"
            className={`navbar-link ${
              location.pathname === "/portfolio" ? "active" : ""
            }`}
          >
            {translations.navbarPortfolio}
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/contact"
            className={`navbar-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            {translations.navbarContact}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
