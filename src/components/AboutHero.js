import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="AboutHero">
      {/* Background Video */}
      <video
        className="AboutHero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={require("../assets/abouthero-video.mp4")} type="video/mp4" />
      </video>

      {/* Black Overlay */}
      <div className="AboutHero-overlay"></div>

      {/* Heading */}
      <div className="AboutHero-content">
        <h1>Advancing Genomics for a Better Tomorrow</h1>
        <p>Empowering healthcare, agriculture, and research through innovative genomic technologies and precision sequencing.</p>
      </div>
    </section>
  );
};

export default AboutHero;