import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./AboutUsBanner.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600",
    heading: "Advancing Genomics for a Better Tomorrow",
    description:
      "Empowering healthcare, agriculture, and research through innovative genomic technologies and precision sequencing.",
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "60+", label: "Scientists" },
      { value: "120+", label: "Projects" },
      { value: "35+", label: "Countries" },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=1600",
    heading: "Precision Diagnostics & Clinical Excellence",
    description:
      "Delivering accurate molecular diagnostics using next-generation sequencing for personalized healthcare.",
    stats: [
      { value: "5000+", label: "Samples Tested" },
      { value: "99%", label: "Accuracy" },
      { value: "40+", label: "Hospitals" },
      { value: "24x7", label: "Support" },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1600",
    heading: "Innovating Research Through DNA Science",
    description:
      "Supporting universities, biotech organizations, and researchers with world-class genomic solutions.",
    stats: [
      { value: "100+", label: "Research Partners" },
      { value: "20+", label: "Technologies" },
      { value: "80+", label: "Experts" },
      { value: "Global", label: "Reach" },
    ],
  },
];

const AboutUsBanner = () => {
  return (
    <section className="about-banner">
      <Carousel slide controls indicators interval={2500} >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="banner-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="banner-overlay">
                <Container>

                  <div className="banner-content">

                    <h1>{slide.heading}</h1>

                    <p>{slide.description}</p>

                    <div className="banner-stats">
                      {slide.stats.map((item, i) => (
                        <div className="stat" key={i}>
                          <h2>{item.value}</h2>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </Container>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default AboutUsBanner;