import React, { useState } from "react";
import "./WhyMatter.css";

import agrImg from "../assets/agr-img.png";
import agrBanner from "../assets/agrbanner.png";
import embryo from "../assets/embroy1.jpeg";
import homeKam from "../assets/home_kam.png";
import reabanner from "../assets/reabanner.png"


const HEXES = [
  { id: 1, title: "Faster Genetic Gain", text: "Identify high-potential animals early and cut years off breeding cycles.", img: homeKam },
  { id: 2, title: "Precision Breeding", text: "Select sires and dams using genomic data instead of guesswork."},
  { id: 3, title: "Support Farmer Livelihoods", text: "Higher milk yield per animal means steadier, better income for farmers."},
  { id: 4, title: "Protect Indigenous Breeds", text: "Preserve the strengths of Gir, Sahiwal and other native cattle.", img: agrBanner },
  { id: 5, title: "Support Farmer Success", text: "On-ground guidance helps farmers act on every genomic report.", img: embryo },
  { id: 6, title: "Better Herd Health", text: "Spot disease resistance and fertility traits before they cost you."},
  { id: 7, title: "Lower Cost per Litre", text: "Healthier, more productive herds bring down the cost of every litre."},
  { id: 8, title: "Field-Ready Insights", text: "Simple reports built for dairy farms across India.", img: reabanner },
  { id: 9, title: "Built for Bharat", text: "Models trained for Indian conditions, breeds and herd sizes.", img: agrImg },
  { id: 10, title: "Climate-Resilient Herds", text: "Select for heat tolerance and adaptability to tropical conditions." },
];

export default function Matter() {
  const [activeHex, setActiveHex] = useState(null);

  return (
    <div className="matter">
      {/* Rounded hexagon shape (scales with the element) */}
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="hex-round" clipPathUnits="objectBoundingBox">
            <path d="M0.32,0 L0.68,0 Q0.75,0 0.785,0.07 L0.965,0.43 Q1,0.5 0.965,0.57 L0.785,0.93 Q0.75,1 0.68,1 L0.32,1 Q0.25,1 0.215,0.93 L0.035,0.57 Q0,0.5 0.035,0.43 L0.215,0.07 Q0.25,0 0.32,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ---------- Why it matters ---------- */}
      <section className="matter-why">
        <h2 className="section-heading">Why It Matters for Indian Dairy Farming</h2>
        <p className="page-text matter-sub">
          Better genetics means healthier herds, higher milk yield and stronger
          farmer incomes across India.
        </p>

        <div className="hex-wrap">
          <div className="hex-grid">
            {HEXES.map((h) => (
              <button
                key={h.id}
                type="button"
                className={`hex hex-${h.id} ${h.img ? "hex-has-img" : ""} ${
                  activeHex === h.id ? "is-active" : ""
                }`}
                onMouseEnter={() => setActiveHex(h.id)}
                onMouseLeave={() => setActiveHex(null)}
                onFocus={() => setActiveHex(h.id)}
                onBlur={() => setActiveHex(null)}
                onClick={() => setActiveHex(activeHex === h.id ? null : h.id)}
                aria-expanded={activeHex === h.id}
              >
                {h.img && <img className="hex-img" src={h.img} alt="" loading="lazy" />}
                <span className="hex-inner">
                  <span className="page-text hex-title">{h.title}</span>
                  <span className="page-text hex-text">{h.text}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quote banner ---------- */}
      <section className="matter-quote">
        <div className="quote-inner">
          <h3 className="section-subheading quote-text">
            "Bringing world-class genomic science to Indian farmers, to conserve
            and improve indigenous cattle breeds - without compromising their
            genetic diversity - and to help transform the economics of Indian
            dairy farming, one genome at a time."
          </h3>
        </div>
      </section>
    </div>
  );
}