import React from "react";
import "./Credentials.css";

const CREDENTIALS = [
  {
    name: "ISO 9001:2015",
    sub: "Global Standards",
  },
  {
    name: "DPIIT",
    sub: "Startupindia",
  },
  {
    name: "MSME",
    sub: "Ministry of Micro, Small &  Medium Enterprice",
  },
];

export default function Credentials() {
  return (
    <section className="section-sm credentials-section" id="credentials">
      <div className="container-max">
        <span className="credentials-label">Trust &amp; Accreditation</span>

        <h2 className="credentials-title">
          Accredited. Trusted. <strong>Science-Grade.</strong>
        </h2>

        <p className="credentials-subtitle">
          Our credentials and research partnerships reflect our commitment to
          quality and rigour.
        </p>
      </div>

      {/* Static Certifications */}
      <div
        className="credentials-marquee-wrap"
        aria-label="Partner and accreditation logos"
      >
        <div className="credentials-marquee">
          {CREDENTIALS.map((item, i) => (
            <div key={`${item.name}-${i}`} className="credentials-badge">
              <div className="credentials-badge__dot" />

              <div>
                <div className="credentials-badge__name">
                  {item.name}
                </div>

                <div className="credentials-badge__sub">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
}