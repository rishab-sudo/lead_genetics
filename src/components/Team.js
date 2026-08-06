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
    name: "TOYODA, Atsushi",
    lab: "Comparative Genomics Laboratory",
    image: require("../assets/team/Ashiish dubye.png"),
  },
  {
    name: "ASAKAWA, Kazuhide",
    lab: "Neurobiology and Pathology Laboratory",
    image: require("../assets/team/Ashish_khandelwal.png"),
  },
  {
    name: "IWASATO, Takuji",
    lab: "Laboratory of Mammalian Neural Circuits",
    image: require("../assets/team/saravanan.png"),
  },
  {
    name: "NAKAMURA, Hiroshi",
    lab: "Molecular Genetics Laboratory",
    image: require("../assets/team/Ashiish dubye.png"),
  },
  {
    name: "KOIDE, Tsuyoshi",
    lab: "Mouse Genomics Resource Laboratory",
    image: require("../assets/team/suyush agrwal.png"),
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
    autoplaySpeed: 2500,
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
        {/* Center Heading */}
        <div className="team-heading">
          <h2 className="team-title">Our Team </h2>
          <p className="team-subtitle">
            Meet the experts driving innovation in genomics, neuroscience,
            and molecular research.
          </p>
        </div>

        {/* Slider Navigation */}
        <div className="team-slider-header">
          <div className="team-nav">
            <button
              className="team-nav-btn"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              className="team-nav-btn"
              onClick={() => sliderRef.current.slickNext()}
            >
              <ChevronRight size={20} />
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