import React from "react";
import "./OurHistory.css";

const MILESTONES = [
  {
    gen: "G1",
    year: "2008",
    title: "Lab Established",
    detail: "First reproductive lab established in Parsakhera, Bareilly.",
  },
  {
    gen: "G2",
    year: "2012",
    title: "IVF Program Launched",
    detail: "IVF services introduced for high-value cattle breeding.",
  },
  {
    gen: "G3",
    year: "2015",
    title: "MOET Scaled",
    detail: "Embryo transfer scaled into a structured breeding program.",
  },
  {
    gen: "G4",
    year: "2018",
    title: "Genomic Selection",
    detail: "Genomic panels introduced to improve breeding decisions.",
  },
  {
    gen: "G5",
    year: "2021",
    title: "Clinical Genomics",
    detail: "Expanded into oncology, rare disease and pharmacogenomics.",
  },
  {
    gen: "G6",
    year: "2024",
    title: "National Network",
    detail: "Supporting breeders and clinics across India.",
  },
];

export default function OurHistory() {
  return (
    <div className="lg-history-viewport">
      <section className="lg-history" aria-labelledby="lg-history-heading">
        <div className="lg-history-inner">

          {/* Header */}
          <header className="lg-history-header">
            <span className="lg-history-eyebrow">Our History</span>

            <h2
              id="lg-history-heading"
              className="lg-history-heading"
            >
              Every generation, selected on purpose
            </h2>

            <p className="lg-history-lede">
              From a single reproductive lab to a national genomics network —
              traced the way we trace a pedigree: one generation at a time.
            </p>
          </header>

          {/* Horizontal Timeline */}
          <div className="lg-history-timeline-wrapper">
            <ol className="lg-history-timeline">
              {MILESTONES.map((m, i) => (
                <li
                  className={`lg-history-item ${
                    i % 2 === 0
                      ? "lg-history-item--top"
                      : "lg-history-item--bottom"
                  }`}
                  key={m.gen}
                >
                  {/* Card */}
                  <div className="lg-history-card">
                    <span className="lg-history-year">
                      {m.year}
                    </span>

                    <h3 className="lg-history-title">
                      {m.title}
                    </h3>

                    <p className="lg-history-detail">
                      {m.detail}
                    </p>
                  </div>

                  {/* Node */}
                  <div
                    className="lg-history-node"
                    aria-hidden="true"
                  >
                    <span className="lg-history-node-tag">
                      {m.gen}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>
    </div>
  );
}