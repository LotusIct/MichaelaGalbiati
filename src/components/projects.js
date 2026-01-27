import React, { useState } from "react";
import "../styles/projects.css";

import blogDeepbit from "../assets/projects/mirai.mp4";
import travelPest from "../assets/projects/trip patas.mp4";
import labAromas from "../assets/projects/microarome.mp4";
import sneakerLab from "../assets/projects/solea.mp4";
import portfolioJuridico from "../assets/projects/portifólio.mp4";
import studioMGD from "../assets/projects/vibe.mp4";
import empresariosMG from "../assets/projects/imbas.mp4";
import icr3 from "../assets/projects/icr3.mp4";

const projects = [
  {
    id: 1,
    title: "Mirai",
    description:
      "Um blog interativo da IA preditiva da Imbas, com conteúdo sobre tecnologia, estratégia e inovação.",
    video: blogDeepbit,
    link: "https://blog-teste-beta.vercel.app/",
  },
  {
    id: 2,
    title: "Patas pelo Brasil",
    description:
      "Landing page para um serviço exclusivo de viagens personalizadas.",
    video: travelPest,
    link: "https://trip-green-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "MicroAroma",
    description:
      "Página institucional de um projeto de pesquisa laboratorial.",
    video: labAromas,
    link: "https://industrial-ecru.vercel.app/",
  },
  {
    id: 4,
    title: "Solea",
    description:
      "Loja virtual especializada em tênis exclusivos e colecionáveis.",
    video: sneakerLab,
    link: "https://tenis-one.vercel.app/",
  },
  {
    id: 5,
    title: "Portfólio Profissional",
    description:
      "Site pessoal com foco em Business Intelligence e consultoria.",
    video: portfolioJuridico,
    link: "https://teste-landing-pages.vercel.app/",
  },
  {
    id: 6,
    title: "Vibe Studio",
    description:
      "Website de um estúdio criativo especializado em marketing digital.",
    video: studioMGD,
    link: "https://studio-gyy6.vercel.app/",
  },
  {
    id: 7,
    title: "Imbas",
    description:
      "Site de apresentação e conexão de empresários.",
    video: empresariosMG,
    link: "https://new-tau-taupe.vercel.app/",
  },
  {
    id: 8,
    title: "ICR3",
    description:
      "Site institucional com foco em produtos e soluções.",
    video: icr3,
    link: "https://www.icr3.com.br/",
  },
];

const VISIBLE_SLIDES = 3;

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) =>
      prev + 1 > projects.length - VISIBLE_SLIDES ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - VISIBLE_SLIDES : prev - 1
    );
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + VISIBLE_SLIDES
  );

  return (
    <section id="projects" className="container">
      <h2>Side Projects</h2>

      <div className="projects-carousel">
        <button className="slider-btn left" onClick={prev}>
          ◀
        </button>

        <div className="projects-track">
          {visibleProjects.map(({ id, title, description, video, link }) => (
            <div key={id} className="project-card">
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="project-video"
              />

              <h3>{title}</h3>
              <p>{description}</p>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                Saiba mais
              </a>
            </div>
          ))}
        </div>

        <button className="slider-btn right" onClick={next}>
          ▶
        </button>
      </div>
    </section>
  );
}
