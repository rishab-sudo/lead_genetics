import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Beaker,
  Users,
  Globe,
  FlaskConical,
  ArrowRight,
} from "lucide-react";
import { FiTarget, FiEye, FiAward } from "react-icons/fi";
import "./HomeAbout.css";

import farmImg from "../assets/farm_628x680.png";
import labImg from "../assets/lab_420x288.png";

const STATS = [
  { icon: <Beaker size={18} />, value: 5000, suffix: "+", label: "GENOMIC PROJECTS" },
  { icon: <Users size={18} />, value: 200, suffix: "+", label: "RESEARCH PARTNERS" },
  { icon: <Globe size={18} />, value: 15, suffix: "+", label: "COUNTRIES SERVED" },
  { icon: <FlaskConical size={18} />, value: 10, suffix: "+", label: "YEARS EXCELLENCE" },
];

const PILLARS = [
  {
    icon: <FiTarget size={28} />,
    label: "Mission",
    text: "To democratise access to precision genomics across agriculture, research, and clinical science — delivering insights that are accurate, fast, and actionable.",
  },
  {
    icon: <FiEye size={28} />,
    label: "Vision",
    text: "A world where every crop, patient, and organism is understood at the genomic level — enabling better decisions for health, food security, and biodiversity.",
  },
  {
    icon: <FiAward size={28} />,
    label: "Values",
    text: "Scientific rigour. Radical transparency. Continuous innovation. We hold ourselves to the highest standards of accuracy and data integrity in everything we deliver.",
  },
];

/* Counts up from 0 to `value` once its wrapper scrolls into view. */
function AnimatedCounter({ value, prefix = "", suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);
  const isFloat = !Number.isInteger(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const duration = 1400;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = value * eased;
            setDisplay(isFloat ? Number(current.toFixed(1)) : Math.round(current));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, isFloat]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const HomeAbout = () => {
  return (
    <section className="h-about-section">
      <Container className="h-about-container">
        <Row className="align-items-center gx-4 gy-5">
          {/* LEFT IMAGE MOSAIC */}
          <Col lg={6}>
            <div className="h-about-image-wrap">
              <img src={farmImg} alt="Agriculture Genomics Farm" className="h-about-image h-about-image--farm" />
              <img src={labImg} alt="Genomics Laboratory" className="h-about-image h-about-image--lab" />
            </div>
          </Col>

          {/* RIGHT CONTENT */}
          <Col lg={6}>
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

              {/* STATS — now animated on scroll into view */}
              <Row className="h-about-stats">
                {STATS.map((item, index) => (
                  <Col xs={6} key={index} className="mb-4">
                    <div className="h-about-stat-item">
                      <div className="h-about-stat-icon">{item.icon}</div>

                      <div>
                        <h4>
                          <AnimatedCounter value={item.value} suffix={item.suffix} />
                        </h4>
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

        {/* MISSION / VISION / VALUES PILLARS */}
        <Row className="h-about-pillars-wrap">
          <Col lg={12}>
            <div className="about-pillars">
              {PILLARS.map((p) => (
                <div key={p.label} className="about-pillar glass-card">
                  <div className="about-pillar__icon">{p.icon}</div>
                  <h3 className="about-pillar__label">{p.label}</h3>
                  <p className="about-pillar__text">{p.text}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeAbout;