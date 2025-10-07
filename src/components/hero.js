import React from "react";
import "../styles/hero.css";
import profileImage from "../assets/fundomika.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={profileImage} alt="Michaela Galbiati" className="hero-image" />
      <div className="hero-text">
        <h1>Inovação que transforma negócios.</h1>
        <h2>Conectando dados, estratégia e resultados.</h2>
      </div>
    </section>
  );
}
