import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.css";

const scientists = [
  {
    name: "Ghnaymshyam ji ",
    lab: " Chairman Of The Board at B.L. Agro Industries Ltd",
    image: require("../assets/team/Ghanyamji.png"),
  },
  {
    name: "Ashish khandelwal ",
    lab: "Managing Director at B.L. Agro Industries Ltd",
    image: require("../assets/team/Ashish_khandelwal.png"),
  },
  {
    name: "Dr. Ashish Dubey ",
    lab: "Co-founder of Leads Genetics ",
    image: require("../assets/team/Ashiish dubye.png"),
  },
  {
    name: " Dr. Pardhasaradhi, ",
    lab: " Technical & Operations Head at Leads Genetics",
    image: require("../assets/team/parda.png"),
  },
  {
    name: "Dr. Ayush ",
    lab: "Assistant Vice President – Head Data & Bioinformatics, Leads Genetics Pvt. Ltd.",
    image: require("../assets/team/Ayush.png"),
  },
   {
    name: "Dr. Saravanan Durairaj ",
    lab: "MOET IVF Specialist",
    image: require("../assets/team/saravanan.png"),
  },

];

const Team = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 430,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="team-scientists-section">
      <Container>
        {/* Heading + Right Buttons */}
        <div className="team-top-bar">
          <div className="team-heading">
            <span className="team-label">OUR EXPERTS</span>
            <h2 className="team-title">Our Team</h2>
            <p className="team-subtitle">
              Meet the experts driving innovation in genomics, neuroscience,
              and molecular research.
            </p>
          </div>

          <div className="team-nav">
            <button
              className="team-nav-btn"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              className="team-nav-btn"
              onClick={() => sliderRef.current.slickNext()}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {scientists.map((scientist, index) => (
            <div key={index} className="team-slide">
              <div className="scientist-card">
                <img
                  src={scientist.image}
                  alt={scientist.name}
                  className="scientist-image"
                />

                <div className="scientist-overlay">
                  <h3>{scientist.lab}</h3>
                  <span>{scientist.name}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Team;