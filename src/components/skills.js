import React from "react";
import "../styles/skills.css";

const techs = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Angular", icon: "devicon-angularjs-plain" },
  { name: ".NET", icon: "devicon-dotnetcore-plain" },
  { name: "C#", icon: "devicon-csharp-plain" },
  { name: "Java", icon: "devicon-java-plain" },
  { name: "MySQL", icon: "devicon-mysql-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "HTML5", icon: "devicon-html5-plain" },
  { name: "CSS3", icon: "devicon-css3-plain" },
  { name: "Vue.js", icon: "devicon-vuejs-plain" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
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
            <div key={`${tech.name}-${index}`} className="tech-icon" title={tech.name}>
              <i className={tech.icon}></i>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
