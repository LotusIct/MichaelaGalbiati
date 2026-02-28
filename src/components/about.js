import React, { useState } from "react";
import "../styles/about.css";
import TypingText from "./Type";
import minhaFoto from "../assets/michaela.png";
const areas = [
  {
    title: "AI Engineering & Data Science",
    text:
      "Desenvolvimento de soluções baseadas em Inteligência Artificial e Machine Learning, incluindo modelagem preditiva, engenharia de dados, otimização de algoritmos, Deep Learning e Visão Computacional. Aplicação de IA em cenários corporativos, automação de processos, análise estratégica de dados e construção de sistemas inteligentes orientados a negócio.",
  },
  {
    title: "Software Engineering",
    text:
      "Arquitetura e desenvolvimento de sistemas escaláveis e orientados a dados, incluindo APIs robustas, integração entre sistemas corporativos e aplicações de alta performance. Aplicação de boas práticas de engenharia de software, segurança, qualidade de código, testes e metodologias ágeis para entrega contínua de soluções eficientes.",
  },
  {
    title: "Automation, Robotics & Embedded Systems",
    text:
      "Atuação em automação industrial, integração de sistemas, controle de processos e desenvolvimento de soluções embarcadas e IoT. Implementação de comunicação entre dispositivos, monitoramento inteligente, telemetria e construção de arquiteturas que conectam software, hardware e dados para otimização operacional.",
  },
  {
    title: "Business Strategy & Technology",
    text:
      "Estruturação e acompanhamento de projetos de TI, definição de escopo, requisitos e cronogramas, alinhando tecnologia às estratégias organizacionais. Aplicação de princípios de Engenharia de Negócios para transformar dados e sistemas em vantagem competitiva e geração de valor sustentável.",
  },
];

export default function About() {
  const [activeArea, setActiveArea] = useState(areas[0]);

  return (
    <section id="about" className="about">
      <div className="about-header">
          <div className="about-photo">
      <img src={minhaFoto} alt="Minha foto" />
    </div>
        <TypingText text="Hello!! I'm Michaela Galbiati!" speed={100} />
      </div>

     <p className="about-summary">
  Engenheira de Software com atuação estratégica em Inteligência Artificial, Automação e Sistemas Inteligentes, integrando tecnologia, dados e visão de negócios para desenvolvimento de soluções escaláveis e de alto impacto. Experiência em projetos corporativos envolvendo IA aplicada, integração de sistemas, arquitetura full-stack e otimização de processos organizacionais.
</p>

      {/* BOTÕES */}
      <div className="about-buttons">
        {areas.map((area) => (
          <button
            key={area.title}
            className={`about-button ${
              activeArea.title === area.title ? "active" : ""
            }`}
            onClick={() => setActiveArea(area)}
          >
            {area.title}
          </button>
        ))}
      </div>

      {/* CONTEÚDO DINÂMICO */}
      <div className="about-content">
        <h3>{activeArea.title}</h3>
        <p>{activeArea.text}</p>
      </div>
    </section>
  );
}
