import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./NewsEvents.css";

const newsData = [
  {
    title: "How Dr Renyu Zhang is reinventing protein",
    date: "17 December 2025",
    image: require("../assets/embroy1.jpeg"),
    tag: "News Article",
    description:
      "MOET technology enables the production of high-quality bovine embryos, accelerating genetic progress and reproductive efficiency.",
  },
  {
    title: "Big data and AI turbocharge weed risk research",
    date: "09 December 2025",
    image: require("../assets/embroy2.jpeg"),
    tag: "Research",
    description:
      "MOET technology enables the production of high-quality bovine embryos, accelerating genetic progress and reproductive efficiency.",
  },
  {
    title: "Seed bank grows with climate-resilient species",
    date: "04 December 2025",
    image: require("../assets/embroy3.jpeg"),
    tag: "News Article",
    description:
      "MOET technology enables the production of high-quality bovine embryos, accelerating genetic progress and reproductive efficiency.",
  },
];

const NewsEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  /* ================= RESPONSIVE CARD COUNT ================= */
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 767) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 991) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  /* ================= RESET INDEX ON RESPONSIVE CHANGE ================= */
  useEffect(() => {
    const maxIndex = Math.max(newsData.length - visibleCards, 0);

    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, currentIndex]);

  /* ================= NEXT SLIDE ================= */
  const nextSlide = () => {
    const maxIndex = Math.max(newsData.length - visibleCards, 0);

    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }

      return prev + 1;
    });
  };

  /* ================= PREVIOUS SLIDE ================= */
  const prevSlide = () => {
    const maxIndex = Math.max(newsData.length - visibleCards, 0);

    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }

      return prev - 1;
    });
  };

  /* ================= AUTO SLIDER ================= */
  useEffect(() => {
    if (newsData.length <= visibleCards) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [visibleCards]);

  const slidePercentage = 100 / visibleCards;

  return (
    <section className="news-events-section">
      <Container>
        {/* ================= HEADER ================= */}
        <div className="news-header">
          <div className="news-heading-wrapper">
            <span className="news-eyebrow">LATEST UPDATES</span>

            <h2 className="news-title">News &amp; Insights</h2>

            <p className="news-subtitle">
              Stay updated with our latest discoveries, innovations, research
              highlights, and genomics breakthroughs.
            </p>
          </div>

          <div className="news-header-actions">
            <a href="#news" className="news-view-btn">
              ALL NEWS
            </a>

            <div className="news-slider-controls">
              <button
                type="button"
                className="news-control-btn"
                onClick={prevSlide}
                aria-label="Previous news"
              >
                <ArrowLeft size={17} strokeWidth={1.8} />
              </button>

              <button
                type="button"
                className="news-control-btn"
                onClick={nextSlide}
                aria-label="Next news"
              >
                <ArrowRight size={17} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="news-divider"></div>

        {/* ================= SLIDER ================= */}
        <div className="news-slider">
          <div
            className="news-slider-track"
            style={{
              transform: `translateX(-${currentIndex * slidePercentage}%)`,
            }}
          >
            {newsData.map((item, index) => (
              <div
                className="news-slide"
                key={`${item.title}-${index}`}
                style={{
                  flex: `0 0 ${slidePercentage}%`,
                }}
              >
                <article className="news-card">
                  {/* IMAGE */}
                  <div className="news-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="news-image"
                    />

                    <span className="news-tag">{item.tag}</span>
                  </div>

                  {/* CONTENT */}
                  <div className="news-content">
                    <h3>{item.title}</h3>

                    <p className="news-description">{item.description}</p>

                    {/* FOOTER */}
                    <div className="news-footer">
                      <span className="news-date">{item.date}</span>

                      <a
                        href="#read-more"
                        className="news-arrow"
                        aria-label={`Read more about ${item.title}`}
                      >
                        <ArrowRight size={17} strokeWidth={1.8} />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SLIDER INDICATOR ================= */}
        <div className="news-slider-bottom">
          <div className="news-progress">
            <span
              style={{
                width: `${((currentIndex + 1) / Math.max(newsData.length - visibleCards + 1, 1)) * 100}%`,
              }}
            ></span>
          </div>

          <div className="news-slide-count">
            <span>
              {String(currentIndex + 1).padStart(2, "0")}
            </span>

            <small>/</small>

            <span>
              {String(
                Math.max(newsData.length - visibleCards + 1, 1)
              ).padStart(2, "0")}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsEvents;