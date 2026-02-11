import React from "react";
import "../styles/skills.css";

const skills = [
  {
    category: "Front-end Development",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 85 },
      { name: "Angular", level: 70 },
      { name: "Vue.js", level: 65 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    category: "Back-end Development",
    items: [
      { name: "Python", level: 90 },
      { name: ".NET", level: 75 },
      { name: "C#", level: 80 },
      { name: "Java", level: 70 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Oracle", level: 70 },
    ],
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-learn", level: 85 },
      { name: "Keras", level: 75 },
      { name: "Hugging Face", level: 80 },
    ],
  },
  {
    category: "Data Science & Visualization",
    items: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 90 },
      { name: "Matplotlib", level: 80 },
      { name: "Seaborn", level: 75 },
      { name: "OpenCV", level: 75 },
      { name: "NLTK", level: 70 },
      { name: "spaCy", level: 75 },
    ],
  },
  {
    category: "DevOps & MLOps",
    items: [
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 60 },
      { name: "MLflow", level: 65 },
    ],
  },
  {
    category: "Statistical Computing",
    items: [{ name: "R", level: 70 }],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="learn">
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((group, index) => (
          <div key={index} className="skill-card">
            <h3>{group.category}</h3>

            {group.items.map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
