import React, { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  {
    heading: "Transforming Genomics Into Innovation",
    subheading: "Advanced DNA Sequencing Solutions",
    description:
      "Empowering agriculture, research, and clinical genomics with cutting-edge sequencing technologies and bioinformatics expertise.",
  },
  {
    heading: "Sustainable Farming with Genomics",
    subheading: "Smarter Crops, Better Yield",
    description:
      "Accelerate crop improvement programs using genomic insights, marker-assisted breeding, and AI-powered analytics.",
  },
  {
    heading: "Every Diagnosis Starts with a Genome",
    subheading: "Driving Personalized Healthcare",
    description:
      "From reproductive screening to disease diagnostics, services turn genetic data backed by accredited labs and fast turnaround.",
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
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeIndex];

  return (
    <section className="hero">
      {/* BACKGROUND VIDEO */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      >
        <source src={require("../assets/hero-video2.mp4")} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">
        <div className={`hero-text ${animate ? "show" : "hide"}`} key={activeIndex}>
          {/* <span className="hero-subheading">
            {currentSlide.subheading}
          </span> */}

          <h1 className="hero-heading">
            {currentSlide.heading.split(" ").slice(0, 2).join(" ")}
            <br />
            {currentSlide.heading.split(" ").slice(2).join(" ")}
          </h1>

          <p className="hero-description">
            {currentSlide.description}
          </p>

          <div className="hero-buttons">
            <button className="common-btn">Explore Services</button>
            <button className="common-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;