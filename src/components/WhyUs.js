import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WhyUs.css";

const points = [
  {
    title: "Advanced sequencing",
    desc: "Cutting-edge NGS platforms powering agri, research and clinical genomics.",
  },
  {
    title: "Expert scientists",
    desc: "A multidisciplinary team driving discovery across every project.",
  },
  {
    title: "Accredited & compliant",
    desc: "NABL, ISO, and CAP-aligned quality standards, end to end.",
  },
  {
    title: "1958+ projects delivered",
    desc: "A track record built across six years of genomics work.",
  },
  {
    title: "78+ research partners",
    desc: "Trusted collaborations spanning academia and industry.",
  },
  {
    title: "End-to-end solutions",
    desc: "From sample processing to actionable insights, under one roof.",
  },
];

const VISIBLE_COUNT = 3;
const AUTO_SCROLL_INTERVAL = 5000;

const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [snap, setSnap] = useState(false);

  const itemHeightRef = useRef(0);
  const firstItemRef = useRef(null);
  const trackRef = useRef(null);

  /* Measure item height */
  useEffect(() => {
    const measureHeight = () => {
      if (firstItemRef.current) {
        itemHeightRef.current = firstItemRef.current.offsetHeight;
      }
    };

    measureHeight();

    window.addEventListener("resize", measureHeight);

    return () => {
      window.removeEventListener("resize", measureHeight);
    };
  }, []);

  /* Auto scroll */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const isLast = prev === points.length - 1;

        if (isLast) {
          setSnap(true);
        }

        return (prev + 1) % points.length;
      });
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  /* Calculate visible window */
  const windowStart = Math.max(
    0,
    Math.min(
      activeIndex - (VISIBLE_COUNT - 1),
      points.length - VISIBLE_COUNT
    )
  );

  /* Scroll list */
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    track.scrollTo({
      top: windowStart * itemHeightRef.current,
      behavior: snap ? "auto" : "smooth",
    });

    if (snap) {
      const raf = requestAnimationFrame(() => {
        setSnap(false);
      });

      return () => cancelAnimationFrame(raf);
    }
  }, [windowStart, snap]);

  return (
    <section className="whyus-section">
      {/* Full Background Image */}
      <div className="whyus-bg-image"></div>

      {/* Main Content */}
      <Container className="whyus-content">
        <Row className="align-items-center">

          {/* LEFT CONTENT */}
          <Col lg={5} md={12} className="whyus-heading-col">
            <span className="whyus-eyebrow ">
              Why choose us
            </span>

            <h2 className="whyus-heading section-heading">
              Precision science,
              <br />
              trusted results
            </h2>

            <p className="whyus-subtext">
              Empowering agriculture, research and clinical healthcare with
              cutting-edge sequencing technologies.
            </p>
          </Col>

          {/* RIGHT CONTENT */}
          <Col lg={7} md={12}>
            <div
              className="whyus-track"
              ref={trackRef}
            >
              {points.map((point, index) => (
                <div
                  key={point.title}
                  ref={index === 0 ? firstItemRef : null}
                  className={`whyus-item ${
                    index === activeIndex
                      ? "whyus-item-active"
                      : ""
                  }`}
                >
                  {/* Number */}
                  <span className="whyus-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Text */}
                  <div className="whyus-item-text">
                    <p className="whyus-item-title">
                      {point.title}
                    </p>

                    <p className="whyus-item-desc">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;