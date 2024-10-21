import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

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
            A propos
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/resume"
            className={`navbar-link ${
              location.pathname === "/resume" ? "active" : ""
            }`}
          >
            Resume
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/portfolio"
            className={`navbar-link ${
              location.pathname === "/portfolio" ? "active" : ""
            }`}
          >
            Portfolio
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/contact"
            className={`navbar-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
