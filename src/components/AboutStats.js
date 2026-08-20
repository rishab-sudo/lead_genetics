import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutStats.css";

/* =========================================================
   ABOUT STATS DATA
========================================================= */

const statsData = [
  {
    value: 20,
    prefix: "",
    suffix: "+",
    label: "Years of genomics & microarray expertise",
  },
  {
    value: 1000,
    prefix: "~",
    suffix: "",
    label: "Animals in our Bareilly research herd",
  },
  {
    value: 6,
    prefix: "",
    suffix: "",
    label: "In-house technology platforms",
  },
  {
    value: 2,
    prefix: "",
    suffix: "",
    label: "Facilities — one chain of custody",
  },
];

/* =========================================================
   ANIMATED COUNTER
========================================================= */

const AnimatedCounter = ({
  value,
  prefix = "",
  suffix = "",
  startCounting,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime = null;
    const duration = 1600;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        easedProgress * value
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [startCounting, value]);

  return (
    <>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

/* =========================================================
   ABOUT STATS SECTION
========================================================= */

const AboutStats = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="about-stats-section"
      ref={sectionRef}
    >
      <Container fluid className="about-stats-container">
        <Row className="about-stats-row g-0">
          {statsData.map((stat, index) => (
            <Col
              key={index}
              xs={6}
              lg={3}
              className="about-stats-col"
            >
              <div className="about-stat-box">

                {/* NUMBER */}
                <div className="about-stat-number">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    startCounting={isVisible}
                  />
                </div>

                {/* LABEL */}
                <div className="about-stat-label">
                  {stat.label}
                </div>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutStats;