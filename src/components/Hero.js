import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, FlaskConical, CirclePlus } from "lucide-react";
import "./Hero.css";

const slides = [
  {
    heading: "From Sequence to Solution<br />From Farm to Clinic",
    description:
      "India’s integrated genomics company combining advanced multi-omics laboratories, agricultural and livestock genomics, research capabilities, and clinical solutions to transform genomic data into real-world impact.",
  },
  {
    heading: "One Genome<br />Multiple Possibilities",
    description:
      "From agriculture and livestock to research and clinical genomics, we bring sequencing, multi-omics, and scientific expertise together to deliver solutions that advance health, strengthen food systems, and accelerate discovery.",
  },
  {
    heading: "From Farm to Research<br />From Research to Clinic",
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
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source
          src={require("../assets/lead-video3.mp4")}
          type="video/mp4"
        />
      </video>

      {/* VIDEO OVERLAY */}
      <div className="hero-overlay"></div>

      <div className="hero-container">

        {/* HERO TEXT */}
          {/* <div className="hero-badge">
            LEADS GENETICS
          </div> */}
        <div className={`hero-text ${animate ? "show" : "hide"}`}>

          {/* STATIC BADGE - NO ANIMATION */}

          {/* HERO HEADING */}
          <h1
            className="hero-heading"
            dangerouslySetInnerHTML={{
              __html: currentSlide.heading,
            }}
          />

          {/* HERO DESCRIPTION */}
          <p className="hero-description">
            {currentSlide.description}
          </p>

        </div>

        {/* THREE GENOMICS CARDS */}
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