import React from "react";
import "../styles/skills.css";

const techs = [
  { name: "Python", icon: "devicon-python-plain", level: 90, description: "Automação, APIs, Data Science e IA" },
  { name: "React", icon: "devicon-react-original", level: 85, description: "SPAs modernas, hooks e performance" },
  { name: "Angular", icon: "devicon-angularjs-plain", level: 70, description: "Arquitetura enterprise e componentes" },
  { name: ".NET", icon: "devicon-dotnetcore-plain", level: 75, description: "APIs robustas e sistemas escaláveis" },
  { name: "C#", icon: "devicon-csharp-plain", level: 80, description: "Back-end, OOP e integrações" },
  { name: "Java", icon: "devicon-java-plain", level: 70, description: "Aplicações corporativas e APIs" },
  { name: "MySQL", icon: "devicon-mysql-plain", level: 80, description: "Modelagem relacional e performance" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain", level: 75, description: "Consultas avançadas e integridade" },
  { name: "HTML5", icon: "devicon-html5-plain", level: 95, description: "Estrutura semântica e acessibilidade" },
  { name: "CSS3", icon: "devicon-css3-plain", level: 90, description: "Layouts responsivos e animações" },
  { name: "Vue.js", icon: "devicon-vuejs-plain", level: 65, description: "Componentização e reatividade" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain", level: 80, description: "UI responsiva e prototipação rápida" },
  { name: "JavaScript", icon: "devicon-javascript-plain", level: 90, description: "Lógica, ES6+ e aplicações web" },
  { name: "TypeScript", icon: "devicon-typescript-plain", level: 85, description: "Tipagem forte e escalabilidade" },
  { name: "PHP", icon: "devicon-php-plain", level: 70, description: "Back-end web e integrações" },
  { name: "TensorFlow", icon: "devicon-python-plain", level: 75, description: "Redes neurais e deep learning" },
  { name: "PyTorch", icon: "devicon-python-plain", level: 80, description: "Deep learning e pesquisa em IA" },
  { name: "Scikit-learn", icon: "devicon-python-plain", level: 85, description: "Machine learning clássico e pipelines" },
  { name: "Keras", icon: "devicon-python-plain", level: 75, description: "Modelos neurais de alto nível" },
  { name: "Pandas", icon: "devicon-python-plain", level: 90, description: "Manipulação e análise de dados" },
  { name: "NumPy", icon: "devicon-python-plain", level: 90, description: "Computação numérica eficiente" },
  { name: "Matplotlib", icon: "devicon-python-plain", level: 80, description: "Visualização de dados" },
  { name: "Seaborn", icon: "devicon-python-plain", level: 75, description: "Visualização estatística avançada" },
  { name: "OpenCV", icon: "devicon-python-plain", level: 75, description: "Visão computacional e processamento de imagens" },
  { name: "NLTK", icon: "devicon-python-plain", level: 70, description: "Processamento de linguagem natural" },
  { name: "spaCy", icon: "devicon-python-plain", level: 75, description: "NLP industrial e pipelines de texto" },
  { name: "Hugging Face", icon: "devicon-python-plain", level: 80, description: "Modelos transformers e NLP avançado" },
  { name: "MLflow", icon: "devicon-python-plain", level: 65, description: "Rastreamento e versionamento de modelos" },
  { name: "Docker", icon: "devicon-docker-plain", level: 80, description: "Containers para deploy de modelos" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain", level: 60, description: "Orquestração de serviços e IA" },
  { name: "R", icon: "devicon-r-original", level: 70, description: "Análise estatística e ciência de dados" },
];


export default function Skills() {
  return (
    <section className="section skills" id="learn">
     <h2>My Skillsets</h2>
<p className="skills-description">
  These are some of the tools and technologies I love working with to bring ideas to life on the web.
</p>

      <div className="skills-marquee">
        <div className="marquee-track">
          {[...techs, ...techs].map((tech, index) => (
           <div key={`${tech.name}-${index}`} className="tech-icon">
              <i className={tech.icon}></i>
              <span>{tech.name}</span>
              <div className="tooltip">
                <strong>{tech.name}</strong>
                <p>{tech.description}</p>
                <p>Level: {tech.level}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
