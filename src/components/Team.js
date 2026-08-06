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
    image: "/assets/team/scientist1.jpg",
  },
  {
    name: "ASAKAWA, Kazuhide",
    lab: "Neurobiology and Pathology Laboratory",
    image: "/assets/team/scientist2.jpg",
  },
  {
    name: "HIRATA, Tatsumi",
    lab: "Brain Function Laboratory",
    image: "/assets/team/scientist3.jpg",
  },
  {
    name: "IWASATO, Takuji",
    lab: "Laboratory of Mammalian Neural Circuits",
    image: "/assets/team/scientist4.jpg",
  },
  {
    name: "KOIDE, Tsuyoshi",
    lab: "Mouse Genomics Resource Laboratory",
    image: "/assets/team/scientist5.jpg",
  },
  {
    name: "NAKAMURA, Hiroshi",
    lab: "Molecular Genetics Laboratory",
    image: "/assets/team/scientist6.jpg",
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
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="team-scientists-section">
      <Container>
        <div className="team-header">
          <div>
            <h2 className="team-title">Our Scientists</h2>
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