import React from "react";
import "./CliHero.css";

import {
  FaDna,
  FaHeartbeat,
  FaBrain,
  FaVirus,
  FaBaby,
} from "react-icons/fa";
import { GiFootprint, GiHealthNormal } from "react-icons/gi";

const clinicalAreas = [
  {
    title: "Oncology",
    icon: <FaDna />,
  },
  {
    title: "Rare Disease",
    icon: <FaDna />,
  },
  {
    title: "Reproductive Health",
    icon: <GiHealthNormal />,
  },
  {
    title: "Healthy Baby",
    icon: <GiFootprint />,
  },
  {
    title: "Neonatology",
    icon: <FaBaby />,
  },
  {
    title: "Cardiology",
    icon: <FaHeartbeat />,
  },
  {
    title: "Neurology",
    icon: <FaBrain />,
  },
  {
    title: "Infectious Disease",
    icon: <FaVirus />,
  },
  {
    title: "Pharmacogenomics",
    icon: <FaDna />,
  },
];

const CliHero = () => {
  return (
    <section
      className="cli-hero"
      style={{
        backgroundImage: "url('/images/clinical/clinical-hero.jpg')",
      }}
    >
      <div className="cli-overlay"></div>

      <div className="cli-container">

        {/* Hero Content */}
        <div className="cli-content">

          <h1 className="hero-title">
            A Test Menu Built for Every Stage
            <br />
            of the Clinical Journey.
          </h1>

          <p className="hero-subtitle">
            From preconception to advanced diagnostics, Leads Genetics
            delivers accurate, actionable genomic insights with rapid
            turnaround.
          </p>

        </div>

        {/* Clinical Focus */}
        <div className="focus-section">

          <h3>Key Clinical Focus Areas</h3>

          <div className="focus-grid">

            {clinicalAreas.map((item, index) => (
              <div className="focus-card" key={index}>

                <div className="focus-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default CliHero;