import React from "react";
import "../styles/footer.css";

import logo from "../assets/logomimi.png";

// ÍCONES
import { FiPhone, FiMail, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>

        {/* SEÇÃO DE CONTATOS */}
        <div className="footer-contact">
          <a href="tel:+55021978128888">
            <FiPhone className="footer-icon" />
            +55 (21) 97812-8888
          </a>

          <a href="mailto:michaela.galbiati@gmail.com">
            <FiMail className="footer-icon" />
            michaela.galbiati@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/michaelagalbiati"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className="footer-icon" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-text">
        <p>Construindo conexões que fazem a diferença.</p>
      </div>

      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Michaela Galbiati. All rights reserved.
      </div>
    </footer>
  );
}
