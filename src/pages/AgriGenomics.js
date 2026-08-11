import React from "react";
import "./AgriGenomics.css";

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
    link: "View Analysis Samples",
  },
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
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80",
  },
];

const RESOURCES = [
  {
    id: "ivf-protocol",
    title: "IVF Protocol Guide",
    sub: "Step-by-step lab reference, 2024 edition",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2h6M10 2v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3.5L14 8V2" />
        <path d="M7.5 15h9" />
      </svg>
    ),
  },
  {
    id: "moet-integration",
    title: "MOET Integration",
    sub: "Fitting embryo transfer into your calendar",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M9.6 10.4 6.6 7.4M14.4 10.4l3-3M9.6 13.6l-3 3M14.4 13.6l3 3" />
      </svg>
    ),
  },
  {
    id: "genomic-efficiency",
    title: "Genomic Efficiency",
    sub: "Benchmarks across breeding programs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V9M11 19V4M18 19v-7" />
        <path d="M3 19h18" />
      </svg>
    ),
  },
  {
    id: "bovine-journal",
    title: "Bovine Genetics Journal",
    sub: "Quarterly research digest, Q1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17Z" />
        <path d="M8 7h8M8 11h8" />
      </svg>
    ),
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

const AgriGenomics = () => {
  return (
    <>
      {/* Hero */}
      <section className="agh-section-fluid">
        <div className="container-fluid agh-container">
          <div className="agh-content">
            <span className="agh-eyebrow">Precision Cattle Genetics</span>
            <h1 className="agh-heading">Agri Genomics: Transforming Bovine Genetics</h1>
            <p className="agh-subheading">
              Lab-grade IVF, MOET, and genomic selection working together to
              raise the genetic ceiling of every herd we work with.
            </p>
            <div className="agh-actions">
              <button type="button" className="agh-btn-primary">Get Started</button>
              <button type="button" className="agh-btn-secondary">View Research Paper</button>
            </div>
            <div className="agh-stats">
              <div className="agh-stat">
                <span className="agh-stat-num">500+</span>
                <span className="agh-stat-label">Successful Transfers</span>
              </div>
              <div className="agh-stat">
                <span className="agh-stat-num">99.6%</span>
                <span className="agh-stat-label">Genetic Accuracy</span>
              </div>
            </div>
          </div>

          <div className="agh-media">
            {/* <img
              src="508483-a7212febe31a?auto=format&fit=crop&w=900&q=80"
              alt="Holstein cow in a pasture"
            /> */}
            <span className="agh-media-badge">Certified Genomic Data</span>
          </div>
        </div>
      </section>

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

          <div className="pgs-pipeline">
            <div className="pgs-rail" aria-hidden="true">
              {PIPELINE.map((stage) => (
                <div key={stage.id} className="pgs-rail-stop">
                  <span className="pgs-rail-num">{stage.step}</span>
                </div>
              ))}
            </div>

            <div className="pgs-grid">
              {PIPELINE.map((stage) => (
                <div key={stage.id} className="pgs-row">
                  <div className="pgs-art-wrap">
                    {renderArt(stage.art)}
                  </div>

                  <div className="pgs-content">
                    <span className="pgs-eyebrow">{stage.eyebrow}</span>
                    <h3 className="pgs-title">{stage.title}</h3>
                    <p className="pgs-copy">{stage.copy}</p>

                    {stage.features && (
                      <ul className="pgs-feature-list">
                        {stage.features.map((feature) => (
                          <li key={feature}>{feature}</li>
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
                </div>
              ))}
            </div>
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

      {/* Scientific Resources */}
      <section className="scr-section-fluid">
        <div className="container-fluid scr-container">
          <div className="scr-headrow">
            <h2 className="scr-heading">Scientific Resources</h2>
            <a href="#all-resources" className="scr-browse-link">Browse All Resources</a>
          </div>

          <div className="scr-grid">
            {RESOURCES.map((resource) => (
              <div key={resource.id} className="scr-card">
                <div className="scr-icon">{resource.icon}</div>
                <h4 className="scr-card-title">{resource.title}</h4>
                <p className="scr-card-sub">{resource.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="agc-section-fluid">
        <div className="container-fluid agc-container">
          <div className="agc-content">
            <h2 className="agc-heading">Ready to Elevate Your Herd Genetics?</h2>
            <p className="agc-copy">
              Join the hundreds of forward-thinking farms benefiting from our
              genomic services. Our team is ready to help you build a more
              productive, resilient herd.
            </p>
            <ul className="agc-points">
              <li>No obligation genetic audit</li>
              <li>Customized implementation strategy</li>
              <li>Ongoing technical support</li>
            </ul>
          </div>

          <form className="agc-form" onSubmit={(e) => e.preventDefault()}>
            <div className="agc-field">
              <label htmlFor="agc-email">Professional Email</label>
              <input id="agc-email" type="email" placeholder="you@yourfarm.com" />
            </div>
            <div className="agc-field">
              <label htmlFor="agc-help">How can we help?</label>
              <select id="agc-help" defaultValue="">
                <option value="" disabled>Select an area of interest</option>
                <option value="ivf">IVF Services</option>
                <option value="moet">MOET Program</option>
                <option value="genomics">Genomic Selection</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <button type="submit" className="agc-submit-btn">Submit Inquiry</button>
          </form>
        </div>
      </section>

      
    </>
  );
};

export default AgriGenomics;