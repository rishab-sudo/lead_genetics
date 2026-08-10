import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
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

const NAVBAR_OFFSET = 200;
const VISIBLE_CARDS = 4;
const CARD_WIDTH = 320;
const CARD_GAP = 28;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const MOBILE_BREAKPOINT = 991;
const SMALL_BREAKPOINT = 576;

const FAQ = () => {
  const wrapperRef = useRef(null);
  const viewportRef = useRef(null);
  const rowRef = useRef(null);

  const [maxTranslate, setMaxTranslate] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isPinEnabled, setIsPinEnabled] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      if (!rowRef.current || !viewportRef.current) return;
      const rowWidth = rowRef.current.scrollWidth;
      const viewportWidth = viewportRef.current.offsetWidth;
      setMaxTranslate(Math.max(0, rowWidth - viewportWidth));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isPinEnabled]);

  useEffect(() => {
    const mqPin = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const mqSmall = window.matchMedia(`(max-width: ${SMALL_BREAKPOINT}px)`);

    const update = () => {
      setIsPinEnabled(!mqPin.matches);
      setIsSmallScreen(mqSmall.matches);
    };

    update();
    mqPin.addEventListener("change", update);
    mqSmall.addEventListener("change", update);

    return () => {
      mqPin.removeEventListener("change", update);
      mqSmall.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!isPinEnabled) return;

    let ticking = false;

    const computeProgress = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper || maxTranslate <= 0) {
        ticking = false;
        return;
      }

      const rect = wrapper.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const scrollableRange = rect.height - viewportH;

      const scrolledIntoPin = NAVBAR_OFFSET - rect.top;
      let progress =
        scrollableRange > 0 ? scrolledIntoPin / scrollableRange : 0;

      progress = Math.min(1, Math.max(0, progress));
      setTranslateX(progress * maxTranslate);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(computeProgress);
        ticking = true;
      }
    };

    computeProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isPinEnabled, maxTranslate]);

  const scroll = (direction) => {
    if (isPinEnabled) {
      window.scrollBy({
        top: direction === "left" ? -CARD_STEP : CARD_STEP,
        behavior: "smooth",
      });
    } else if (viewportRef.current) {
      const nudge = isSmallScreen
        ? viewportRef.current.clientWidth * 0.88
        : CARD_STEP;

      viewportRef.current.scrollBy({
        left: direction === "left" ? -nudge : nudge,
        behavior: "smooth",
      });
    }
  };

  const wrapperHeight = isPinEnabled
    ? `calc(100vh + ${maxTranslate}px)`
    : "auto";

  return (
    <div
      className="faq-scroll-wrapper-outer"
      ref={wrapperRef}
      style={{ height: wrapperHeight }}
    >
      <div
        className={`faq-sticky-inner ${isPinEnabled ? "is-pinned" : ""}` }
        style={
          isPinEnabled
            ? {
                top: `${NAVBAR_OFFSET}px`,
                height: `calc(100vh - ${NAVBAR_OFFSET}px)`,
              }
            : {}
        }
      >
        <section className="faq-section">
          <Container>
            {/* Center Heading */}
            <div className="faq-header-center">
              <h2 className="faq-main-title">How Can We Help You?</h2>

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
              className={`faq-scroll-viewport ${
                isPinEnabled ? "" : "native-scroll"
              }`}
              ref={viewportRef}
              style={
                isPinEnabled
                  ? {
                      maxWidth: `${
                        VISIBLE_CARDS * CARD_WIDTH +
                        (VISIBLE_CARDS - 1) * CARD_GAP
                      }px`,
                      margin: "0 auto",
                    }
                  : undefined
              }
            >
              <div
                className="faq-scroll-wrapper"
                ref={rowRef}
                style={
                  isPinEnabled
                    ? { transform: `translateX(-${translateX}px)` }
                    : undefined
                }
              >
                {faqCards.map((card) => (
                  <div key={card.id} className="faq-help-card">
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
      </div>
    </div>
  );
};

export default FAQ;