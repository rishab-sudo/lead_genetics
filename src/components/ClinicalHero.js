import React from "react";
import "./ClinicalHero.css";

const ClinicalHero = () => {
  return (
    <section className="clinical-hero">
      {/* Background Video */}
      <video
        className="clinical-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={require("../assets/clinical-video.mp4")} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="clinical-overlay"></div>

      {/* Content */}
      <div className="clinical-content container">
        <span className="hero-tag">CLINICAL GENOMICS</span>

        <h1 className="hero-title">
          Genomic insights for
          <br />
          <span>every patient journey</span>
        </h1>

        <p className="hero-desc">
          From preconception screening to advanced diagnostics, Leads
          Genetics delivers accurate and actionable genomic insights with
          consistent scientific rigor behind every result.
        </p>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-item">
            <h2>250+</h2>
            <p>Panels & Assays</p>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <h2>24–72 hr</h2>
            <p>Report Turnaround</p>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <h2>8</h2>
            <p>Clinical Focus Areas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalHero;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { ShieldCheck, HeartPulse, Microscope, Dna } from "lucide-react";
// import "./ClinicalHero.css";



// const cards = [
//   {
//     icon: <ShieldCheck size={28} />,
//     title: "Oncology",
//   },
//   {
//     icon: <HeartPulse size={28} />,
//     title: "Cardiology",
//   },
//   {
//     icon: <Microscope size={28} />,
//     title: "Rare Disease",
//   },
//   {
//     icon: <Dna size={28} />,
//     title: "Pharmacogenomics",
//   },
// ];

// const ClinicalHero = () => {
//   return (
//     <section className="clinical-hero-fluid">
//       <Container className="clinical-hero-container">
//         <Row className="align-items-center clinical-hero-row">
//           {/* Left Content */}
//           <Col lg={6} className="clinical-hero-left">
//             <span className="clinical-badge">
//               CLINICAL GENOMICS
//             </span>

//             <h1 className="clinical-title">
//               A clinical testing menu designed for
//               <span> every stage of the patient journey</span>
//             </h1>

//             <p className="clinical-description">
//               From preconception screening to advanced diagnostics, Leads
//               Genetics provides accurate, actionable genomic insights with
//               the same scientific rigor behind every result.
//             </p>

//             {/* Stats */}
//             <div className="clinical-stats">
//               <div className="stat-box">
//                 <h3>250+</h3>
//                 <p>Panels & Assays</p>
//               </div>

//               <div className="stat-box">
//                 <h3>24–72 hr</h3>
//                 <p>Report Turnaround</p>
//               </div>

//               <div className="stat-box">
//                 <h3>8</h3>
//                 <p>Clinical Focus Areas</p>
//               </div>
//             </div>
//           </Col>

//           {/* Right Image */}
//           <Col lg={6} className="clinical-hero-right">
//             <div className="clinical-image-wrapper">
//               <img src={require("../assets/clinical.png")} alt="Clinical Genomics" className="clinical-image" />
//             </div>
//           </Col>
//         </Row>

//         {/* Bottom Cards */}
//         <Row className="clinical-card-row">
//           {cards.map((card, index) => (
//             <Col md={6} lg={3} key={index} className="mb-4">
//               <div className="clinical-card">
//                 <div className="clinical-card-icon">{card.icon}</div>
//                 <h5>{card.title}</h5>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default ClinicalHero;