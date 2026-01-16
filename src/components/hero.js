import React from "react";
import "../styles/hero.css";
import heroVideo from "../assets/videobanner.mp4"; // importe seu vídeo

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-text">
        <h1>Inovação que transforma negócios.</h1>
        <h2>Conectando dados, estratégia e resultados.</h2>
      </div>
    </section>
  );
}
