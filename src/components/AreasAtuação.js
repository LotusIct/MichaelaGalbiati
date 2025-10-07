import React from "react";
import "../styles/areasAtuacao.css";

const areas = [
  {
    id: 1,
    title: "Supply Chain",
    description: "Otimização e gestão inteligente da cadeia de suprimentos, garantindo eficiência e redução de custos.",
  },
  {
    id: 2,
    title: "Portais Governamentais RJ",
    description: "Desenvolvimento e manutenção de portais digitais para órgãos públicos no Rio de Janeiro, com foco em acessibilidade e segurança.",
  },
  {
    id: 3,
    title: "Plataforma de Automação de Dados e Relatórios TIM",
    description: "Soluções avançadas para automação e geração de relatórios inteligentes, apoiando a tomada de decisão na TIM.",
  },
  {
    id: 4,
    title: "Personalização com BMC Helix",
    description: "Customização de aplicações utilizando BMC Helix, focando em desenvolvimento com código para soluções robustas e flexíveis, sem low-code.",
  },
  {
    id: 5,
    title: "Integração em Saúde - MK Saúde, ERP Omie e Seconci",
    description: "Implementação e integração de sistemas para a área da saúde, conectando MK Saúde, ERP Omie e Seconci para gestão eficiente e controle de dados.",
  },
  {
  id: 6,
  title: "Portal de Serviços - SecureLink",
  description: "Desenvolvimento de portal para acompanhamento em tempo real de redes de internet, sites, tráfego e geração de relatórios analíticos.",
}

];

export default function AreasAtuacao() {
  return (
    <section className="areas-atuacao ">
      <h2> Projects & Partnerships</h2>
      <div className="areas-grid">
        {areas.map(({ id, title, description }) => (
          <div key={id} className="area-cards">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
