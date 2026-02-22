import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>
  Software Engineer <span>& AI Engineering Specialist</span>
</h1>

<h2>
  Designing scalable architectures, intelligent systems and automation-driven solutions aligned with business strategy.
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
