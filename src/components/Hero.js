import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, FlaskConical, CirclePlus } from "lucide-react";
import "./Hero.css";

const slides = [
  {
    heading: "From Sequence to Solution",
    description:
      "India’s integrated genomics company combining advanced multi-omics laboratories, agricultural and livestock genomics, research capabilities, and clinical solutions to transform genomic data into real-world impact.",
  },
  {
    heading: "One Genome<br />Multiple Possibilities",
    description:
      "From agriculture and livestock to research and clinical genomics, we bring sequencing, multi-omics, and scientific expertise together to deliver solutions that advance health, strengthen food systems, and accelerate discovery.",
  },
  {
    heading: "From Farm to Research",
    description:
      "Building India’s integrated genomics ecosystem across agriculture, cattle and livestock, scientific research, and clinical genomics, connecting advanced sequencing and multi-omics with solutions designed for a healthier, smarter future.",
  },
];

const cards = [
  {
    title: "Agri Genomics",
    icon: <Leaf size={26} />,
    link: "/agri-genomics",
    color: "green",
  },
  {
    title: "Research Genomics",
    icon: <FlaskConical size={26} />,
    link: "/research-genomics",
    color: "blue",
  },
  {
    title: "Clinical Genomics",
    icon: <CirclePlus size={26} />,
    link: "/clinical-genomics",
    color: "purple",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  /* Mobile cards */
  const [activeCard, setActiveCard] = useState(0);
  const cardsRef = useRef(null);
  const autoSlideRef = useRef(null);

  /* =========================================================
     HERO TEXT AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 600);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     SCROLL TO ACTIVE CARD
  ========================================================= */

  const scrollToCard = (index, smooth = true) => {
    const container = cardsRef.current;

    if (!container) return;

    const cardElements =
      container.querySelectorAll(".hero-card");

    const card = cardElements[index];

    if (!card) return;

    /*
      Center card inside mobile container
    */

    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;

    const targetScroll =
      card.offsetLeft -
      (containerWidth - cardWidth) / 2;

    container.scrollTo({
      left: targetScroll,
      behavior: smooth ? "smooth" : "auto",
    });

    setActiveCard(index);
  };

  /* =========================================================
     AUTO CARD SLIDER
     Every 2 seconds
  ========================================================= */

  const startAutoSlide = () => {
    clearInterval(autoSlideRef.current);

    autoSlideRef.current = setInterval(() => {
      setActiveCard((prev) => {
        const nextIndex = (prev + 1) % cards.length;

        scrollToCard(nextIndex);

        return nextIndex;
      });
    }, 2000);
  };

  /* =========================================================
     START AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    startAutoSlide();

    return () => {
      clearInterval(autoSlideRef.current);
    };
  }, []);

  /* =========================================================
     DETECT MANUAL SWIPE
  ========================================================= */

  useEffect(() => {
    const container = cardsRef.current;

    if (!container) return;

    let scrollTimeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const cardElements =
          container.querySelectorAll(".hero-card");

        if (!cardElements.length) return;

        const containerCenter =
          container.scrollLeft +
          container.offsetWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cardElements.forEach((card, index) => {
          const cardCenter =
            card.offsetLeft +
            card.offsetWidth / 2;

          const distance = Math.abs(
            containerCenter - cardCenter
          );

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActiveCard(closestIndex);

        /*
          Restart auto slider after manual swipe
        */
        startAutoSlide();
      }, 120);
    };

    container.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      container.removeEventListener(
        "scroll",
        handleScroll
      );

      clearTimeout(scrollTimeout);
    };
  }, []);

  /* =========================================================
     DOT CLICK
  ========================================================= */

  const handleDotClick = (index) => {
    scrollToCard(index);

    /*
      Restart 2 sec timer after manual click
    */
    startAutoSlide();
  };

  const currentSlide = slides[activeIndex];

  return (
    <section className="hero">

      {/* =====================================================
          VIDEO BACKGROUND
      ===================================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="hero-video"
      >
        <source
          src={require("../assets/lead-video22.mp4")}
          type="video/mp4"
        />
      </video>

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="hero-overlay"></div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="hero-container">

        {/* ===================================================
            HERO TEXT
        =================================================== */}

        <div
          className={`hero-text ${
            animate ? "show" : "hide"
          }`}
        >
          <h1
            className="hero-heading"
            dangerouslySetInnerHTML={{
              __html: currentSlide.heading,
            }}
          />

          <p className="hero-description">
            {currentSlide.description}
          </p>
        </div>

        {/* ===================================================
            GENOMICS CARDS
        =================================================== */}

        <div
          className="hero-cards"
          ref={cardsRef}
        >
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className={`hero-card ${card.color}`}
            >
              <div className="hero-card-content">

                <div
                  className={`hero-icon ${card.color}`}
                >
                  {card.icon}
                </div>

                <div className="hero-card-text">

                  <h3>{card.title}</h3>

                  <span>
                    Explore Services →
                  </span>

                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* ===================================================
            MOBILE SLIDER INDICATORS
        =================================================== */}

        <div className="hero-card-indicators">

          {cards.map((card, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show ${card.title}`}
              className={`hero-card-dot ${
                activeCard === index
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleDotClick(index)
              }
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Hero;