import React, { useState, useEffect } from "react";
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
      "Plataforma de conteúdo estratégico com foco em Inteligência Artificial preditiva, inovação e tecnologia aplicada a negócios. Estruturada para integrar storytelling, branding e visão analítica orientada a dados.",
    video: blogDeepbit,
    link: "https://blog-teste-beta.vercel.app/",
  },
  {
    id: 2,
    title: "Patas pelo Brasil",
    description:
      "Landing page desenvolvida com foco em conversão para um serviço de viagens personalizadas. Arquitetura orientada à experiência do usuário, responsividade e performance.",
    video: travelPest,
    link: "https://trip-green-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "MicroAroma",
    description:
      "Website institucional para projeto de pesquisa laboratorial, estruturado para transmitir credibilidade técnica, organização científica e clareza na apresentação de dados e objetivos.",
    video: labAromas,
    link: "https://industrial-ecru.vercel.app/",
  },
  {
    id: 4,
    title: "Solea",
    description:
      "E-commerce conceitual voltado ao mercado de sneakers exclusivos. Implementação de layout moderno, foco em branding, navegação fluida e arquitetura escalável para expansão futura.",
    video: sneakerLab,
    link: "https://tenis-one.vercel.app/",
  },
  {
    id: 5,
    title: "Portfólio Profissional",
    description:
      "Site institucional com posicionamento estratégico voltado a Business Intelligence e consultoria. Estruturado para comunicar autoridade técnica, visão analítica e proposta de valor clara.",
    video: portfolioJuridico,
    link: "https://teste-landing-pages.vercel.app/",
  },
  {
    id: 6,
    title: "Vibe Studio",
    description:
      "Website para estúdio criativo especializado em marketing digital. Design orientado à identidade visual, experiência do usuário e comunicação estratégica de serviços.",
    video: studioMGD,
    link: "https://studio-gyy6.vercel.app/",
  },
  {
    id: 7,
    title: "Imbas",
    description:
      "Plataforma institucional para conexão de empresários e networking estratégico. Estruturada para apresentar visão de negócios, autoridade e posicionamento de marca.",
    video: empresariosMG,
    link: "https://new-tau-taupe.vercel.app/",
  },
  {
    id: 8,
    title: "ICR3",
    description:
      "Website institucional voltado à apresentação de produtos e soluções. Estrutura focada em clareza, credibilidade técnica e comunicação objetiva com o mercado.",
    video: icr3,
    link: "https://www.icr3.com.br/",
  },
];

export default function Projects() {

  const [visibleSlides, setVisibleSlides] = useState(
    window.innerWidth <= 768 ? 1 : 3
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth <= 768 ? 1 : 3);
      setCurrentIndex(0); 
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prev) =>
      prev + 1 > projects.length - visibleSlides ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - visibleSlides : prev - 1
    );
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + visibleSlides
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
