import React from "react";
import "../styles/projects.css";

// imports dos vídeos
import blogDeepbit from "../assets/projects/mirai.mp4";
import travelPest from "../assets/projects/trip patas.mp4";
import labAromas from "../assets/projects/microarome.mp4";
import sneakerLab from "../assets/projects/solea.mp4";
import portfolioJuridico from "../assets/projects/portifólio.mp4";
import studioMGD from "../assets/projects/vibe.mp4";
import empresariosMG from "../assets/projects/imbas.mp4";

const projects = [
  {
    id: 1,
    title: "Mirai",
    description:
      "Um blog interativo da IA preditiva da Imbas, com conteúdo sobre tecnologia, estratégia e inovação.",
    video: blogDeepbit,
    link: "https://blog-teste-beta.vercel.app/"
  },
  {
    id: 2,
    title: "Patas pelo Brasil",
    description:
      "Landing page para um serviço exclusivo de viagens personalizadas, com roteiros sob medida e experiências únicas.",
    video: travelPest,
    link: "https://trip-green-zeta.vercel.app/"
  },
  {
    id: 3,
    title: "MicroAroma",
    description:
      "Página institucional de um projeto de pesquisa laboratorial sobre aromas frutais e aplicações sensoriais.",
    video: labAromas,
    link: "https://industrial-ecru.vercel.app/"
  },
  {
    id: 4,
    title: "Solea",
    description:
      "Loja virtual especializada em tênis exclusivos e colecionáveis, com design moderno e navegação fluida.",
    video: sneakerLab,
    link: "https://tenis-one.vercel.app/"
  },
  {
    id: 5,
    title: "Portfólio Profissional",
    description:
      "Site pessoal de um profissional com formação em Direito e atuação em Business Intelligence e consultoria empresarial.",
    video: portfolioJuridico,
    link: "https://teste-landing-pages.vercel.app/"
  },
  {
    id: 6,
    title: "Vibe Studio",
    description:
      "Website de um estúdio criativo especializado em marketing digital, design gráfico e branding estratégico.",
    video: studioMGD,
    link: "https://studio-gyy6.vercel.app/"
  },
  {
    id: 7,
    title: "Imbas",
    description:
      "Site de apresentação e conexão dos empresários e parceiros da MG Dimensional Tech.",
    video: empresariosMG,
    link: "https://new-tau-taupe.vercel.app/"
  }
];


export default function Projects() {
  return (
    <section id="projects" className="container">
      <h2>Side Projects</h2>

      <div className="projects-grid">
  {projects.map(({ id, title, description, video, link }) => (
    <div key={id} className="box project-card">
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

    </section>
  );
}
