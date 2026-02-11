import React from "react";
import "../styles/areasAtuacao.css";

const areas = [
  {
    id: 1,
    category: "Enterprise Systems",
    title: "Supply Chain Optimization",
    description:
      "Intelligent supply chain optimization focused on efficiency, automation and cost reduction through scalable systems.",
  },
  {
    id: 2,
    category: "Public Sector",
    title: "Government Portals – RJ",
    description:
      "Development and maintenance of secure and accessible digital portals for public institutions in Rio de Janeiro.",
  },
  {
    id: 3,
    category: "Telecom",
    title: "Data Automation Platform – TIM",
    description:
      "Advanced data automation and intelligent reporting solutions to support strategic decision-making.",
  },
  {
    id: 4,
    category: "ITSM Engineering",
    title: "BMC Helix Custom Development",
    description:
      "Code-driven customization of BMC Helix applications, delivering robust and flexible enterprise solutions.",
  },
  {
    id: 5,
    category: "Healthcare Integration",
    title: "MK Saúde + Omie ERP + Seconci",
    description:
      "System integration for healthcare management, ensuring data reliability and operational efficiency.",
  },
  {
    id: 6,
    category: "Network Monitoring",
    title: "SecureLink Service Portal",
    description:
      "Real-time monitoring portal for internet networks, traffic analytics and operational reporting.",
  },
];

export default function AreasAtuacao() {
  return (
    <section className="areas-atuacao" id="project">
      <div className="section-header">
        <h2>Projects & Partnerships</h2>
        <p>Enterprise solutions delivered across multiple industries.</p>
      </div>

      <div className="areas-grid">
        {areas.map(({ id, category, title, description }) => (
          <div key={id} className="area-card">
            <span className="area-category">{category}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
