import React from "react";
import "./Partners.css";

// Import all 15 partner logos from assets/key
import logo1 from "../assets/key/logo1.jpg";
import logo4 from "../assets/key/logo4.jpg";
import logo5 from "../assets/key/logo5.jpg";
import logo6 from "../assets/key/logo6.jpg";
import logo8 from "../assets/key/logo8.jpg";
import logo9 from "../assets/key/logo9.jpg";
import logo11 from "../assets/key/logo11.jpg";
import logo12 from "../assets/key/logo12.jpg";
import logo13 from "../assets/key/logo13.jpg";
import logo14 from "../assets/key/logo14.jpg";
import logo15 from "../assets/key/logo15.png";
import logo16 from "../assets/key/logo16.png";
import logo17 from "../assets/key/logo17.jpg";
import logo18 from "../assets/key/logo18.jpg";
import logo19 from "../assets/key/logo19.jpg";

const CLIENTS = [
  {
    id: 1,
    name: "IIT Madras",
    description: "Indian Institute of Technology Madras — Advanced Biotechnology & Genomics Research",
    logo: logo1,
  },
  {
    id: 2,
    name: "ICMR",
    description: "Indian Council of Medical Research — Apex Body for Biomedical & Clinical Research",
    logo: logo12,
  },
  {
    id: 3,
    name: "CSIR - CCMB",
    description: "Centre for Cellular and Molecular Biology — Pioneer in Genomics & Modern Biology",
    logo: logo13,
  },
  {
    id: 4,
    name: "DBT",
    description: "Department of Biotechnology, Govt of India — National Genomics Initiatives",
    logo: logo16,
  },
  {
    id: 5,
    name: "BARC",
    description: "Bhabha Atomic Research Centre — Premier Nuclear & Bioscience Research",
    logo: logo14,
  },
  {
    id: 6,
    name: "DRDO",
    description: "Defence Research and Development Organisation — Life Sciences & Health Technologies",
    logo: logo15,
  },
  {
    id: 7,
    name: "ICAR",
    description: "Indian Council of Agricultural Research — National Livestock & Crop Genomics",
    logo: logo19,
  },
  {
    id: 8,
    name: "ICGEB",
    description: "International Centre for Genetic Engineering and Biotechnology",
    logo: logo4,
  },
  {
    id: 9,
    name: "IISc Bangalore",
    description: "Indian Institute of Science — Frontier Genomic Research & Bioinformatics",
    logo: logo8,
  },
  {
    id: 10,
    name: "IVRI",
    description: "Indian Veterinary Research Institute — National Pioneer in Veterinary & Animal Genetics",
    logo: logo17,
  },
  {
    id: 11,
    name: "ICAR - CIRB",
    description: "Central Institute for Research on Buffaloes — Bovine & Livestock Genetics",
    logo: logo18,
  },
  {
    id: 12,
    name: "THSTI",
    description: "Translational Health Science and Technology Institute — Clinical Genomics",
    logo: logo11,
  },
  {
    id: 13,
    name: "NBRC",
    description: "National Brain Research Centre — Neurogenomics & Molecular Diagnostics",
    logo: logo9,
  },
  {
    id: 14,
    name: "Jawaharlal Nehru University",
    description: "School of Biotechnology & Life Sciences Research Partnership",
    logo: logo6,
  },
  {
    id: 15,
    name: "ITC Limited",
    description: "Agri-Business & Sustainable Crop Value Chain Genomic Initiatives",
    logo: logo5,
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