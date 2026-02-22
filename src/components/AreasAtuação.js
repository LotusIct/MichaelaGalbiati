import React from "react";
import "../styles/areasAtuacao.css";

const areas = [
  {
    id: 1,
    category: "Enterprise Systems",
    title: "Supply Chain Optimization",
    description:
      "Design and development of scalable enterprise systems focused on supply chain optimization, integrating automation, data intelligence and process efficiency to reduce operational costs and improve decision-making.",
  },
  {
    id: 2,
    category: "Public Sector",
    title: "Government Digital Portals – RJ",
    description:
      "Engineering and maintenance of secure, high-availability digital portals for public institutions in Rio de Janeiro, ensuring accessibility, compliance and reliable citizen-facing services.",
  },
  {
    id: 3,
    category: "Telecom",
    title: "Data Automation & Analytics Platform – TIM",
    description:
      "Development of data automation pipelines and intelligent reporting platforms to support large-scale telecom operations and strategic analytics-driven decisions.",
  },
  {
    id: 4,
    category: "ITSM Engineering",
    title: "BMC Helix Enterprise Customization",
    description:
      "Custom development and code-level extensions for BMC Helix ITSM environments, delivering robust enterprise workflows, automation and tailored business logic.",
  },
  {
    id: 5,
    category: "Healthcare Integration",
    title: "Healthcare Systems Integration – MK Saúde, Omie ERP & Seconci",
    description:
      "Integration of healthcare and ERP systems to ensure data consistency, interoperability and operational efficiency across clinical and administrative environments.",
  },
  {
    id: 6,
    category: "Network Monitoring",
    title: "SecureLink Monitoring & Analytics Portal",
    description:
      "Development of a real-time network monitoring portal with traffic analytics, performance dashboards and operational intelligence for internet service management.",
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
