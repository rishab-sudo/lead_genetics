import React from "react";
import "./Partners.css";

// Import all 11 client logos
import logo1 from "../assets/key/logo1.jpg";
import logo2 from "../assets/key/logo2.jpg";
import logo3 from "../assets/key/logo3.jpg";
import logo4 from "../assets/key/logo4.jpg";
import logo5 from "../assets/key/logo5.jpg";
import logo6 from "../assets/key/logo6.jpg";
import logo7 from "../assets/key/logo7.jpg";
import logo8 from "../assets/key/logo8.jpg";
import logo9 from "../assets/key/logo9.jpg";
import logo10 from "../assets/key/logo10.jpg";
import logo11 from "../assets/key/logo11.jpg";

const CLIENTS = [
  {
    id: 1,
    name: "IIT Madras",
    description: "Indian Institute of Technology Madras — Advanced Biotechnology & Genomics Research",
    logo: logo1,
  },
  {
    id: 2,
    name: "University of Oxford",
    description: "Global Academic Collaboration in Genomic Sciences and Molecular Biology",
    logo: logo2,
  },
  {
    id: 3,
    name: "Vanderbilt University",
    description: "Collaborative Research in Genetics, Life Sciences, and Translational Medicine",
    logo: logo3,
  },
  {
    id: 4,
    name: "ICGEB",
    description: "International Centre for Genetic Engineering and Biotechnology",
    logo: logo4,
  },
  {
    id: 5,
    name: "ITC Limited",
    description: "Agri-Business & Sustainable Crop Value Chain Genomic Initiatives",
    logo: logo5,
  },
  {
    id: 6,
    name: "Jawaharlal Nehru University",
    description: "School of Biotechnology & Life Sciences Research Partnership",
    logo: logo6,
  },
  {
    id: 7,
    name: "Queen's University",
    description: "International Research Collaboration in Molecular Genetics",
    logo: logo7,
  },
  {
    id: 8,
    name: "IISc Bangalore",
    description: "Indian Institute of Science — Frontier Genomic Research & Bioinformatics",
    logo: logo8,
  },
  {
    id: 9,
    name: "NBRC",
    description: "National Brain Research Centre — Neurogenomics & Molecular Diagnostics",
    logo: logo9,
  },
  {
    id: 10,
    name: "ICAR",
    description: "Indian Council of Agricultural Research — National Livestock & Crop Genomics",
    logo: logo10,
  },
  {
    id: 11,
    name: "THSTI",
    description: "Translational Health Science and Technology Institute — Clinical Genomics",
    logo: logo11,
  },
];

export default function Client() {
  // Duplicate list for infinite smooth loop
  const infiniteClients = [...CLIENTS, ...CLIENTS];

  return (
    <section className="key-clients-section" id="clients">
      <div className="kc-container">
        
        {/* Section Header */}
        <div className="kc-header">
          <span className="kc-tag">
            Our Key Clients & Partners
          </span>
          <h2 className="kc-heading">
            Trusted by Leading Global & National Institutions
          </h2>
          <p className="kc-subheading">
            Empowering premier universities, national research institutes, and enterprises across the livestock, agri-genomics, and healthcare landscape.
          </p>
        </div>

        {/* 4-Item Moving Carousel / Infinite Ribbon */}
        <div className="kc-carousel-viewport">
          <div className="kc-carousel-track">
            {infiniteClients.map((client, index) => (
              <div 
                key={`${client.id}-${index}`}
                className="kc-client-item"
              >
                <div className="kc-logo-wrap">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="kc-logo-img"
                    loading="lazy"
                  />
                </div>
                <div className="kc-client-info">
                  <h3 className="kc-client-title">{client.name}</h3>
                  <p className="kc-client-desc">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}