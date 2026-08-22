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
        <h1>About Us</h1>
        <p>Discover our journey, vision and commitment to excellence.</p>
      </div>
    </section>
  );
};

export default AboutHero;