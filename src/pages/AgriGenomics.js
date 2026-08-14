import React, { useEffect, useState } from "react";
import "./AgriGenomics.css";
import AgriGenoBan from "../components/AgriGenoBan";


const AGR_SERVICES = [
  {
    id: "crop-genomics",
    icon: "🌾",
    title: "Crop Genomics",
    desc: "Whole genome sequencing and trait mapping for crop improvement, disease resistance, and yield optimisation.",
    tagline: "Sequence once, breed with certainty.",
    detail:
      "We run whole-genome and targeted resequencing across breeding populations, then map traits back to markers your team can act on immediately — no black-box scores, just usable loci.",
    stat: {
      label: "Turnaround",
      text: "Full trait-mapping reports delivered in 10–14 days from sample receipt, backed by a QC pipeline that flags low-coverage regions before they reach your report.",
    },
    checklist: ["Whole-genome & targeted resequencing", "Trait-marker association mapping", "Disease-resistance & yield panels"],
  },
  {
    id: "livestock-dna",
    icon: "🐄",
    title: "Livestock DNA Profiling",
    desc: "Parentage verification, breed identification, genetic diversity assessment, and performance trait analysis.",
    tagline: "Every pedigree, verified at the base pair.",
    detail:
      "Parentage, breed composition, and genetic diversity are confirmed against reference panels built from your own herd history, so results reflect your population — not a generic database.",
    stat: {
      label: "Panel Size",
      text: "Profiles run against a 50K-plus SNP panel per animal, giving parentage calls confidence levels above 99.9% in typical herds.",
    },
    checklist: ["Parentage verification", "Breed composition analysis", "Genetic diversity & inbreeding tracking"],
  },
  {
    id: "seed-verification",
    icon: "🌱",
    title: "Seed Verification",
    desc: "Genotypic identity verification and purity testing for seed lots using molecular markers.",
    tagline: "Purity you can put a number on.",
    detail:
      "Molecular marker panels confirm genotypic identity and lot purity before seed ever reaches the field, catching mislabeling and off-type contamination early.",
    stat: {
      label: "Detection Threshold",
      text: "Off-type contamination is reliably detected down to 1% of a seed lot using our standard marker panel.",
    },
    checklist: ["Genotypic identity confirmation", "Lot purity testing", "Off-type contamination screening"],
  },
  {
    id: "soil-metagenomics",
    icon: "🌍",
    title: "Soil Metagenomics",
    desc: "Characterisation of soil microbial communities to understand nutrient cycling and plant health.",
    tagline: "Read the soil like a genome.",
    detail:
      "Shotgun and amplicon sequencing of soil samples reveal the microbial communities driving nutrient cycling, so fertility programs are built on what's actually living in the field.",
    stat: {
      label: "Coverage",
      text: "Each sample profiles bacterial, fungal, and archaeal communities down to genus level across up to 12 fields per submission batch.",
    },
    checklist: ["16S/ITS amplicon sequencing", "Nutrient-cycling pathway mapping", "Field-by-field microbial benchmarking"],
  },
  {
    id: "pathogen-detection",
    icon: "🧬",
    title: "Plant Pathogen Detection",
    desc: "Rapid identification of fungal, bacterial, and viral plant pathogens using targeted sequencing.",
    tagline: "Identify the pathogen before it spreads.",
    detail:
      "Targeted sequencing panels flag fungal, bacterial, and viral pathogens directly from field samples, often days before visible symptoms would prompt a lab submission.",
    stat: {
      label: "Response Time",
      text: "Preliminary pathogen ID typically returns within 48 hours of sample receipt, with full confirmatory results by day five.",
    },
    checklist: ["Multi-pathogen targeted panels", "Fungal, bacterial & viral coverage", "Early, pre-symptomatic detection"],
  },
  {
    id: "marker-selection",
    icon: "📊",
    title: "Marker-Assisted Selection",
    desc: "Genomic selection pipelines integrating SNP arrays and whole-genome data for breeding programs.",
    tagline: "Breed forward, not backward.",
    detail:
      "SNP array data and whole-genome information feed directly into genomic selection pipelines, so every cross is chosen with predicted breeding values in hand.",
    stat: {
      label: "Prediction Accuracy",
      text: "Genomic selection models are validated against realized outcomes each season, typically explaining 60%+ of variance in target traits.",
    },
    checklist: ["SNP array integration", "Genomic breeding value prediction", "Season-over-season model validation"],
  },
];

const PIPELINE = [
  {
    id: "ivf",
    step: "01",
    eyebrow: "Stage One",
    title: "Advanced In-Vitro Fertilization (IVF) for Cattle",
    copy:
      "We pair elite donor oocytes with proven sires under lab-controlled conditions, taking each embryo from fertilization through the 2-cell and 4-cell stages before transfer. Every embryo is graded for viability and genetic merit before it ever reaches a recipient cow.",
    art: "embryo",
    features: ["Embryo Biopsy", "Genetic Screening", "Donor Selection", "Cryopreservation"],
  },
  {
    id: "moet",
    step: "02",
    eyebrow: "Stage Two",
    title: "MOET (Multiple Ovulation and Embryo Transfer) Services",
    copy:
      "Our MOET program hormonally synchronizes donor cows to multiply the number of viable embryos per cycle, then transfers them into carefully matched recipients. It's how we multiply genetics from a single elite female far beyond what natural breeding allows.",
    art: "cattle",
    callout: {
      label: "Efficiency Impact",
      text: "MOET protocols can increase the number of offspring from a single elite donor by up to eightfold compared with standard breeding.",
    },
  },
  {
    id: "genomics",
    step: "03",
    eyebrow: "Stage Three",
    title: "High-Resolution Genomic Selection",
    copy:
      "Before an embryo is ever implanted, its genomic profile is screened against markers for milk yield, fertility, disease resistance, and structural soundness — so every decision downstream is backed by data, not guesswork.",
    art: "dna",
    features: ["Predictive Analytics", "Genomic Mapping"],
  },
];

const PGS_STATS = [
  { num: "10K+", label: "Embryos Produced" },
  { num: "500+", label: "Partner Farms" },
  { num: "120+", label: "Genomic Markers Tracked" },
  { num: "25+", label: "Countries Served" },
];

const CASE_STUDIES = [
  {
    id: "herd-402",
    tag: "Herd Management",
    title: "Herd Optimization Case Study #402",
    excerpt:
      "A 340-head dairy operation raised its genomic merit average by pairing targeted MOET cycles with predictive breeding value screening over two calving seasons.",
    author: "Dr. Sarah Miller",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bull-k7",
    tag: "Progeny Testing",
    title: "Progeny Performance: Bull K7-03e",
    excerpt:
      "Tracking three generations of offspring shows how early genomic predictions for K7-03e held up against realized milk yield and fertility outcomes.",
    author: "Dr. James Chen",
    image:
      "https://images.unsplash.com/photo-1611171711912-ce5b3b17e5e8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mastitis-focus",
    tag: "Disease Resistance",
    title: "Disease Resistance Mapping: Mastitis Focus",
    excerpt:
      "Genomic markers linked to udder health were validated across four partner herds, giving producers an early signal for mastitis susceptibility.",
    author: "Dr. Elena Rodriguez",
    image:
      "https://terranutritech.com/2020/04/06/top-10-tips-for-dairy-cow-breeding",
  },
];

const renderArt = (art) => {
  if (art === "embryo") {
    return (
      <svg className="pgs-art-svg" viewBox="0 0 200 200" role="img" aria-label="Two-cell and four-cell embryo stages">
        <circle className="pgs-art-ring" cx="100" cy="100" r="88" />
        <g className="pgs-art-embryo" transform="translate(60,100)">
          <circle className="pgs-cell" cx="-13" cy="0" r="17" />
          <circle className="pgs-cell" cx="13" cy="0" r="17" />
        </g>
        <g className="pgs-art-embryo" transform="translate(140,100)">
          <circle className="pgs-cell pgs-cell-alt" cx="-9" cy="-9" r="11" />
          <circle className="pgs-cell pgs-cell-alt" cx="9" cy="-9" r="11" />
          <circle className="pgs-cell pgs-cell-alt" cx="-9" cy="9" r="11" />
          <circle className="pgs-cell pgs-cell-alt" cx="9" cy="9" r="11" />
        </g>
        <path className="pgs-art-arrow" d="M92,100 L118,100" markerEnd="url(#pgs-arrowhead)" />
        <defs>
          <marker id="pgs-arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" className="pgs-arrowhead-fill" />
          </marker>
        </defs>
        <text x="60" y="150" className="pgs-art-label">2-cell</text>
        <text x="140" y="150" className="pgs-art-label">4-cell</text>
      </svg>
    );
  }

  if (art === "cattle") {
    return (
      <svg className="pgs-art-svg" viewBox="0 0 200 200" role="img" aria-label="Dairy cow in a pasture pen">
        <circle className="pgs-art-ring" cx="100" cy="100" r="88" />
        <path className="pgs-art-ground" d="M20,140 H180" />
        <g className="pgs-cattle-body">
          <ellipse cx="105" cy="115" rx="46" ry="26" />
          <circle cx="60" cy="100" r="20" />
          <path className="pgs-cattle-legs" d="M78,136 v18 M96,138 v18 M118,138 v18 M136,134 v18" />
          <path className="pgs-cattle-ear" d="M48,90 l-10,-6 M72,90 l8,-8" />
          <circle className="pgs-cattle-spot" cx="118" cy="106" r="9" />
          <circle className="pgs-cattle-spot" cx="90" cy="126" r="6" />
        </g>
        <path className="pgs-art-fence" d="M24,140 V118 M40,140 V112 M24,124 H40 M24,134 H40" />
        <path className="pgs-art-fence" d="M160,140 V118 M176,140 V112 M160,124 H176 M160,134 H176" />
      </svg>
    );
  }

  return (
    <svg className="pgs-art-svg" viewBox="0 0 200 200" role="img" aria-label="DNA double helix with genomic markers">
      <circle className="pgs-art-ring" cx="100" cy="100" r="88" />
      <g className="pgs-dna" transform="translate(100,100)">
        <path className="pgs-dna-strand" d="M-24,-70 C22,-42 22,-14 -24,14 C22,42 22,70 -24,98" transform="translate(0,-49)" />
        <path className="pgs-dna-strand" d="M24,-70 C-22,-42 -22,-14 24,14 C-22,42 -22,70 24,98" transform="translate(0,-49)" />
        <path className="pgs-dna-rung" d="M-19,-55 L19,-55 M-24,-33 L24,-33 M-24,-5 L24,-5 M-24,23 L24,23 M-19,45 L19,45" />
        <circle className="pgs-dna-marker" cx="-19" cy="-55" r="3" />
        <circle className="pgs-dna-marker" cx="24" cy="-5" r="3" />
        <circle className="pgs-dna-marker" cx="-24" cy="23" r="3" />
      </g>
    </svg>
  );
};

const initials = (name) =>
  name
    .replace("Dr. ", "")
    .split(" ")
    .map((part) => part[0])
    .join("");

/* Bento column-span pattern for the 6 service cards, on a 6-col track:
   row1 wide/narrow, row2 narrow/wide, row3 even/even — mirrors the
   reference layout while staying data-driven off AGR_SERVICES. */
const AGB_SPANS = [4, 2, 2, 4, 3, 3];

const AgriGenomics = () => {
  const [activeService, setActiveService] = useState(null);

  // Escape key closes the open card's detail modal.
  useEffect(() => {
    if (!activeService) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveService(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeService]);

  return (
    <>
    <AgriGenoBan/>

      {/* Precision Biotech Services */}
      <section className="pgs-section-fluid">
        <div className="pgs-bg-pattern" aria-hidden="true" />

        <div className="container-fluid pgs-container">
          <header className="pgs-header">
            <h2 className="pgs-heading">Precision Biotech Services</h2>
            <p className="pgs-subheading">
              From fertilization to final selection, every stage is engineered
              for genetic progress.
            </p>
          </header>

          <div className="pgs-grid">
            {PIPELINE.map((stage) => (
              <div key={stage.id} className="pgs-card">
                <div className="pgs-card-head">
                  <div className="pgs-card-icon">{renderArt(stage.art)}</div>
                  <span className="pgs-eyebrow">{stage.eyebrow}</span>
                </div>

                <h3 className="pgs-card-title">{stage.title}</h3>
                <p className="pgs-card-copy">{stage.copy}</p>

                {stage.features && (
                  <ul className="pgs-feature-list">
                    {stage.features.map((feature) => (
                      <li key={feature}>
                        <span className="pgs-feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {stage.callout && (
                  <div className="pgs-callout">
                    <div>
                      <span className="pgs-callout-label">{stage.callout.label}</span>
                      <p>{stage.callout.text}</p>
                    </div>
                  </div>
                )}

                {stage.link && (
                  <a href="#genomic-samples" className="pgs-link">{stage.link} →</a>
                )}
              </div>
            ))}
          </div>

          <div className="pgs-stats">
            {PGS_STATS.map((s) => (
              <div key={s.label} className="pgs-stat-box">
                <span className="pgs-stat-num">{s.num}</span>
                <span className="pgs-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Case Studies */}
      <section className="ccs-section-fluid">
        <div className="container-fluid ccs-container">
          <header className="ccs-header">
            <h2 className="ccs-heading">Clinical Case Studies</h2>
            <p className="ccs-subheading">
              Documented results from our genetic implementations at leading
              dairy operations worldwide.
            </p>
          </header>

          <div className="ccs-grid">
            {CASE_STUDIES.map((study) => (
              <article key={study.id} className="ccs-card">
                <div className="ccs-media">
                  <img src={study.image} alt={study.title} />
                </div>
                <div className="ccs-body">
                  <span className="ccs-tag">{study.tag}</span>
                  <h3 className="ccs-title">{study.title}</h3>
                  <p className="ccs-excerpt">{study.excerpt}</p>
                  <div className="ccs-author">
                    <span className="ccs-author-avatar">{initials(study.author)}</span>
                    <span className="ccs-author-name">{study.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="ccs-more">
            <button type="button" className="ccs-more-btn">Load More Case Studies</button>
          </div>
        </div>
      </section>

      {/* Agricultural Genomics Services — bento cards, click to expand */}
      <section className="section detail-section">
        <div className="container-max">
          <div className="detail-header">
            <span className="detail-header__label">Services</span>
            <h2 className="detail-header__title">
              Agricultural <strong>Genomics Services</strong>
            </h2>
            <p className="detail-header__sub">Six labs, one submission form. Open any card to go deeper.</p>
          </div>

          <div className="agb-grid">
            {AGR_SERVICES.map((item, i) => (
              <button
                type="button"
                key={item.id}
                className="agb-card"
                style={{ gridColumn: `span ${AGB_SPANS[i] || 3}` }}
                onClick={() => setActiveService(item)}
              >
                <div className="agb-card-top">
                  <span className="agb-card-icon">{item.icon}</span>
                  <span className="agb-expand" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 3H3v6M15 3h6v6M15 21h6v-6M9 21H3v-6" />
                    </svg>
                  </span>
                </div>
                <h3 className="agb-card-title">{item.title}</h3>
                <p className="agb-card-desc">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Detail modal for the active service */}
        {activeService && (
          <div
            className="agb-modal-backdrop"
            onClick={() => setActiveService(null)}
          >
            <div
              className="agb-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="agb-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="agb-modal-headrow">
                <span className="agb-card-icon agb-modal-icon">{activeService.icon}</span>
                <button
                  type="button"
                  className="agb-modal-close"
                  onClick={() => setActiveService(null)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <h3 id="agb-modal-title" className="agb-modal-title">{activeService.title}</h3>
              <p className="agb-modal-tagline">{activeService.tagline}</p>
              <p className="agb-modal-detail">{activeService.detail}</p>

              {activeService.stat && (
                <div className="agb-stat-pill">
                  <span className="agb-stat-label">{activeService.stat.label}</span>
                  <p>{activeService.stat.text}</p>
                </div>
              )}

              {activeService.checklist && (
                <ul className="agb-checklist">
                  {activeService.checklist.map((point) => (
                    <li key={point}>
                      <span className="agb-check-icon">✓</span> {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </section>

      
    </>
  );
};

export default AgriGenomics;