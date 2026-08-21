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
    name: "Ghanshyam Khandelwal",
    lab: "Chairman Of The Board at B.L. Agro Industries Ltd",
    image: require("../assets/team/Ghanyamji.png"),
  },
  {
    name: "Ashish Khandelwal",
    lab: "Managing Director at B.L. Agro Industries Ltd",
    image: require("../assets/team/Ashish_khandelwal.png"),
  },
  {
    name: "Dr. Ashish Dubey",
    lab: "Co-founder of Leads Genetics",
    image: require("../assets/team/Ashiish dubye.png"),
  },
  {
    name: "Dr. Pardhasaradhi",
    lab: "Vice President & Operations Technical Head",
    image: require("../assets/team/parda.png"),
  },
  {
    name: "Dr. Suyash Agarwal",
    lab: "Assistant Vice President & Bioinformatics Head",
    image: require("../assets/team/Ayush.png"),
  },
  {
    name: "Dr. Saravanan Durairaj",
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

    // ✅ Center alignment
    centerMode: true,
    centerPadding: "0px",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px", // single centered card, no peek
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px", // single centered card, no peek
        },
      },
    ],
  };

  return (
    <section className="team-scientists-section">
      <Container>

        {/* ===== Heading ===== */}
        <div className="team-top-bar">
          <div className="team-heading">
            <h2 className="team-title section-heading">Our Team</h2>

            <p className="team-subtitle">
   Meet the multidisciplinary experts bringing together genomics, bioinformatics, molecular science, and 
   biological research to solve complex challenges.
            </p>
          </div>
        </div>

        {/* ===== Slider Wrapper ===== */}
        <div className="team-slider-wrapper">

          {/* LEFT ARROW */}
          <button
            className="team-slider-arrow team-slider-arrow-left"
            onClick={() => sliderRef.current.slickPrev()}
            aria-label="Previous team member"
          >
            <ChevronLeft size={24} />
          </button>

          {/* SLIDER */}
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

          {/* RIGHT ARROW */}
          <button
            className="team-slider-arrow team-slider-arrow-right"
            onClick={() => sliderRef.current.slickNext()}
            aria-label="Next team member"
          >
            <ChevronRight size={24} />
          </button>

        </div>

      </Container>
    </section>
  );
};

export default Team;