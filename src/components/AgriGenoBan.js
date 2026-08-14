import React from "react";
import "./AgriGenoBanner.css";

const AgriBanner = () => {
  return (
    <section className="ab-container-fluid">
      <video
        className="ab-bg-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/agri-genomics-poster.jpg"
      >
       <source src={require("../assets/agrvideo.mp4")} type="video/mp4" />
      </video>

      <div className="ab-overlay" />

      <div className="ab-container">
        <h1 className="ab-heading">
          Agri Genomics: Transforming Bovine Genetics
        </h1>

        <p className="ab-text">
          Lab-grade IVF, MOET, and genomic selection working together to
          raise the genetic ceiling of every herd we work with.
        </p>
      </div>
    </section>
  );
};

export default AgriBanner;