import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, FlaskConical, CirclePlus } from "lucide-react";
import "./Hero.css";

const slides = [
  {
    heading: "Transforming Genomics<br />Into Innovation",
    description:
      "Empowering agriculture, research, and clinical genomics with cutting-edge sequencing technologies and bioinformatics expertise.",
  },
  {
    heading: "Sustainable Farming<br />with Genomics",
    description:
      "Accelerate crop improvement programs using genomic insights, marker-assisted breeding, and AI-powered analytics.",
  },
  {
    heading: "Every Diagnosis Starts<br />with a Genome",
    description:
      "From reproductive screening to disease diagnostics, our services transform genetic data into actionable healthcare insights.",
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

  const currentSlide = slides[activeIndex];

  return (
    <section className="hero">
      {/* VIDEO BACKGROUND */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source
          src={require("../assets/lead-video3.mp4")}
          type="video/mp4"
        />
      </video>

      {/* VIDEO OVERLAY */}
      <div className="hero-overlay"></div>

      <div className="hero-container">

        {/* HERO TEXT */}
        <div className={`hero-text ${animate ? "show" : "hide"}`}>
          <div className="hero-badge">LEADS GENETICS</div>

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

        {/* THREE CARDS */}
        <div className="hero-cards">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className={`hero-card ${card.color}`}
            >
              <div className="hero-card-content">

                {/* ICON */}
                <div className={`hero-icon ${card.color}`}>
                  {card.icon}
                </div>

                {/* TEXT */}
                <div className="hero-card-text">
                  <h3>{card.title}</h3>
                  <span>Explore Services →</span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;