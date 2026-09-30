import React from "react";
import "./HeroChip.css";

const HeroChip = () => {
  return (
    <section className="hero-chip">
      <div className="hero-chip-container">

        {/* Left Content */}
        <div className="hero-chip-content">

          <div className="hero-chip-badge">
            UNVEILED AT THE CATTLE GENOMICS SUMMIT 2025 • BAREILLY, INDIA
          </div>

          <h1 className="hero-chip-title">
            India's First
            <br />
            Indigenous Zebu
            <br />
            Cattle SNP Chip
          </h1>

          <p className="hero-chip-description">
            A purpose-built genomic genotyping platform designed to accelerate
            scientific breeding improvement in India's native cattle
            populations — enabling precision genomics for Gir, Sahiwal,
            and indigenous Bos indicus cattle at unprecedented scale.
          </p>

          {/* Stats */}
          <div className="hero-chip-stats">

            <div className="hero-chip-stat">
              <h4>86–70%</h4>
              <span>Verified SNP Coverage</span>
            </div>

            <div className="hero-chip-stat">
              <h4>Bos indicus</h4>
              <span>Native Cattle Reference</span>
            </div>

            <div className="hero-chip-stat">
              <h4>Day 1</h4>
              <span>Parallel Genomic Processing</span>
            </div>

          </div>

          {/* <button className="hero-chip-button">
            Request Breed Genotyping Kit
            <span>↗</span>
          </button> */}

        </div>

        {/* Right Image */}
        <div className="hero-chip-visual">

          <div className="hero-chip-image-wrapper">

     <video
  src= {require("../assets/chip-hero-video.mp4")}
  className="hero-chip-image"
  autoPlay
  muted
  loop
  playsInline
  aria-label="Cattle genomic SNP chip laboratory"
>
  Your browser does not support the video tag.
</video>

            {/* Image Bottom Information */}
            <div className="hero-chip-image-info">

              <div className="hero-chip-image-info-left">
                <span className="hero-chip-live-dot"></span>

                <div>
                  <small>REAL-WORLD VALIDATION</small>
                  <strong>
                    High-throughput SNP Genotyping
                  </strong>
                </div>
              </div>

              <div className="hero-chip-status">
                ACTIVE
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroChip;