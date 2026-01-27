import React, { useState } from "react";
import "../styles/about.css";
import TypingText from "./Type";

const areas = [
  {
    title: "IA & Data Science",
    text:
      "Desenvolvimento e aplicação de modelos de Machine Learning e Deep Learning, incluindo pré-processamento e engenharia de dados, seleção e otimização de algoritmos, visão computacional, robótica inteligente e análise avançada de dados para automação, tomada de decisão e soluções preditivas.",
  },
  {
    title: "Engenharia de Software",
    text:
      "Desenvolvimento de sistemas robustos e escaláveis, incluindo arquiteturas distribuídas, APIs eficientes e interfaces de alto desempenho, com foco em boas práticas, qualidade de código e integração entre componentes.",
  },
  {
    title: "UI/UX",
    text:
      "Design centrado no usuário, englobando pesquisa, análise de comportamentos e testes de usabilidade. Criação de protótipos interativos, design visual consistente e acessível, garantindo experiências intuitivas e eficientes desde a concepção da ideia até a entrega final da solução.",
  },
  {
    title: "Software Embarcado & IoT",
    text:
      "Desenvolvimento de sistemas embarcados e soluções conectadas, utilizando microcontroladores, sensores e protocolos de comunicação para IoT, automação e monitoramento inteligente.",
  },
];

export default function About() {
  const [activeArea, setActiveArea] = useState(areas[0]);

  return (
    <section id="about" className="about">
      <div className="about-header">
        <div className="about-photo"></div>
        <TypingText text="Hello, prazer! Sou Michaela Galbiati" speed={100} />
      </div>

      <p className="about-summary">
        Com quase 10 anos de experiência em Desenvolvimento de Software, IA e Data Science, atuei em projetos de grande complexidade e impacto, abrangendo Governança de Dados, Análise de Negócios e Engenharia de Software Full-Stack...
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
