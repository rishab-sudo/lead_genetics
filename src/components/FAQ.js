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
const AUTO_INTERVAL = 3000; // ms per card step
const TRANSITION_MS = 600;
const TOTAL = faqCards.length;

const FAQ = () => {
  // duplicate cards so the loop can wrap seamlessly
  const loopedCards = [...faqCards, ...faqCards];

  const [index, setIndex] = useState(0); // 0..TOTAL-1, then jumps to TOTAL to animate, then resets
  const [noTransition, setNoTransition] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const resetTimeoutRef = useRef(null);

  // Auto-advance one card every 3s. Fully stops while isPaused.
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [isPaused]);

  // When we've scrolled past the real set, snap back to 0 without a visible jump.
  useEffect(() => {
    if (index >= TOTAL) {
      resetTimeoutRef.current = setTimeout(() => {
        setNoTransition(true);
        setIndex(0);
        // re-enable transition on the next frame
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setNoTransition(false));
        });
      }, TRANSITION_MS);
    }
    return () => clearTimeout(resetTimeoutRef.current);
  }, [index]);

  const handleManualScroll = (direction) => {
    setIsPaused(true);
    setIndex((prev) => {
      let next = prev + (direction === "left" ? -1 : 1);
      if (next < 0) next = TOTAL - 1;
      return next;
    });
    // resume autoplay after one full cycle
    setTimeout(() => setIsPaused(false), AUTO_INTERVAL);
  };

  const translateX = index * CARD_STEP;

  return (
    <section className="faq-section">
      <Container>
        {/* Center Heading */}
        <div className="faq-header-center">
          <h2 className="section-heading">Find The Right Support For You</h2>

          <div className="faq-divider">
            <span className="faq-line"></span>
            <Dna size={22} />
            <span className="faq-line"></span>
          </div>

          <p className="faq-subtitle">
Connect with the right resources and expertise across genomics services, research, technical documentation, compliance, and
 scientific consultation.

          </p>
        </div>

        {/* Slider Top Right Buttons */}
        <div className="faq-slider-top">
          <div className="faq-nav-buttons">
            <button
              className="faq-nav-btn"
              onClick={() => handleManualScroll("left")}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              className="faq-nav-btn"
              onClick={() => handleManualScroll("right")}
            >
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
          <div
            className="faq-scroll-wrapper"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: noTransition ? "none" : "transform 0.6s ease",
            }}
          >
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