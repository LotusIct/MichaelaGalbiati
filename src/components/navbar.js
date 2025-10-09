import React, { useState } from "react";
import "../styles/menu.css";
import logo from "../assets/logomib.png"; // <-- Aqui importa seu logo

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
            <li><a href="#project" onClick={closeMenu}>Projects</a></li>
            <li><a href="#learn" onClick={closeMenu}>learn</a></li>
            
            <li><a href="#contact" onClick={closeMenu}>contact</a></li>
          </ul>
        </div>

        <ul className="navbar-socials">
          <li><a href="mailto:seuemail@gmail.com"><i className="fas fa-envelope"></i></a></li>
          <li><a href="https://github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
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
