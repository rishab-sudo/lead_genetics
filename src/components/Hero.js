import React, { useEffect, useState } from "react";
import CommonButton from "./CommonButton";
import "./Hero.css";

const slides = [
  {
    heading: "Transforming Genomics Into Innovation",
    subheading: "Advanced DNA Sequencing Solutions",
    description:
      "Empowering agriculture, research, and clinical genomics with cutting-edge sequencing technologies and bioinformatics expertise.",
  },
  {
    heading: "Precision Agriculture Genomics",
    subheading: "Smarter Crops, Better Yield",
    description:
      "Accelerate crop improvement programs using genomic insights, marker-assisted breeding, and AI-powered analytics.",
  },
  {
    heading: "Clinical & Research Genomics",
    subheading: "Driving Personalized Healthcare",
    description:
      "Unlock the power of genomic data for diagnostics, precision medicine, and next-generation biomedical research.",
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
      }, 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeIndex];

  return (
    <section className="hero">
      {/* Background Video */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={require ("../assets/hero-video.mp4")} />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="hero-overlay"></div>

      {/* Animated Content */}
      <div className={`hero-content ${animate ? "show" : "hide"}`}>
        

        <h1 className="hero-heading">{currentSlide.heading}</h1>

        <p className="hero-description">{currentSlide.description}</p>

   <div className="hero-buttons">
  <CommonButton
    text="Explore Services"
    to="/services"
  />

  <CommonButton
    text="Contact Us"
    to="/contact"
  />
</div>
      </div>

      {/* Slide Indicators */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;