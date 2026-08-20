import React from "react";
import "./Credentials.css";

// Certificate Logos
import isoLogo from "../assets/lead-cert3.jpeg";
import dpiitLogo from "../assets/lead-cert1.png";
import msmeLogo from "../assets/lead-cert2.png";

// Certificate PDFs 
import isoCertificate from "../assets/pdf/leads-iso.pdf";
import dpiitCertificate from "../assets/pdf/lead-Startup.pdf";
import msmeCertificate from "../assets/pdf/Leads-Udyam.pdf";

const CREDENTIALS = [
  {
    name: "ISO 9001:2015",
    sub: "Global Standards",
    logo: isoLogo,
    pdf: isoCertificate,
  },
  {
    name: "DPIIT",
    sub: "Startup India",
    logo: dpiitLogo,
    pdf: dpiitCertificate,
  },
  {
    name: "MSME",
    sub: "Ministry of Micro, Small & Medium Enterprise",
    logo: msmeLogo,
    pdf: msmeCertificate,
  },
];

export default function Credentials() {
  const openCertificate = (pdf) => {
    // Opens PDF in browser PDF viewer.
    // It does not trigger a download.
    window.open(pdf, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section-sm credentials-section" id="credentials">
      <div className="container-max">
        <span className="credentials-label">
          Trust &amp; Accreditation
        </span>

        <h2 className="credentials-title section-heading">
          Standards That Strengthen <strong>Scientific Trust </strong>
        </h2>

        <p className="credentials-subtitle">
          Our credentials and research partnerships reflect our commitment to
          quality and rigour.
        </p>
      </div>

      {/* Certifications */}
      <div
        className="credentials-marquee-wrap"
        aria-label="Partner and accreditation certificates"
      >
        <div className="credentials-marquee">
          {CREDENTIALS.map((item, i) => (
            <button
              type="button"
              key={`${item.name}-${i}`}
              className="credentials-badge"
              onClick={() => openCertificate(item.pdf)}
              aria-label={`View ${item.name} certificate`}
            >
              {/* Certificate Logo */}
              <div className="credentials-badge__logo">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                />
              </div>

              {/* Certificate Information */}
              <div className="credentials-badge__content">
                <div className="credentials-badge__name">
                  {item.name}
                </div>

                <div className="credentials-badge__sub">
                  {item.sub}
                </div>

                <span className="credentials-badge__view">
                  View Certificate →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}