import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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

import "swiper/css";
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
  const sliderRef = useRef(null);

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
            SWIPER SLIDER
        ===================================================== */}

        <div className="faq-slider-wrapper">

          <PrevArrow onClick={() => sliderRef.current.swiper.slidePrev()} />

          <Swiper
            ref={sliderRef}
            modules={[Autoplay]}
            loop={true}
            speed={600}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            simulateTouch={true}
            breakpoints={{
              577: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                centeredSlides: false,
              },
              992: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                centeredSlides: false,
              },
            }}
          >
            {faqCards.map((card) => (
              <SwiperSlide className="faq-slide" key={card.id}>
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
              </SwiperSlide>
            ))}
          </Swiper>

          <NextArrow onClick={() => sliderRef.current.swiper.slideNext()} />

        </div>

      </Container>

    </section>
  );
};

export default FAQ;