import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Cpu,
  ShieldCheck,
  FileCheck2,
  Globe2,
  Award,
  Sparkles,
  ArrowRight,
  Zap,
  Activity,
  CheckCircle2,
} from "lucide-react";
import "./WhyLeads.css";

const BAR_HEIGHTS = [
  24, 38, 48, 56, 51, 47, 39, 31, 53, 58, 62, 56,
  100, // active peak
  92, 76, 67, 62, 65, 59, 70, 74, 87, 83, 77,
];
const ACTIVE_INDEX = 12;

const DIFFERENTIATORS = [
  {
    id: 1,
    icon: <Cpu size={22} />,
    title: "In-House End-to-End Platforms",
    description:
      "Faster turnaround, tighter QC, and competitive pricing versus outsourced third-party pipelines.",
  },
  {
    id: 2,
    icon: <ShieldCheck size={22} />,
    title: "Hard QC Gates in Every Run",
    description:
      "QV ≥ 60, BUSCO ≥ 98%, array call rate ≥ 98%, RIN ≥ 8 — rigorous acceptance criteria in writing.",
  },
  {
    id: 3,
    icon: <FileCheck2 size={22} />,
    title: "Standardized & Documented SOPs",
    description:
      "End-to-end sample collection procedures (LG-SOP-SC-001) shared with every client before sampling.",
  },
  {
    id: 4,
    icon: <Globe2 size={22} />,
    title: "Global & National Collaborations",
    description:
      "Active engagements with leading agricultural universities, research institutes, and breeding federations.",
  },
  {
    id: 5,
    icon: <Award size={22} />,
    title: "20+ Years Delivery Experience",
    description:
      "Proven expertise across microarray and NGS applications — resequencing, T2T, pangenomes, and multi-omics.",
  },
  {
    id: 6,
    icon: <CheckCircle2 size={22} />,
    title: "Closed Scientific Loop",
    description:
      "Connecting genomics directly with working herds, elite germplasm, IVF technologies, and field phenotypes.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  const prefersReducedMotion = useReducedMotion();
  const hoverLift = prefersReducedMotion
    ? {}
    : { y: -6, transition: { duration: 0.25, ease: "easeOut" } };

  return (
    <section className="wcu-section" id="why-choose" aria-label="Why choose Leads Genetics">
      <div className="wcu-container">
        
        {/* Section Header */}
        <motion.div
          className="wcu-heading"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="wcu-tag">Why Choose Leads Genetics</span>
          <h2 className="wcu-title">
            One unbroken chain of custody — from livestock farm to high-throughput genomics.
          </h2>
          <p className="wcu-intro">
            An integrated farm-to-clinic model: the only Indian genomics ecosystem pairing a live research herd, IVF facilities, and disease screening with advanced sequencing pipelines.
          </p>
        </motion.div>

        {/* 3 Interactive Cards */}
        <motion.div
          className="wcu-cards"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* CARD 1 — Instant Visibility */}
          <motion.article className="wcu-card" variants={cardVariants} whileHover={hoverLift}>
            <div className="wcu-panel" aria-label="Sequencing visibility timeline chart">
              <div className="wcu-timeline">
                <span>06 AM</span>
                <i />
                <span>12 PM</span>
                <i />
                <span>06 PM</span>
              </div>
              <div className="wcu-bars" aria-hidden="true">
                {BAR_HEIGHTS.map((h, i) => (
                  <i
                    key={i}
                    className={i === ACTIVE_INDEX ? "wcu-bar active" : "wcu-bar"}
                    style={{ "--h": `${h}%`, "--i": i }}
                  />
                ))}
              </div>
              <div className="wcu-value-chip">12,480 Samples</div>
              <div className="wcu-axis">
                <span>INTAKE</span>
                <span>EXTRACTION</span>
                <span>SEQUENCING</span>
                <span>VERIFIED</span>
              </div>
            </div>
            <div className="wcu-card-copy">
              <div className="wcu-card-title-row">
                <div className="wcu-card-icon-wrap">
                  <Activity size={18} />
                </div>
                <h3>Instant Pipeline Visibility</h3>
              </div>
              <p>Real-time tracking and quality metrics across every sequencing run.</p>
            </div>
          </motion.article>

          {/* CARD 2 — Sample-to-Report Workflows */}
          <motion.article className="wcu-card wcu-card--feature" variants={cardVariants} whileHover={hoverLift}>
            <div className="wcu-panel wcu-panel--feature">
              <div className="wcu-assistant-head">
                <span className="wcu-badge">
                  <Sparkles size={15} />
                </span>
                <span>Leads Genetics Workflow</span>
              </div>
              <p className="wcu-question">Streamlined Sample Submission</p>
              <div className="wcu-prompt">
                Submit tissue, blood, or semen samples for whole-genome genotyping and route actionable breeding values straight to your team.
              </div>
              <Link to="/contact" className="wcu-automate" aria-label="Submit sample">
                <span className="wcu-automate-label">Submit Samples</span>
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="wcu-card-copy">
              <div className="wcu-card-title-row">
                <div className="wcu-card-icon-wrap">
                  <Zap size={18} />
                </div>
                <h3>Sample-to-Decision Workflows</h3>
              </div>
              <p>Every sample tracked rigorously from field collection to final genomic evaluation.</p>
            </div>
          </motion.article>

          {/* CARD 3 — Faster Decisions */}
          <motion.article className="wcu-card" variants={cardVariants} whileHover={hoverLift}>
            <div className="wcu-panel wcu-panel--metric">
              <div className="wcu-metric">
                <div className="wcu-metric-label">Turnaround Optimization</div>
                <div className="wcu-metric-row">
                  <strong>142 Hrs</strong>
                  <span className="wcu-eff-tag">↑ 24% Efficiency</span>
                </div>
              </div>
              
              <div className="wcu-pills-stack">
                <div className="wcu-metric-pill wcu-pill--1">
                  <span className="wcu-pill-dot"></span>
                  <span>Genotype-to-Phenotype Sync: 99.4%</span>
                </div>
                <div className="wcu-metric-pill wcu-pill--2">
                  <span className="wcu-pill-dot"></span>
                  <span>Variant Call Confidence: 99.8%</span>
                </div>
                <div className="wcu-metric-pill wcu-pill--3">
                  <span className="wcu-pill-dot"></span>
                  <span>Automated Breeding Value Output</span>
                </div>
              </div>
            </div>
            <div className="wcu-card-copy">
              <div className="wcu-card-title-row">
                <div className="wcu-card-icon-wrap">
                  <ShieldCheck size={18} />
                </div>
                <h3>Faster, Confident Decisions</h3>
              </div>
              <p>Transform raw sequencing reads into reliable breeding choices in days, not months.</p>
            </div>
          </motion.article>
        </motion.div>

        {/* 6 Key Differentiators Grid */}
        <motion.div
          className="wcu-diff-list"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {DIFFERENTIATORS.map((item) => (
            <motion.div key={item.id} className="wcu-diff-item" variants={cardVariants} whileHover={{ y: -3 }}>
              <div className="wcu-diff-icon">{item.icon}</div>
              <div className="wcu-diff-copy">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}