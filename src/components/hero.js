import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>
          Full Stack Engineer <span>& AI Developer</span>
        </h1>

        <h2>
          Building scalable systems and intelligent solutions.
        </h2>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
