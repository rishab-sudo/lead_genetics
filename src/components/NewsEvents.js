import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./NewsEvents.css";

const newsData = [
  {
    title:
      "Leads Agri Genetics Launches India’s 1st Privately-Owned Integrated CoE for Cattle & Plant Genomics",
    date: "September 30, 2025",
    image: require("../assets/news/news1.jpeg"),
    tag: "News Article",
    description:
      "From Gir embryos to genome mapping, Leads Agri Genetics is reshaping India’s agri-genomics future.",
    url: "https://www.indianweb2.com/2025/09/leads-agri-genetics-launches-indias-1st.html",
  },
  {
    title:
      "India, Brazil Seal Landmark Animal Genomics Partnership to Transform Global Dairy Future: A Strategic South-South Alliance for Global Food Security",
    date: "Dec 11 2025",
    image: require("../assets/news/news2.jpeg"),
    tag: "Research",
    description:
      "A historic India-Brazil alliance leveraging advanced animal genomics to revolutionize dairy production and safeguard global food security.",
    url: "https://www.business-standard.com/content/press-releases-ani/india-brazil-seal-landmark-animal-genomics-partnership-to-transform-global-dairy-future-a-strategic-south-south-alliance-for-global-food-security-125121101095_1.html",
  },
  {
    title:
      "Leads Agri Genetics initiative is a giant leap in advancing India’s agricultural biotechnology and livestock genomics capabilities.",
    date: "29 Sep, 2025",
    image: require("../assets/news/news1.jpeg"),
    tag: "News Article",
    description:
      "Transforming India’s agri-tech landscape with end-to-end genomic innovations for superior livestock and crop development.",
    url: "https://agrospectrumindia.com/news/62/32657/leads-agri-genetics-launches-indias-first-privately-owned-integrated-centre-of-excellence-for-cattle-and-plant-genomics.html",
  },

    {
    title:
      "India’s first IVF in 116 cows from Gir embryo by BL Agro subsidiary shows 65% success",
    date: "19 March, 2026",
    image: require("../assets/news/news1.jpeg"),
    tag: "News Article",
    description:
      "Leads Genetics plans to perform embryo transfers in a total of 700 cows by the end of March",
    url: "https://www.thehindubusinessline.com/economy/agri-business/indias-first-ivf-in-116-cows-from-gir-embryo-by-bl-agro-subsidiary-shows-65-success/article70761089.ece",
  },

    {
    title:
      "Baroda to Brazil and back Leads Genetics claims 60 pc success in Gir cattle embryo transfers",
    date: "March 19, 2026",
    image: require("../assets/news/news1.jpeg"),
    tag: "News Article",
    description:
      "Elite Brazilian Gir cattle genetics back to India",
    url: "https://www.theweek.in/wire-updates/business/2026/03/19/baroda-to-brazil-and-back-leads-genetics-claims-60-pc-success-in-gir-cattle-embryo-transfers.html",
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

  /* ================= RESET INDEX ================= */
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
    if (newsData.length <= visibleCards) {
      return undefined;
    }

    const interval = setInterval(() => {
      const maxIndex = Math.max(newsData.length - visibleCards, 0);

      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }

        return prev + 1;
      });
    }, 4500);

    return () => {
      clearInterval(interval);
    };
  }, [visibleCards]);

  /* ================= CARD / ARROW CLICK ================= */
  const goToUrl = (url) => {
    if (!url) return;

    const isExternal = /^https?:\/\//i.test(url);

    if (isExternal) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  };

  const handleCardClick = (url) => (e) => {
    // Prevent double navigation if arrow is clicked
    if (e.target.closest(".news-arrow")) return;

    goToUrl(url);
  };

  const handleArrowClick = (url) => (e) => {
    e.preventDefault();
    e.stopPropagation();

    goToUrl(url);
  };

  const handleCardKeyDown = (url) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goToUrl(url);
    }
  };

  const slidePercentage = 100 / visibleCards;

  const totalSlides = Math.max(
    newsData.length - visibleCards + 1,
    1
  );

  return (
    <section className="news-events-section">
      <Container>
        {/* ================= HEADER ================= */}
        <div className="news-header">
          <div className="news-heading-wrapper">
            <span className="news-eyebrow">LATEST UPDATES</span>

            <h2 className="news-title section-heading">
              Insights from Leads Genetics
            </h2>

            <p className="news-subtitle">
              Stay updated with our latest discoveries, innovations,
              research highlights, and genomics breakthroughs.
            </p>
          </div>

          <div className="news-header-actions">
            {/* ALL NEWS BUTTON CAN BE ADDED HERE */}
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="news-divider"></div>

        {/* ================= SLIDER ================= */}
        <div className="news-slider-wrapper">
          {/* LEFT ARROW */}
          <button
            type="button"
            className="news-slider-arrow news-slider-arrow-left"
            onClick={prevSlide}
            aria-label="Previous news"
          >
            <ArrowLeft size={17} strokeWidth={1.8} />
          </button>

          <div className="news-slider">
            <div
              className="news-slider-track"
              style={{
                transform: `translateX(-${
                  currentIndex * slidePercentage
                }%)`,
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
                  <article
                    className="news-card"
                    role="link"
                    tabIndex={0}
                    onClick={handleCardClick(item.url)}
                    onKeyDown={handleCardKeyDown(item.url)}
                  >
                    {/* IMAGE */}
                    <div className="news-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="news-image"
                      />

                      <span className="news-tag">
                        {item.tag}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="news-content">
                      <h3>{item.title}</h3>

                      <p className="news-description">
                        {item.description}
                      </p>

                      {/* FOOTER */}
                      <div className="news-footer">
                        <span className="news-date">
                          {item.date}
                        </span>

                        <a
                          href={item.url}
                          className="news-arrow"
                          aria-label={`Read more about ${item.title}`}
                          onClick={handleArrowClick(item.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ArrowRight
                            size={17}
                            strokeWidth={1.8}
                          />
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            className="news-slider-arrow news-slider-arrow-right"
            onClick={nextSlide}
            aria-label="Next news"
          >
            <ArrowRight size={17} strokeWidth={1.8} />
          </button>
        </div>

        {/* ================= SLIDER INDICATOR ================= */}
        <div className="news-slider-bottom">
          <div className="news-progress">
            <span
              style={{
                width: `${
                  ((currentIndex + 1) / totalSlides) * 100
                }%`,
              }}
            ></span>
          </div>

          <div className="news-slide-count">
            <span>
              {String(currentIndex + 1).padStart(2, "0")}
            </span>

            <small>/</small>

            <span>
              {String(totalSlides).padStart(2, "0")}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsEvents;