import React, { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  Download,
  FileText,
  MessageCircle,
  Dna,
  ChevronLeft,
  ChevronRight,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import "./FAQ.css";

const faqCards = [
  {
    id: 1,
    icon: <MessageCircle size={30} />,
    title: "View our FAQs",
    description:
      "Find answers to the most commonly asked questions about our products and services.",
    button: "Browse FAQs",
  },
  {
    id: 2,
    icon: <Download size={30} />,
    title: "Download Documents",
    description:
      "Access brochures, infographics, guides, posters, and other useful documents.",
    button: "Get assistance",
  },
  {
    id: 3,
    icon: <FileText size={30} />,
    title: "Case Study",
    description:
      "Explore how our genomics and sequencing services support research and innovation worldwide.",
    button: "Learn more",
  },
  {
    id: 4,
    icon: <MessageCircle size={30} />,
    title: "Talk to a Specialist",
    description:
      "Connect with our customer support, sales, or scientific assistance team for expert guidance.",
    button: "Contact us",
  },
  {
    id: 5,
    icon: <Microscope size={30} />,
    title: "Sample Submission Guidelines",
    description:
      "Follow our simple submission guidelines to ensure accurate and high-quality sequencing results.",
    button: "Check now",
  },
  {
    id: 6,
    icon: <Dna size={30} />,
    title: "Research Support Services",
    description:
      "Get technical assistance for genomics research, experimental design, and sequencing workflows.",
    button: "Explore support",
  },
  {
    id: 7,
    icon: <ShieldCheck size={30} />,
    title: "Quality & Compliance",
    description:
      "Learn about our quality assurance processes, validation standards, and data security practices.",
    button: "View standards",
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 28;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const AUTO_SCROLL_SPEED = 0.6; // px per frame, right -> left

const FAQ = () => {
  const rowRef = useRef(null);
  const translateRef = useRef(0);
  const rafRef = useRef(null);
  const singleSetWidthRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  // duplicate cards so the loop can wrap seamlessly
  const loopedCards = [...faqCards, ...faqCards];

  useEffect(() => {
    const measure = () => {
      if (rowRef.current) {
        singleSetWidthRef.current = rowRef.current.scrollWidth / 2;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!isPaused && rowRef.current && singleSetWidthRef.current > 0) {
        translateRef.current += AUTO_SCROLL_SPEED;
        if (translateRef.current >= singleSetWidthRef.current) {
          translateRef.current -= singleSetWidthRef.current;
        }
        rowRef.current.style.transform = `translateX(-${translateRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  const scroll = (direction) => {
    if (!rowRef.current || singleSetWidthRef.current === 0) return;

    setIsPaused(true);
    let next =
      translateRef.current + (direction === "left" ? -CARD_STEP : CARD_STEP);

    if (next < 0) next += singleSetWidthRef.current;
    if (next >= singleSetWidthRef.current) next -= singleSetWidthRef.current;

    translateRef.current = next;
    rowRef.current.style.transition = "transform 0.4s ease";
    rowRef.current.style.transform = `translateX(-${next}px)`;

    setTimeout(() => {
      if (rowRef.current) rowRef.current.style.transition = "";
    }, 400);

    setTimeout(() => setIsPaused(false), 2500);
  };

  return (
    <section className="faq-section">
      <Container>
        {/* Center Heading */}
        <div className="faq-header-center">
          <h2 className="section-heading">How Can We Help You?</h2>

          <div className="faq-divider">
            <span className="faq-line"></span>
            <Dna size={22} />
            <span className="faq-line"></span>
          </div>

          <p className="faq-subtitle">
            We are pleased to assist you with genomics services, research
            support, documentation, compliance guidance, and expert
            scientific consultation. Explore the resources below to find
            the help you need quickly and efficiently.
          </p>
        </div>

        {/* Slider Top Right Buttons */}
        <div className="faq-slider-top">
          <div className="faq-nav-buttons">
            <button className="faq-nav-btn" onClick={() => scroll("left")}>
              <ChevronLeft size={22} />
            </button>

            <button className="faq-nav-btn" onClick={() => scroll("right")}>
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div
          className="faq-scroll-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="faq-scroll-wrapper" ref={rowRef}>
            {loopedCards.map((card, idx) => (
              <div key={`${card.id}-${idx}`} className="faq-help-card">
                <div className="faq-card-icon">{card.icon}</div>
                <h3 className="faq-card-title">{card.title}</h3>
                <p className="faq-card-description">{card.description}</p>
                <span className="faq-card-link">{card.button}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;