import React from "react";
import "../styles/footer.css";

import logo from "../assets/logomib.png"; // ajuste o caminho conforme a pasta

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>

        <div className="footer-text">
          <p>Construindo conexões que fazem a diferença.</p>
        </div>
      </div>

      <div className="footer-copy">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
