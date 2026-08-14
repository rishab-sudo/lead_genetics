import React, { useRef, useState } from "react";
import "./AboutHero.css";

// Placeholder paths — swap these with your real assets.
// Video should live in your assets folder, e.g. src/assets/videos/hero-bg.mp4
const HERO_VIDEO_SRC = require("../assets/abouthero-video.mp4");
const HERO_VIDEO_POSTER = "/assets/images/hero-poster.jpg";

const AboutHero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="about-hero" aria-label="About Leads Agri Genetics">
      <div className="about-hero__media">
        <video
          ref={videoRef}
          className={`about-hero__video ${isVideoLoaded ? "is-loaded" : ""}`}
          src={HERO_VIDEO_SRC}
          poster={HERO_VIDEO_POSTER}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setIsVideoLoaded(true)}
        />
        <div className="about-hero__overlay" />
      </div>

      <div className="about-hero__content">
        <p className="about-hero__eyebrow">About Leads Agri Genetics</p>

        <h1 className="about-hero__heading">
          Decoding Life, From
          <br />
          Field to Clinic
        </h1>

        <p className="about-hero__subtext">
          We unite agricultural, research, and clinical genomics under one
          roof — turning genetic insight into stronger crops, deeper science,
          and healthier lives.
        </p>

        <div className="about-hero__actions">
          <a href="#who-we-serve" className="about-hero__btn about-hero__btn--primary">
            See Who We Serve
          </a>
          <a href="#leadership" className="about-hero__btn about-hero__btn--secondary">
            Meet Our Leadership
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;