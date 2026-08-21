import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
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

// Horizontal banner image
const teamBannerImage = require("../assets/team/group_team.jpeg");

const Team = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(700);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(700);
    }
  };

  return (
    <section className="team-scientists-section">
      <Container>
        {/* ================================
            HEADING
        ================================= */}
        <div className="team-top-bar">
          <div className="team-heading">
            <h2 className="team-title section-heading">
              Experts Behind Every Discovery
            </h2>

            <p className="team-subtitle">
              Meet the multidisciplinary experts bringing together genomics,
              bioinformatics, molecular science, and biological research to
              solve complex challenges.
            </p>
          </div>
        </div>

        {/* ================================
            SLIDER
        ================================= */}
        <div className="team-slider-wrapper">

          {/* LEFT ARROW */}
          <button
            type="button"
            className="team-slider-arrow team-slider-arrow-left"
            onClick={handlePrev}
            aria-label="Previous team member"
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay]}
            loop={true}
            speed={700}
            slidesPerGroup={1}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={false}
            allowTouchMove={true}
            watchSlidesProgress={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              431: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },

              769: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },

              993: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },

              1201: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },

              1301: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
            }}
            className="team-swiper"
          >
            {scientists.map((scientist, index) => (
              <SwiperSlide key={index} className="team-slide">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* RIGHT ARROW */}
          <button
            type="button"
            className="team-slider-arrow team-slider-arrow-right"
            onClick={handleNext}
            aria-label="Next team member"
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>
        </div>

        {/* ================================
            MEET OUR TEAM
        ================================= */}
        <div className="team-meet-section">
          <div className="team-meet-content">
            <h2 className="team-meet-title section-heading">
              Meet our Team
            </h2>

            <p className="team-meet-text">
              At Leads Genetics, our strength lies in a multidisciplinary team
              of geneticists, embryologists, and veterinary scientists working
              together to advance genomics-driven livestock breeding. From
              high-resolution genomic selection to advanced IVF and MOET
              programs, our team combines deep scientific expertise with
              hands-on field experience to deliver measurable results for
              breeders and dairy farms across the region.
            </p>

            <p className="team-meet-text">
              Backed by a state-of-the-art lab and years of applied research,
              we're committed to making cutting-edge reproductive genetics
              accessible and practical for the livestock industry.
            </p>
          </div>

          <div className="team-meet-image-wrap">
            <img
              src={teamBannerImage}
              alt="Our Team"
              className="team-meet-image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;