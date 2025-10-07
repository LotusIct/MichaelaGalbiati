import React from "react";
import "../styles/projects.css";

const projects = [
  {
    id: 1,
    title: "Blog DeepBit",
    description: "Um blog interativo da IA preditiva da MG Dimensional Tech, com conteúdo sobre tecnologia, estratégia e inovação.",
    image: "/images/blog-deepbit.png",
  },
  {
    id: 2,
    title: "Personal Travel Pest",
    description: "Landing page para um serviço exclusivo de viagens personalizadas, com roteiros sob medida e experiências únicas.",
    image: "/images/travel-pest.png",
  },
  {
    id: 3,
    title: "Pesquisa Aromas Frutais",
    description: "Página institucional de um projeto de pesquisa laboratorial sobre aromas frutais e aplicações sensoriais.",
    image: "/images/lab-aromas.png",
  },
  {
    id: 4,
    title: "E-commerce SneakerLab",
    description: "Loja virtual especializada em tênis exclusivos e colecionáveis, com design moderno e navegação fluida.",
    image: "/images/sneakerlab.png",
  },
  {
    id: 5,
    title: "Portfólio Jurídico & BI",
    description: "Site pessoal de um profissional com formação em Direito e atuação em Business Intelligence e consultoria empresarial.",
    image: "/images/portfolio-juridico.png",
  },
  {
    id: 6,
    title: "Studio MGD",
    description: "Website de um estúdio criativo especializado em marketing digital, design gráfico e branding estratégico.",
    image: "/images/studio-mgd.png",
  },
  {
    id: 7,
    title: "Portal Empresários MGDimensional",
    description: "Site de apresentação e conexão dos empresários e parceiros da MG Dimensional Tech.",
    image: "/images/empresarios-mg.png",
  },
  {
    id: 8,
    title: "Dashboard IA Estratégica",
    description: "Ferramenta analítica com painéis interativos de dados estratégicos, apoiada por IA preditiva.",
    image: "/images/dashboard-ia.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container">
      <h2>Side Projects</h2>
      <div className="projects-grid">
        {projects.map(({ id, title, description, image }) => (
          <div key={id} className="box project-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
