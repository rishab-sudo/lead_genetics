import React from "react";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <div className="contact-banner-overlay">
        <div className="contact-banner-content">
          <h1>Contact Us</h1>
          <p>We're here to answer your questions and help you with your genomic needs.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;