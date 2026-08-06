import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CalendarDays, ArrowRight } from "lucide-react";
import "./NewsEvents.css";

const newsData = [
  {
    title: "Meet our people: Kati Hewitt",
    date: "17 December 2025",
    image: "/assets/news/news1.jpg",
    tag: "Profile",
  },
  {
    title: "How Dr Renyu Zhang is reinventing protein",
    date: "17 December 2025",
    image: "/assets/news/news2.jpg",
    tag: "News Article",
  },
  {
    title: "Big data and AI turbocharge weed risk research",
    date: "09 December 2025",
    image: "/assets/news/news3.jpg",
    tag: "Research",
  },
  {
    title: "Seed bank grows with climate-resilient species",
    date: "04 December 2025",
    image: "/assets/news/news4.jpg",
    tag: "News Article",
  },
];

const NewsEvents = () => {
  return (
    <section className="news-events-section">
      <Container>
        <div className="news-header">
          <div>
            <h2 className="news-title">
              Latest <span>News</span>
            </h2>
            <p className="news-subtitle">
              Stay updated with our latest discoveries, innovations, research
              highlights, and genomics breakthroughs.
            </p>
          </div>

          <a href="#news" className="news-view-btn">
            News
          </a>
        </div>

        <div className="news-divider"></div>

        <Row className="g-4">
          {newsData.map((item, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="news-card">
                <div className="news-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="news-image"
                  />
                  <span className="news-tag">{item.tag}</span>
                </div>

                <div className="news-content">
                  <h3>{item.title}</h3>

                  <div className="news-date">
                    <CalendarDays size={15} />
                    <span>{item.date}</span>
                  </div>

                  <a href="#read-more" className="news-arrow">
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsEvents;