import React from 'react'
import './About.css'
import AboutUsBanner from '../components/AboutUsBanner';

const STORIES = [
  {
    caseStudy: "Case Study 01",
    title: "Cancer Genome Project",
    description:
      "Identified actionable mutations that improved treatment outcomes for cancer patients.",
  },
  {
    caseStudy: "Case Study 02",
    title: "Rare Disease Diagnosis",
    description:
      "Enabled accurate diagnosis for rare genetic disorders using advanced sequencing.",
  },
  {
    caseStudy: "Case Study 03",
    title: "Population Genetics Initiative",
    description:
      "Large scale genetic data helping understand population diversity and evolution.",
  },
];

const FEATURES = [
  {
    title: "99.8% Accurate Reports",
    description: "Industry-leading accuracy in every report.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 8v4l2.5 2.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 3.5h6M4 6l1.6 1.6M20 6l-1.6 1.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Fast Turnaround",
    description: "Quick sample processing and reliable reports.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12.5" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 8v5l3.5 2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9.5 2h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Global Research Network",
    description: "Collaborations with top institutes worldwide.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4 12h16M12 4c2.5 2.2 2.5 13.8 0 16M12 4c-2.5 2.2-2.5 13.8 0 16"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "AI Powered Analysis",
    description: "Advanced AI models for deeper insights.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M18.5 5.5l-2 2M7.5 16.5l-2 2"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Certified Laboratory",
    description: "CLIA, CAP and ISO certified facilities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l7 3v5c0 5-3.2 8.4-7 10-3.8-1.6-7-5-7-10V6l7-3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const AboutUs = () => {

  return (
    <>
    <AboutUsBanner/>

    {/* success stories section */}
 <section className="ssr-section-fluid">
      <header className="ssr-header">
        <h2 className="ssr-heading">Success Stories</h2>
        <p className="ssr-subheading">
          Real-world impact through genomic innovation.
        </p>
      </header>
 
      <div className="ssr-grid">
        {STORIES.map((story) => (
          <article className="ssr-card" key={story.title}>
            <div className="ssr-card-pattern" aria-hidden="true" />
            <span className="ssr-case-study">{story.caseStudy}</span>
            <h3 className="ssr-card-title">{story.title}</h3>
            <p className="ssr-card-description">{story.description}</p>
            <button type="button" className="ssr-cta">
              <span>View Details</span>
              <svg
                className="ssr-cta-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </article>
        ))}
      </div>
    </section>

    {/* technology showcase section */}
   <section className="tss-section-fluid">
      <div className="tss-bg-pattern" aria-hidden="true" />
 
      <header className="tss-header">
        <h2 className="tss-heading">Technology Showcase</h2>
        <p className="tss-subheading">
          From raw sample to actionable insight, powered by industry-leading
          sequencing platforms.
        </p>
      </header>
 
      {/* Flowchart diagram: sample -> sequencing platforms -> data analytics */}
      <div className="tss-diagram-wrap">
        <svg
          className="tss-diagram"
          viewBox="0 0 1000 320"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Flowchart showing a biological sample being processed by Illumina, Oxford Nanopore, and PacBio sequencing platforms, converging into data analytics and insights."
        >
          <defs>
            <marker
              id="tss-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 Z" className="tss-arrowhead" />
            </marker>
          </defs>
 
          {/* connecting paths: sample -> platforms */}
          <path
            className="tss-edge tss-edge-1"
            d="M132,160 C220,160 240,60 360,60"
            markerEnd="url(#tss-arrow)"
          />
          <path
            className="tss-edge tss-edge-2"
            d="M132,160 C220,160 260,160 360,160"
            markerEnd="url(#tss-arrow)"
          />
          <path
            className="tss-edge tss-edge-3"
            d="M132,160 C220,160 240,260 360,260"
            markerEnd="url(#tss-arrow)"
          />
 
          {/* connecting paths: platforms -> analytics */}
          <path
            className="tss-edge tss-edge-1"
            d="M640,60 C740,60 760,160 828,160"
            markerEnd="url(#tss-arrow)"
          />
          <path
            className="tss-edge tss-edge-2"
            d="M640,160 C740,160 760,160 828,160"
            markerEnd="url(#tss-arrow)"
          />
          <path
            className="tss-edge tss-edge-3"
            d="M640,260 C740,260 760,160 828,160"
            markerEnd="url(#tss-arrow)"
          />
 
          {/* Sample node */}
          <g className="tss-node tss-node-sample">
            <circle cx="90" cy="160" r="42" />
            <path
              className="tss-icon-line"
              d="M76,132 C90,142 90,150 76,160 C90,170 90,178 76,188"
              fill="none"
            />
            <path
              className="tss-icon-line"
              d="M104,132 C90,142 90,150 104,160 C90,170 90,178 104,188"
              fill="none"
            />
            <path
              className="tss-icon-rung"
              d="M79,138 L101,138 M76,150 L104,150 M79,162 L101,162 M76,174 L104,174 M79,182 L101,182"
            />
            <circle cx="79" cy="138" r="1.6" className="tss-icon-dot" />
            <circle cx="101" cy="138" r="1.6" className="tss-icon-dot" />
            <circle cx="76" cy="150" r="1.6" className="tss-icon-dot" />
            <circle cx="104" cy="150" r="1.6" className="tss-icon-dot" />
            <circle cx="79" cy="162" r="1.6" className="tss-icon-dot" />
            <circle cx="101" cy="162" r="1.6" className="tss-icon-dot" />
          </g>
          <text x="90" y="222" className="tss-node-label">
            Biological Sample
          </text>
 
          {/* Platform: Illumina */}
          <g className="tss-node tss-node-platform">
            <rect x="360" y="20" width="280" height="80" rx="16" />
            <circle cx="398" cy="60" r="18" className="tss-icon-bg" />
            <circle cx="391" cy="53" r="2.1" className="tss-icon-dot" />
            <circle cx="398" cy="53" r="2.1" className="tss-icon-dot" />
            <circle cx="405" cy="53" r="2.1" className="tss-icon-dot" />
            <circle cx="391" cy="60" r="2.1" className="tss-icon-dot-accent" />
            <circle cx="398" cy="60" r="2.1" className="tss-icon-dot" />
            <circle cx="405" cy="60" r="2.1" className="tss-icon-dot" />
            <circle cx="391" cy="67" r="2.1" className="tss-icon-dot" />
            <circle cx="398" cy="67" r="2.1" className="tss-icon-dot-accent" />
            <circle cx="405" cy="67" r="2.1" className="tss-icon-dot" />
            <text x="428" y="55" className="tss-node-title">
              Illumina
            </text>
            <text x="428" y="74" className="tss-node-sub">
              Short-read, high-throughput sequencing
            </text>
          </g>
 
          {/* Platform: Oxford Nanopore */}
          <g className="tss-node tss-node-platform">
            <rect x="360" y="120" width="280" height="80" rx="16" />
            <circle cx="398" cy="160" r="18" className="tss-icon-bg" />
            <circle
              cx="398"
              cy="160"
              r="9"
              className="tss-icon-pore"
              fill="none"
            />
            <path
              className="tss-icon-line"
              d="M382,160 C387,152 391,168 396,160 C400,152 405,168 409,160 C412,155 413,157 415,160"
              fill="none"
            />
            <text x="428" y="155" className="tss-node-title">
              Oxford Nanopore
            </text>
            <text x="428" y="174" className="tss-node-sub">
              Long-read, real-time sequencing
            </text>
          </g>
 
          {/* Platform: PacBio */}
          <g className="tss-node tss-node-platform">
            <rect x="360" y="220" width="280" height="80" rx="16" />
            <circle cx="398" cy="260" r="18" className="tss-icon-bg" />
            <circle cx="398" cy="260" r="2.4" className="tss-icon-dot-accent" />
            <circle cx="398" cy="252" r="2" className="tss-icon-dot" />
            <circle cx="405" cy="256" r="2" className="tss-icon-dot" />
            <circle cx="405" cy="264" r="2" className="tss-icon-dot" />
            <circle cx="398" cy="268" r="2" className="tss-icon-dot" />
            <circle cx="391" cy="264" r="2" className="tss-icon-dot" />
            <circle cx="391" cy="256" r="2" className="tss-icon-dot" />
            <text x="428" y="255" className="tss-node-title">
              PacBio
            </text>
            <text x="428" y="274" className="tss-node-sub">
              HiFi long-read accuracy
            </text>
          </g>
 
          {/* Analytics node */}
          <g className="tss-node tss-node-analytics">
            <circle cx="880" cy="160" r="52" />
            <path
              className="tss-icon-bar"
              d="M858,182 v-20 M871,182 v-32 M884,182 v-14 M897,182 v-24"
            />
            <path
              className="tss-icon-line"
              d="M855,150 L868,138 L881,145 L903,120"
              fill="none"
            />
            <circle cx="903" cy="120" r="2.4" className="tss-icon-dot-accent" />
          </g>
          <text x="880" y="230" className="tss-node-label">
            Data Analytics &amp; Insights
          </text>
        </svg>
      </div>
 
      {/* Capability grid */}
      <div className="tss-capabilities">
        <div className="tss-capability">
          <span className="tss-cap-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M7 2c0 4 10 4 10 8s-10 4-10 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M17 2c0 4-10 4-10 8s10 4 10 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8.3 6h7.4M7 10h10M8.3 14h7.4M7 18h10"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </span>
          <h3>WGS</h3>
          <p>Whole genome sequencing for comprehensive variant discovery.</p>
        </div>
 
        <div className="tss-capability">
          <span className="tss-cap-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4.5 8c1.5-1.5 2.5 1.5 4 1.5S10 6.5 11.5 8s2.5 1.5 4 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="9"
                cy="9"
                r="5.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M13 13l6.5 6.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <h3>WES</h3>
          <p>Whole exome sequencing focused on protein-coding regions.</p>
        </div>
 
        <div className="tss-capability">
          <span className="tss-cap-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M3 14c3-5 6 5 9 0s6-5 9 0"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="9"
                y1="10.3"
                x2="9"
                y2="5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="9" cy="4" r="2" fill="currentColor" />
              <line
                x1="15"
                y1="10.3"
                x2="15"
                y2="7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="15" cy="6" r="1.4" fill="currentColor" opacity="0.55" />
            </svg>
          </span>
          <h3>Epigenetics</h3>
          <p>Mapping gene expression and regulatory modifications.</p>
        </div>
 
        <div className="tss-capability">
          <span className="tss-cap-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <rect
                x="2.6"
                y="9.4"
                width="18.8"
                height="7.2"
                rx="3.6"
                transform="rotate(-38 12 12)"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="9.1"
                y1="16.4"
                x2="14.9"
                y2="7.6"
                stroke="currentColor"
                strokeWidth="1.4"
                transform="rotate(-38 12 12)"
                opacity="0.7"
              />
              <path
                d="M6 15.5c0-1 .8-1.4 1.4-.9s1 .9 1.6.4"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                transform="rotate(-38 12 12)"
              />
            </svg>
          </span>
          <h3>Pharmacogenomics</h3>
          <p>Personalizing drug response using genomic markers.</p>
        </div>
      </div>
    </section>

    {/* infrastructure and capabilities showcase section */}
 <section className="ari-section-fluid">
      <div className="ari-bg-pattern" aria-hidden="true" />
 
      <header className="ari-header">
        <h2 className="ari-heading">Advanced Research Infrastructure</h2>
        <p className="ari-subheading">
          State-of-the-art technology powering genomic discoveries.
        </p>
      </header>
 
      <div className="ari-layout">
        {/* Left feature column */}
        <div className="ari-column ari-column-left">
          <div className="ari-card">
            <span className="ari-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="11"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6.5 19h11M12 16v3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 9l2.5 3L11 9l2 3 2.5-3.5L18 11"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3>High Throughput Sequencers</h3>
            <p>Latest NGS platforms for high accuracy.</p>
          </div>
 
          <div className="ari-card">
            <span className="ari-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="7"
                  y="7"
                  width="10"
                  height="10"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="12" r="2.2" fill="currentColor" />
                <path
                  d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M18.5 5.5l-2 2M7.5 16.5l-2 2"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <h3>AI Computing Cluster</h3>
            <p>High performance computing for AI analysis.</p>
          </div>
 
          <div className="ari-card">
            <span className="ari-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="7" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M7 8v4l6 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 14l4-2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="18" cy="10" r="1.8" fill="currentColor" />
                <rect
                  x="4.5"
                  y="15.5"
                  width="8"
                  height="5"
                  rx="1.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6.5 18h1.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <h3>Robotic Sample Processing</h3>
            <p>Automated systems for precision and speed.</p>
          </div>
        </div>
 
        {/* Center illustration */}
        <div className="ari-illustration-wrap">
          <svg
            className="ari-illustration"
            viewBox="0 0 1000 400"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Isometric illustration of a research lab equipment cluster on a raised platform."
          >
            {/* decorative DNA helix, top corner */}
            <g className="ari-helix" transform="translate(880,40)">
              <path
                className="ari-helix-line"
                d="M-14,-24 C0,-14 0,-6 -14,4 C0,14 0,22 -14,32"
                fill="none"
              />
              <path
                className="ari-helix-line"
                d="M14,-24 C0,-14 0,-6 14,4 C0,14 0,22 14,32"
                fill="none"
              />
              <path
                className="ari-helix-rung"
                d="M-11,-16 L11,-16 M-14,4 L14,4 M-11,24 L11,24"
              />
            </g>
 
            {/* floor platform */}
            <polygon
              className="ari-floor"
              points="500,80 660,166 500,252 340,166"
            />
            <polygon
              className="ari-floor-edge"
              points="340,166 500,252 500,272 340,186"
            />
            <polygon
              className="ari-floor-edge"
              points="660,166 500,252 500,272 660,186"
            />
 
            {/* central server cabinet */}
            <g className="ari-cube">
              <polygon
                className="ari-cube-top"
                points="500,60 560,94 500,128 440,94"
              />
              <polygon
                className="ari-cube-left"
                points="440,94 500,128 500,192 440,158"
              />
              <polygon
                className="ari-cube-right"
                points="560,94 500,128 500,192 560,158"
              />
              <circle className="ari-light" cx="470" cy="118" r="3" />
              <circle className="ari-light" cx="470" cy="134" r="3" />
              <circle className="ari-light" cx="470" cy="150" r="3" />
            </g>
 
            {/* left equipment block */}
            <g className="ari-cube">
              <polygon
                className="ari-cube-top"
                points="392,132 432,154 392,176 352,154"
              />
              <polygon
                className="ari-cube-left"
                points="352,154 392,176 392,214 352,192"
              />
              <polygon
                className="ari-cube-right"
                points="432,154 392,176 392,214 432,192"
              />
            </g>
 
            {/* right equipment block */}
            <g className="ari-cube">
              <polygon
                className="ari-cube-top"
                points="608,132 648,154 608,176 568,154"
              />
              <polygon
                className="ari-cube-left"
                points="568,154 608,176 608,208 568,186"
              />
              <polygon
                className="ari-cube-right"
                points="648,154 608,176 608,208 648,186"
              />
            </g>
 
            {/* front small monitor block */}
            <g className="ari-cube">
              <polygon
                className="ari-cube-top"
                points="500,176 530,193 500,210 470,193"
              />
              <polygon
                className="ari-cube-left"
                points="470,193 500,210 500,230 470,213"
              />
              <polygon
                className="ari-cube-right"
                points="530,193 500,210 500,230 530,213"
              />
            </g>
 
            {/* connector pulses from equipment to platform edge */}
            <circle className="ari-pulse-dot" cx="392" cy="154" r="4" />
            <circle className="ari-pulse-dot" cx="608" cy="154" r="4" />
            <circle className="ari-pulse-dot" cx="500" cy="94" r="4" />
          </svg>
        </div>
 
        {/* Right feature column */}
        <div className="ari-column ari-column-right">
          <div className="ari-card">
            <span className="ari-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17a4 4 0 010-8 5 5 0 019.6-1.6A3.5 3.5 0 0117.5 17H7z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 20l2-2.5M13 20l1.5-2M11 21l1-1.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <h3>Cloud Analytics</h3>
            <p>Secure cloud infrastructure for scalable analysis.</p>
          </div>
 
          <div className="ari-card">
            <span className="ari-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3l7 3v5c0 5-3.2 8.4-7 10-3.8-1.6-7-5-7-10V6l7-3z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3>Data Security</h3>
            <p>End-to-end data encryption and compliance.</p>
          </div>
        </div>
      </div>
    </section>

    {/* why choose leads genetics section */}
    <section className="wcl-section-fluid">
      {/* decorative DNA helix watermarks */}
      <svg className="wcl-helix-deco wcl-helix-deco--tl" viewBox="0 0 220 220" aria-hidden="true">
        <path className="wcl-helix-strand" d="M40,0 C90,40 20,80 70,120 C20,160 90,200 40,220" />
        <path className="wcl-helix-strand" d="M110,0 C60,40 130,80 80,120 C130,160 60,200 110,220" />
        <path className="wcl-helix-rung" d="M46,20 L104,20 M32,60 L118,60 M46,100 L104,100 M32,140 L118,140 M46,180 L104,180" />
      </svg>
      <svg className="wcl-helix-deco wcl-helix-deco--br" viewBox="0 0 260 260" aria-hidden="true">
        <path className="wcl-helix-strand" d="M50,0 C110,50 20,100 80,150 C20,190 110,230 50,260" />
        <path className="wcl-helix-strand" d="M140,0 C80,50 170,100 110,150 C170,190 80,230 140,260" />
        <path className="wcl-helix-rung" d="M58,24 L132,24 M40,72 L150,72 M58,120 L132,120 M40,168 L150,168 M58,216 L132,216" />
      </svg>
 
      <div className="wcl-container">
        <header className="wcl-header">
          <h2 className="wcl-heading">
            <span>Why Choose</span>
            <span>Leads Genetics</span>
          </h2>
          <p className="wcl-subheading">
            We combine technology, expertise, and innovation to deliver
            trusted results.
          </p>
        </header>
 
        {/* Left: illustration */}
        <div className="wcl-illustration-wrap">
          <div className="wcl-monitor">
            <div className="wcl-monitor-frame">
              <div className="wcl-monitor-screen">
                <svg className="wcl-screen-dna" viewBox="0 0 300 220" aria-hidden="true">
                  <g className="wcl-dna-group" transform="translate(150,110)">
                    <path
                      className="wcl-dna-strand"
                      d="M-35,-75 C10,-50 10,-25 -35,0 C10,25 10,50 -35,75"
                    />
                    <path
                      className="wcl-dna-strand"
                      d="M35,-75 C-10,-50 -10,-25 35,0 C-10,25 -10,50 35,75"
                    />
                    <path
                      className="wcl-dna-rung"
                      d="M-28,-60 L28,-60 M-35,-30 L35,-30 M-35,0 L35,0 M-35,30 L35,30 M-28,60 L28,60"
                    />
                  </g>
                </svg>
                <div className="wcl-ai-badge">AI</div>
                <div className="wcl-mini-chart" aria-hidden="true">
                  <span className="wcl-mini-bar" />
                  <span className="wcl-mini-bar" />
                  <span className="wcl-mini-bar" />
                  <span className="wcl-mini-bar" />
                </div>
              </div>
            </div>
            <div className="wcl-monitor-stand" />
            <div className="wcl-monitor-base" />
          </div>
        </div>
 
        {/* Right: feature list */}
        <div className="wcl-list">
          {FEATURES.map((feature) => (
            <div className="wcl-item" key={feature.title}>
              <span className="wcl-item-icon" aria-hidden="true">
                {feature.icon}
              </span>
              <div>
                <h3 className="wcl-item-title">{feature.title}</h3>
                <p className="wcl-item-desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

export default AboutUs