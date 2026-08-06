import React from "react";
import { Link } from "react-router-dom";
import { Leaf, FlaskConical, CirclePlus } from "lucide-react";
import "./HomeWork.css";

// Your background images
import agriImg from "../assets/agri.png";
import researchImg from "../assets/research.png";
import clinicalImg from "../assets/clinical.png";

const cards = [
  {
    title: "AGRI GENOMICS",
    description:
      "Precision breeding, genomic selection, IVF, microarray, QTL mapping and advanced agri-biotechnology solutions.",
    icon: <Leaf size={20} />,
    link: "/agri-genomics",
    color: "green",
    image: agriImg,
  },
  {
    title: "RESEARCH GENOMICS",
    description:
      "Comprehensive genomic services across human, plant, animal, livestock and microbial research.",
    icon: <FlaskConical size={20} />,
    link: "/research-genomics",
    color: "blue",
    image: researchImg,
  },
  {
    title: "CLINICAL GENOMICS",
    description:
      "Advanced diagnostics and genome insights in oncology, rare diseases, pharmacogenomics and reproductive genetics.",
    icon: <CirclePlus size={20} />,
    link: "/clinical-genomics",
    color: "purple",
    image: clinicalImg,
  },
];

function HomeWork() {
  return (
    <section className="homework-section">
      <div className="homework-container">
        <div className="section-heading">
          <span className="subtitle">Leads Genetics</span>
          <h2>Genomics Solutions</h2>
          <p>
            Advanced genomic technologies for agriculture, research, and
            clinical applications.
          </p>
        </div>

        <div className="homework-grid">
          {cards.map((card, index) => (
            <div key={index} className={`genomics-card ${card.color}`} >
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${card.image})` }}
              />

              <div className="card-content">
                <div className={`icon-box ${card.color}`}>{card.icon}</div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <Link to={card.link} className={`explore-link ${card.color}`} >
                  EXPLORE {card.title}
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeWork;