import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Dna, Users, Globe, FlaskConical, ArrowRight } from "lucide-react";
import "./HomeAbout.css";

// Replace these with your own images
import farmImg from "../assets/logo.png";
import labImg from "../assets/logo.png";
import dnaImg from "../assets/logo.png";

const stats = [
  { icon: <Dna size={28} />, number: "5000+", label: "Genomic Projects" },
  { icon: <Users size={28} />, number: "200+", label: "Research Partners" },
  { icon: <Globe size={28} />, number: "15+", label: "Countries Served" },
  { icon: <FlaskConical size={28} />, number: "10+", label: "Years of Excellence" },
];

const HomeAbout = () => {
  return (
    <section className="h-about-section">
      <div className="h-about-bg-dna"></div>

      <Container fluid className="h-about-container px-lg-5 px-3">
        <Row className="align-items-center g-5">
          {/* LEFT IMAGES */}
          <Col lg={6}>
            <div className="h-about-image-wrap">
              <div className="h-about-main-image">
                <img src={farmImg} alt="Genomics Agriculture" />

                <div className="h-about-floating-icon h-about-icon-top">
                  <Dna size={22} />
                </div>

                <div className="h-about-floating-icon h-about-icon-middle">
                  <Globe size={22} />
                </div>

                <div className="h-about-floating-icon h-about-icon-bottom">
                  <FlaskConical size={22} />
                </div>
              </div>

              <div className="h-about-card h-about-card-lab">
                <img src={labImg} alt="Laboratory Research" />
              </div>

              <div className="h-about-card h-about-card-dna">
                <img src={dnaImg} alt="DNA Research" />
              </div>
            </div>
          </Col>

          {/* RIGHT CONTENT */}
          <Col lg={6}>
            <div className="h-about-content">
              {/* <div className="h-about-subtitle">
                <span>WHO WE ARE</span>
                <div className="h-about-line"></div>
              </div> */}

              <h2 className="h-about-title">
               <span className="about-tag">ABOUT</span>  <br />
                <span>LEADS GENETICS</span>
              </h2>

              <h3 className="h-about-tagline">
                Advancing Genomics. Empowering Agriculture.
                Transforming Healthcare.
              </h3>

              <p className="h-about-text">
                Leads Genetics is a multidisciplinary genomics and biotechnology
                company dedicated to advancing scientific discovery through
                cutting-edge sequencing technologies, molecular diagnostics,
                bioinformatics, and precision agriculture solutions.
              </p>

              <p className="h-about-text">
                Our expertise spans Human Genomics, Plant Genomics, Animal &amp;
                Livestock Genomics, Microbial Genomics, Clinical Genomics, Agri
                Genomics, Bioinformatics, and Multi-Omics, enabling comprehensive
                solutions from sample processing to advanced genomic
                interpretation.
              </p>

              <p className="h-about-text">
                Beyond sequencing, Leads Genetics is committed to shaping the
                future of precision agriculture through genomic selection,
                reproductive biotechnology, embryo genomics, livestock
                improvement, and molecular breeding strategies.
              </p>

              {/* STATS */}
              <Row className="h-about-stats g-3">
                {stats.map((item, index) => (
                  <Col xs={6} md={3} key={index}>
                    <div className="h-about-stat-box">
                      <div className="h-about-stat-icon">{item.icon}</div>
                      <h4>{item.number}</h4>
                      <p>{item.label}</p>
                    </div>
                  </Col>
                ))}
              </Row>

              {/* BUTTON */}
              <button className="h-about-btn">
                 LEADS GENETICS
                <ArrowRight size={18} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeAbout;