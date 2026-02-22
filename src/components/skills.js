import React from "react";
import "../styles/skills.css";

const skills = [
  {
    category: "Front-end Development",
    items: [
      { name: "HTML5", level: 100 },
      { name: "CSS3", level: 100 },
      { name: "JavaScript", level: 100 },
      { name: "TypeScript", level: 95 },
      { name: "React", level: 95 },
      { name: "Angular", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Bootstrap", level: 90 },
    ],
  },
  {
    category: "Back-end Development",
    items: [
      { name: "Python", level: 90 },
      { name: ".NET", level: 85 },
      { name: "C#", level: 85 },
      { name: "Java", level: 60 },
      { name: "PHP", level: 80 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: 100 },
      { name: "PostgreSQL", level: 95 },
      { name: "Oracle", level: 80 },
    ],
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "TensorFlow", level: 85 },
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
      { name: "MLflow", level: 75 },
    ],
  },
  {
    category: "Statistical Computing",
    items: [{ name: "R", level: 60 }],
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
