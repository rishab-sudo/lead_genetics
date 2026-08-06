import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Platform.css";

const Platform = () => {
  return (
    <section className="platform-section">
      <Container fluid className="px-lg-0 px-3">
        {/* Heading */}
        <div className="platform-heading text-center">
          <h2 className="pageheading">Our Genomics Platform</h2>
          <p className="page-description">
            Discover our advanced genomics ecosystem designed for research,
            clinical diagnostics, and agricultural innovation.
          </p>
        </div>

        {/* ================= ROW 1 ================= */}
        <Row className="g-4 align-items-stretch mb-4">
          {/* LEFT : TEXT */}
          <Col lg={6}>
            <div className="platform-card text-card">
              <div>
                <h3>Clinical Genomics</h3>
                <p>
                  Comprehensive genomic testing solutions for precision medicine,
                  inherited disorders, reproductive health, and oncology
                  applications with high accuracy and rapid turnaround time.
                </p>
              </div>
            </div>
          </Col>

          {/* RIGHT : IMAGE */}
          <Col lg={6}>
            <div className="platform-card image-card">
              <img
                src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1200&auto=format&fit=crop"
                alt="Clinical genomics"
              />
            </div>
          </Col>
        </Row>

        {/* ================= ROW 2 ================= */}
        <Row className="g-4 align-items-stretch">
          {/* LEFT : IMAGE */}
          <Col lg={6}>
            <div className="platform-card image-card">
              <img
                src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1200&auto=format&fit=crop"
                alt="Agricultural genomics"
              />
            </div>
          </Col>

          {/* RIGHT : TEXT */}
          <Col lg={6}>
            <div className="platform-card text-card">
              <div>
                <h3>Agricultural Genomics</h3>
                <p>
                  Advanced genomic tools for crop improvement, trait discovery,
                  seed quality analysis, and sustainable agricultural research
                  powered by next-generation sequencing technologies.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Platform;