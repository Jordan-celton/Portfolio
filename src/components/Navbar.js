import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/resume" className="navbar-link">
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/portfolio" className="navbar-link">
            Portfolio
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
