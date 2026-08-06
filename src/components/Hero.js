import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, FlaskConical, CirclePlus } from "lucide-react";
import "./Hero.css";

import agriImg from "../assets/agri.png";
import researchImg from "../assets/research.png";
import clinicalImg from "../assets/clinical.png";

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
    icon: <Leaf size={22} />,
    link: "/agri-genomics",
    image: agriImg,
    color: "green",
  },
  {
    title: "Research Genomics",
    icon: <FlaskConical size={22} />,
    link: "/research-genomics",
    image: researchImg,
    color: "blue",
  },
  {
    title: "Clinical Genomics",
    icon: <CirclePlus size={22} />,
    link: "/clinical-genomics",
    image: clinicalImg,
    color: "purple",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      // smoother + slower transition
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 600);
    }, 6500); // change every 6.5s

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeIndex];

  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src={require("../assets/lead-video3.mp4")}
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* ONLY THIS PART ANIMATES */}
        <div className={`hero-text ${animate ? "show" : "hide"}`}>
          <div className="hero-badge">LEADS GENETICS</div>

       <h1
  className="hero-heading"
  dangerouslySetInnerHTML={{ __html: currentSlide.heading }}
/>

          <p className="hero-description">
            {currentSlide.description}
          </p>
        </div>

        {/* CARDS STAY FIXED */}
        <div className="hero-cards">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className={`hero-card ${card.color}`}
            >
              <div
                className="hero-card-bg"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>

              <div className="hero-card-content">
                <div className={`hero-icon ${card.color}`}>
                  {card.icon}
                </div>

                <h3>{card.title}</h3>
                <span>Explore Services →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;