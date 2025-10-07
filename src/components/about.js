import React from "react";
import "../styles/about.css";
//import minhaFoto from "../assets/minha-foto.jpg"; // coloque sua foto na pasta assets
import TypingText from "./Type";
const areas = [
 {
  title: "IA & Data Science",
  text: "Desenvolvimento e aplicação de modelos de Machine Learning e Deep Learning, incluindo pré-processamento e engenharia de dados, seleção e otimização de algoritmos, visão computacional, robótica inteligente e análise avançada de dados para automação, tomada de decisão e soluções preditivas.",
},
 {
  title: "Engenharia de Software",
  text: "Desenvolvimento de sistemas robustos e escaláveis, incluindo arquiteturas distribuídas, APIs eficientes e interfaces de alto desempenho, com foco em boas práticas, qualidade de código e integração entre componentes.",
},
{
  title: "UI/UX",
  text: "Design centrado no usuário, englobando pesquisa, análise de comportamentos e testes de usabilidade. Criação de protótipos interativos, design visual consistente e acessível, garantindo experiências intuitivas e eficientes desde a concepção da ideia até a entrega final da solução.",
},
{
  title: "Software Embarcado & IoT",
  text: "Desenvolvimento de sistemas embarcados e soluções conectadas, utilizando microcontroladores, sensores e protocolos de comunicação para IoT, automação e monitoramento inteligente.",
},
];

export default function About() {
  return (
    <section className="about">
      <div className="about-header">
    <div  className="about-photo" >    {/* <img src={minhaFoto} alt="Michaela Galbiati" className="about-photo" /> */}</div>
       <TypingText text="Hello, prazer! Sou Michaela Galbiati" speed={100} />
      </div>

      <p className="about-summary">
       Com quase 10 anos de experiência em Desenvolvimento de Software, IA e Data Science, atuei em projetos de grande complexidade e impacto, abrangendo Governança de Dados, Análise de Negócios e Engenharia de Software Full-Stack. Ao longo da carreira, desenvolvi soluções escaláveis e resilientes, integrando sistemas distribuídos, APIs eficientes, automação inteligente e interfaces centradas no usuário. Tenho expertise em concepção de arquiteturas robustas, otimização de processos, modelagem avançada de dados, aplicação de algoritmos de Machine Learning e Deep Learning, além de design e experiência do usuário orientados à usabilidade e acessibilidade. Busco alinhar tecnologia, estratégia e inovação para entregar soluções que gerem valor real, potencializando resultados e promovendo transformação digital em diversos contextos e setores.
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
