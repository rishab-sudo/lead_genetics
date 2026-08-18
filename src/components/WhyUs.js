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
    desc: "NABL, ISO, ICMR and CAP-aligned quality standards, end to end.",
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

  // measure actual rendered item height once mounted
  useEffect(() => {
    if (firstItemRef.current) {
      itemHeightRef.current = firstItemRef.current.offsetHeight;
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const isLast = prev === points.length - 1;
        if (isLast) {
          // jump back to the top without animating the scroll
          setSnap(true);
        }
        return (prev + 1) % points.length;
      });
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // 0,1,2 -> windowStart 0 (no scroll, only highlight cycles)
  // 3 -> windowStart 1 (item 0 scrolls out top, item 3 scrolls in bottom)
  const windowStart = Math.max(
    0,
    Math.min(activeIndex - (VISIBLE_COUNT - 1), points.length - VISIBLE_COUNT)
  );

  // scroll the track to match the current window — smooth normally,
  // instant ("auto") on the wrap-back to index 0
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({
      top: windowStart * itemHeightRef.current,
      behavior: snap ? "auto" : "smooth",
    });
    if (snap) {
      const raf = requestAnimationFrame(() => setSnap(false));
      return () => cancelAnimationFrame(raf);
    }
  }, [windowStart, snap]);

  return (
    <section className="whyus-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} md={12} className="whyus-heading-col">
            <span className="whyus-eyebrow">Why choose us</span>
            <h2 className="whyus-heading">
              Precision science,
              <br />
              trusted results
            </h2>
            <p className="whyus-subtext">
              Empowering agriculture, research and clinical healthcare with
              cutting-edge sequencing technologies.
            </p>
          </Col>

          <Col lg={7} md={12}>
            <div className="whyus-track" ref={trackRef}>
              {points.map((point, index) => (
                <div
                  key={point.title}
                  ref={index === 0 ? firstItemRef : null}
                  className={
                    "whyus-item" +
                    (index === activeIndex ? " whyus-item-active" : "")
                  }
                >
                  <span className="whyus-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="whyus-item-text">
                    <p className="whyus-item-title">{point.title}</p>
                    <p className="whyus-item-desc">{point.desc}</p>
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