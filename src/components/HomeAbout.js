import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Beaker,
  Users,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./HomeAbout.css";

// Image
import aboutImg from "../assets/clibanner.png";

/* =========================================
   STATS
========================================= */

const IMAGE_STATS = [
  {
    icon: <Beaker size={18} />,
    value: 20,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: <Users size={18} />,
    value: 1000,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: <Users size={18} />,
    value: 6,
    suffix: "+",
    label: "In-house Technology Platforms",
  },
];

/* =========================================
   ANIMATED COUNTER
========================================= */

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}) {
  const [display, setDisplay] = useState(0);

  const ref = useRef(null);
  const hasRun = useRef(false);

  const isFloat = !Number.isInteger(value);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;

          const duration = 1400;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min(
              (now - start) / duration,
              1
            );

            const eased =
              1 - Math.pow(1 - progress, 3);

            const current = value * eased;

            setDisplay(
              isFloat
                ? Number(current.toFixed(1))
                : Math.round(current)
            );

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

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

/* =========================================
   HOME ABOUT
========================================= */

const HomeAbout = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };

  return (
    <section className="h-about-section">

      {/* =================================
          FULL WIDTH CONTAINER
      ================================= */}

      <Container fluid className="h-about-container">

        <Row className="align-items-center g-5">

          {/* =================================
              LEFT IMAGE
          ================================= */}

          <Col
            xl={5}
            lg={5}
            md={12}
            className="h-about-image-column col-h"
          >

            <div className="h-about-image-area">

              <div className="h-about-image-box">

                <img
                  src={aboutImg}
                  alt="About Leads Genetics"
                  className="h-about-main-image"
                />

              </div>

            </div>

          </Col>

          {/* =================================
              RIGHT CONTENT
          ================================= */}

          <Col
            xl={7}
            lg={7}
            md={12}
            className="col-h"
          >

            <div className="h-about-content">

              {/* BADGE */}

              <div className="h-about-badge">
                OUR JOURNEY
              </div>

              {/* HEADING */}

              <h2 className="h-about-title section-heading">
                Advancing Genomics
                <br />
                Empowering Agriculture
                <br />
                Transforming Healthcare
              </h2>

              {/* DESCRIPTION */}

              <p className="h-about-text">
                The story of Leads Genetics begins with a strong foundation
                built in genomics, molecular diagnostics, and life-science
                research. For nearly a decade, the organization operated
                through its earlier identity, GenePrint Labs , developing expertise in genetic testing,
                next-generation sequencing, molecular diagnostics, and
                bioinformatics.
              </p>

              <p className="h-about-text">
                Over the years, this scientific foundation evolved beyond
                individual testing and sequencing projects into a broader
                vision-building an integrated genomics platform capable of
                translating genetic information into practical outcomes
                across agriculture, livestock, plants, and human health.
              </p>

              <p className="h-about-text">
                A new chapter began as the business became part of the
                Leads / BL Agro ecosystem, bringing together established
                genomics capabilities with the scale, agricultural reach,
                and long-term vision of the BL Agro Group. This transition
                gave rise to <strong>Leads Genetics</strong> - a
                genomics-focused organization designed to connect laboratory
                science with real-world biological and agricultural outcomes.
              </p>

              {/* =================================
                  THIN LINE
              ================================= */}

              <div className="h-about-stats-divider"></div>

              {/* =================================
                  STATS ROW
              ================================= */}

              <div className="h-about-stats-row">

                {IMAGE_STATS.map((item, index) => (
                  <div
                    className="h-about-stat"
                    key={index}
                  >

                    <div className="h-about-stat-icon">
                      {item.icon}
                    </div>

                    <div className="h-about-stat-content">

                      <div className="h-about-stat-value">
                        <AnimatedCounter
                          value={item.value}
                          suffix={item.suffix}
                        />
                      </div>

                      <div className="h-about-stat-label">
                        {item.label}
                      </div>

                    </div>

                  </div>
                ))}

              </div>

              {/* =================================
                  BUTTON
              ================================= */}

              <button
                type="button"
                className="h-about-btn"
                onClick={handleKnowMore}
              >
                <span>Read More</span>
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