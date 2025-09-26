import React from "react";
import "../styles/hero.css";
//import profileImage from "../assets/IMG_20221108_155639_004.jpg"; // Coloque sua imagem em src/assets

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Michaela Galbiati</h1>
        <h2>Full-Stack Developer | UI/UX Designer</h2>
        <p>
          “Inovação distingue um líder de um seguidor.”<br />
          <span>– Steve Jobs</span>
        </p>
      </div>
   {/*    <div className="hero-image">
        <img src={profileImage} alt="Michaela Galbiati" />
      </div> */}
    </section>
  );
}
