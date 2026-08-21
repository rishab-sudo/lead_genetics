import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import {
  Download,
  FileText,
  MessageCircle,
  Dna,
  ChevronLeft,
  ChevronRight,
  Microscope,
  ShieldCheck,
} from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FAQ.css";

const faqCards = [
  {
    id: 1,
    icon: <MessageCircle size={30} />,
    title: "View our FAQs",
    description:
      "Find answers to the most commonly asked questions about our products and services.",
    button: "Browse FAQs",
  },
  {
    id: 2,
    icon: <Download size={30} />,
    title: "Download Documents",
    description:
      "Access brochures, infographics, guides, posters, and other useful documents.",
    button: "Get assistance",
  },
  {
    id: 3,
    icon: <FileText size={30} />,
    title: "Case Study",
    description:
      "Explore how our genomics and sequencing services support research and innovation worldwide.",
    button: "Learn more",
  },
  {
    id: 4,
    icon: <MessageCircle size={30} />,
    title: "Talk to a Specialist",
    description:
      "Connect with our customer support, sales, or scientific assistance team for expert guidance.",
    button: "Contact us",
  },
  {
    id: 5,
    icon: <Microscope size={30} />,
    title: "Sample Submission Guidelines",
    description:
      "Follow our simple submission guidelines to ensure accurate and high-quality sequencing results.",
    button: "Check now",
  },
  {
    id: 6,
    icon: <Dna size={30} />,
    title: "Research Support Services",
    description:
      "Get technical assistance for genomics research, experimental design, and sequencing workflows.",
    button: "Explore support",
  },
  {
    id: 7,
    icon: <ShieldCheck size={30} />,
    title: "Quality & Compliance",
    description:
      "Learn about our quality assurance processes, validation standards, and data security practices.",
    button: "View standards",
  },
];


/* =========================================================
   CUSTOM ARROWS
========================================================= */

const NextArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      className="faq-slick-arrow faq-slick-next"
      onClick={onClick}
      aria-label="Next slide"
    >
      <ChevronRight size={24} />
    </button>
  );
};


const PrevArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      className="faq-slick-arrow faq-slick-prev"
      onClick={onClick}
      aria-label="Previous slide"
    >
      <ChevronLeft size={24} />
    </button>
  );
};


/* =========================================================
   FAQ COMPONENT
========================================================= */

const FAQ = () => {

  const settings = {
    dots: false,

    infinite: true,

    speed: 600,

    slidesToShow: 3,

    slidesToScroll: 1,

    autoplay: true,

    autoplaySpeed: 3000,

    pauseOnHover: true,

    pauseOnFocus: true,

    swipe: true,

    draggable: true,

    touchMove: true,

    centerMode: false,

    arrows: true,

    nextArrow: <NextArrow />,

    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          centerMode: true,

          centerPadding: "0px",

          arrows: true,

          autoplay: true,

          autoplaySpeed: 3000,

          speed: 600,

          swipe: true,

          touchMove: true,
        },
      },
    ],
  };


  return (
    <section className="faq-section">

      <Container>

        {/* =====================================================
            CENTER HEADING
        ===================================================== */}

        <div className="faq-header-center">

          <h2 className="section-heading">
            Find The Right Support For You
          </h2>

          <div className="faq-divider">

            <span className="faq-line"></span>

            <Dna size={22} />

            <span className="faq-line"></span>

          </div>

          <p className="faq-subtitle">
            Connect with the right resources and expertise across
            genomics services, research, technical documentation,
            compliance, and scientific consultation.
          </p>

        </div>


        {/* =====================================================
            REACT SLICK SLIDER
        ===================================================== */}

        <div className="faq-slider-wrapper">

          <Slider {...settings}>

            {faqCards.map((card) => (

              <div
                className="faq-slide"
                key={card.id}
              >

                <div className="faq-help-card">

                  <div className="faq-card-icon">
                    {card.icon}
                  </div>

                  <h3 className="faq-card-title">
                    {card.title}
                  </h3>

                  <p className="faq-card-description">
                    {card.description}
                  </p>

                  <span className="faq-card-link">
                    {card.button}
                  </span>

                </div>

              </div>

            ))}

          </Slider>

        </div>

      </Container>

    </section>
  );
};

export default FAQ;