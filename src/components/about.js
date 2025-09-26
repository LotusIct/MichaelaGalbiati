import React from "react";
import "../styles/about.css";

const areas = [
  {
    title: "IA & Data Science",
    text: "Aplicação de Redes Neurais e Deep Learning em soluções com Visão Computacional e Robótica Inteligente para análise de dados e automação.",
  },
  {
    title: "Backend",
    text: "Desenvolvimento de APIs escaláveis, sistemas robustos e soluções integradas com .NET Core, Python e bancos de dados relacionais e não-relacionais.",
  },
  {
    title: "Frontend",
    text: "Criação de interfaces modernas, rápidas e responsivas com React, Angular e Vue.js, priorizando performance, usabilidade e integração com APIs.",
  },
  {
    title: "UI/UX",
    text: "Design centrado no usuário com foco em prototipação, acessibilidade e usabilidade, desde a concepção da ideia até a entrega final da solução.",
  },
];

export default function About() {
  return (
    <section className="about">
      <h2>Sobre Mim</h2>
      <p className="about-summary">
        Após a formação em Análise e Desenvolvimento de Sistemas e especialização em IA e Data Science,
        atuei em projetos voltados à Governança de Dados, Análise de Negócios e Desenvolvimento Full-Stack.
        Busco alinhar tecnologia, estratégia e experiência do usuário para gerar soluções eficientes e inovadoras.
      </p>

      <div className="about-cards">
        {areas.map((area) => (
          <div key={area.title} className="area-card">
            <h3>{area.title}</h3>
            <p>{area.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
