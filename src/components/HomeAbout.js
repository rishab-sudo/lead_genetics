import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Beaker,
  Users,
  Globe,
  FlaskConical,
  ArrowRight,
} from "lucide-react";
import "./HomeAbout.css";

// Replace with your real image
import labImg from "../assets/logo.png";

const stats = [
  {
    icon: <Beaker size={18} />,
    number: "5000+",
    label: "GENOMIC PROJECTS",
  },
  {
    icon: <Users size={18} />,
    number: "200+",
    label: "RESEARCH PARTNERS",
  },
  {
    icon: <Globe size={18} />,
    number: "15+",
    label: "COUNTRIES SERVED",
  },
  {
    icon: <FlaskConical size={18} />,
    number: "10+",
    label: "YEARS EXCELLENCE",
  },
];

const HomeAbout = () => {
  return (
    <section className="h-about-section">
      <Container className="h-about-container">
        <Row className="align-items-center g-5">
          {/* LEFT IMAGE */}
          <Col lg={5}>
            <div className="h-about-image-wrap">
              <img src={labImg} alt="Leads Genetics Lab" className="h-about-image" />
            </div>
          </Col>

          {/* RIGHT CONTENT */}
          <Col lg={7}>
            <div className="h-about-content">
              <div className="h-about-badge">ABOUT LEADS GENETICS</div>

              <h2 className="h-about-title">
                Advancing Genomics.
                <br />
                Empowering Agriculture.
                <br />
                Transforming Healthcare.
              </h2>

              <p className="h-about-text">
                Leads Genetics is a multidisciplinary genomics and biotechnology
                company dedicated to advancing scientific discovery through
                cutting-edge sequencing technologies, molecular diagnostics,
                bioinformatics, and precision agriculture solutions.
              </p>

              <p className="h-about-text">
                Our expertise spans Human Genomics, Plant Genomics, Animal &amp;
                Livestock Genomics, Microbial Genomics, and Multi-Omics,
                enabling comprehensive solutions from sample processing to
                advanced genomic interpretation.
              </p>

              <div className="h-about-divider"></div>

              {/* STATS */}
              <Row className="h-about-stats">
                {stats.map((item, index) => (
                  <Col xs={6} key={index} className="mb-4">
                    <div className="h-about-stat-item">
                      <div className="h-about-stat-icon">{item.icon}</div>

                      <div>
                        <h4>{item.number}</h4>
                        <p>{item.label}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>

              <button className="h-about-btn">
                Learn More About Us
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