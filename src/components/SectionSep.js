import React from "react";
import { Link } from "react-router-dom";
import "./SectionSep.css";

const SectionSep = ({
  bgImage,
  title,
  description,
  buttonText = "Explore →",
  link = "/",
}) => {
  return (
    <div className="section-wrapperr">
    <section
      className="section-sep"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="section-overlay">
        <div className="section-content">
          <h2>{title}</h2>
          <p>{description}</p>

          <Link to={link} className="explore-btn">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
</div>

  );
};

export default SectionSep;