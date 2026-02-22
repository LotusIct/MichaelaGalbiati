import React, { useState } from "react";
import "../styles/menu.css";
import logo from "../assets/logomimi.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className={`navbar-menu-wrapper ${menuOpen ? "active" : ""}`}>
          <ul className="navbar-menu">
            <li><a href="#about" onClick={closeMenu}>about</a></li>
            <li><a href="#projects" onClick={closeMenu}>studio</a></li>
            <li><a href="#learn" onClick={closeMenu}>learn</a></li>
            <li><a href="#project" onClick={closeMenu}>projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>contact</a></li>
          </ul>

          {/* 👇 Redes sociais dentro do menu mobile */}
          <ul className="navbar-socials mobile-socials">
            <li><a href="mailto:michaela.galbiati@gmail.com"><i className="fas fa-envelope"></i></a></li>
            <li><a href="https://github.com/Michaela-Galbiati" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/michaela-galbiati" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.instagram.com/michaelagalbiati/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>

        {/* 👇 Mantém redes no desktop */}
        <ul className="navbar-socials desktop-socials">
          <li><a href="mailto:michaela.galbiati@gmail.com"><i className="fas fa-envelope"></i></a></li>
          <li><a href="https://github.com/Michaela-Galbiati" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/michaela-galbiati" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.instagram.com/michaelagalbiati/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
        </ul>

        <button
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </nav>
  );
}