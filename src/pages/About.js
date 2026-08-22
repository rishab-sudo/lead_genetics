import React, { useState } from "react";
import { motion } from "framer-motion";
import AboutHero from "../components/AboutHero"
import "./About.css";
import OurHistory from "../components/OurHistory";

import WhyChooseUs from "../components/Whyleads";

/* ── Animation variants ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ── Data ────────────────────────────────────────────────── */
const missionStats = [
  { value: "1B+", label: "Cattle in India", sub: "One of the world's largest populations" },
  { value: "5+", label: "Key Traits Tracked", sub: "Milk · Fertility · Growth · Health · Adaptability" },
  { value: "1×", label: "Shorter Genetic Cycle", sub: "Through precision genomic selection" },
];

const visionPoints = [
  { icon: "🧬", text: "Early-life genomic evaluation" },
  { icon: "🏆", text: "Superior breeding animals identified with confidence" },
  { icon: "📊", text: "Genomic breeding values complement selection" },
  { icon: "🔬", text: "Elite germplasm multiplied via reproductive tech" },
  { icon: "🛡️", text: "Disease resistance as a breeding objective" },
  { icon: "🌿", text: "Genetic diversity monitored and managed" },
  { icon: "🔗", text: "Genotype continuously linked to real-world phenotype" },
  { icon: "🌾", text: "Genomic selection reaches commercial herds nationwide" },
];

const genomicsLevels = [
  {
    id:    "lab",
    icon:  "🔬",
    label: "Laboratory",
    color: "teal",
    desc:  "High-quality genomic information through SNP genotyping, GBS, sequencing, and advanced analysis.",
  },
  {
    id:    "computational",
    icon:  "💻",
    label: "Computational",
    color: "indigo",
    desc:  "Population structure, parentage, genomic relationships, breeding values, and selection insights.",
  },
  {
    id:    "biological",
    icon:  "🧬",
    label: "Biological",
    color: "emerald",
    desc:  "Genomic predictions connected to milk production, fertility, growth, health, and adaptability.",
  },
  {
    id:    "herd",
    icon:  "🐄",
    label: "Herd",
    color: "amber",
    desc:  "Real-world breeding and selection decisions supported at the farm level.",
  },
];

const foundationPillars = [
  { id: "agriculture",    icon: "🌾", label: "Agriculture",    desc: "Provides the biological context",    color: "green" },
  { id: "genomics",       icon: "🧬", label: "Genomics",       desc: "Provides the resolution",           color: "teal" },
  { id: "bioinformatics", icon: "💻", label: "Bioinformatics", desc: "Provides the intelligence",         color: "indigo" },
  { id: "breeding",       icon: "🐄", label: "Breeding",       desc: "Provides the pathway to impact",   color: "amber" },
];

const roadSteps = [
  { label: "Better Data",        icon: "📊" },
  { label: "Better Selection",   icon: "🎯" },
  { label: "Better Breeding",    icon: "🔬" },
  { label: "Better Cattle",      icon: "🐄" },
  { label: "Better Outcomes",    icon: "🌾" },
];

/* ── Component ───────────────────────────────────────────── */
export default function About() {
  const [activeVision, setActiveVision] = useState(null);

  return (
    <main className="about-page">

      {/* ── HERO ─────────────────────────────────────────── */}
     

      <AboutHero />

      {/* ── OUR STORY ────────────────────────────────────── */}
      <section id="about-our-story" className="container-fluid our-story-section" aria-labelledby="our-story-heading">
        <motion.div className="section-header" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
          <motion.span className="tag" variants={fadeUp}>Our Story</motion.span>
          <motion.h2 id="our-story-heading" variants={fadeUp}>
            Building the Genomics Platform for Cattle Improvement
          </motion.h2>
        </motion.div>

        <div className="story-grid">
          <motion.div className="story-text" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.p variants={fadeUp}>
              Leads Genetics is the next chapter in the evolution of a long-standing agricultural enterprise rooted in the BL Agro / Leads Group of Companies. With deep experience in agriculture, food, dairy-linked value chains, and farmer-oriented businesses, the Group brings an understanding of Indian agriculture that extends beyond the laboratory — into farms, supply chains, producers, and the realities of improving productivity at scale.
            </motion.p>
            <motion.p variants={fadeUp}>
              The genomics operations of GenePrint Labs were merged into the Leads ecosystem, bringing established genomics, molecular diagnostics, sequencing, and bioinformatics capabilities into the organization.
            </motion.p>
            <motion.p variants={fadeUp}>
              Leads Genetics was created with a larger ambition: to combine the scale and agricultural understanding of the BL Agro ecosystem with modern genomics to address one of India's most important biological challenges — improving the productivity, health, fertility, and resilience of its cattle population.
            </motion.p>
          </motion.div>

          <motion.div className="story-highlight-box" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
            <div className="highlight-intro">
              <span className="highlight-label">Our Integrated Platform</span>
              <p>The organization brings together:</p>
            </div>
            <ul className="platform-list">
              {["Genotyping","Next-generation sequencing","Long-read genomics","Bioinformatics","Reproductive technologies & IVF","Infectious-disease screening","Genomic selection"].map((item) => (
                <li key={item}><span className="list-bullet" aria-hidden="true">▸</span>{item}</li>
              ))}
            </ul>
            <div className="campus-note">
              <span className="campus-icon" aria-hidden="true">📍</span>
              <p>At the centre is the <strong>Leads Genetics Livestock Campus in Bareilly</strong> — connecting genomics with a working research herd, elite germplasm, and continuously generated phenotypic information.</p>
            </div>
          </motion.div>
        </div>

        {/* Scientific Loop */}
        <motion.div className="scientific-loop" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }}>
          <span className="loop-label">The Closed Scientific Loop</span>
          <div className="loop-steps">
            {["Genotype","Phenotype","Genomic Evaluation","Selection","Breeding","Next Generation","Validation"].map((step, i, arr) => (
              <React.Fragment key={step}>
                <motion.span className="loop-step" whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.28)" }} transition={{ type: "spring", stiffness: 320 }}>{step}</motion.span>
                {i < arr.length - 1 && <span className="loop-arrow" aria-hidden="true">→</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="loop-caption">
            This enables genetic improvement to be evaluated not only computationally, but in the field.
          </p>
        </motion.div>
      </section>

      {/* ── OUR HISTORY ──────────────────────────────────── */}
      <OurHistory />

      {/* ── MISSION & VISION ─────────────────────────────── */}
      <section id="about-mission-vision" className="container-fluid mission-vision-section" aria-label="Mission and Vision">

        {/* Mission — compact split layout */}
        <motion.div className="mv-mission-wrap" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          <motion.div className="mv-mission-text" variants={fadeLeft}>
            <span className="tag">Our Mission</span>
            <h2>To accelerate the genetic improvement of Indian cattle through genomics.</h2>
            <p>
              Our mission is to make genomic selection a practical and scalable tool for improving India's dairy and livestock populations — translating genetic data into better breeding decisions that shorten the improvement cycle for every generation.
            </p>
          </motion.div>
          <motion.div className="mv-mission-stats" variants={stagger}>
            {missionStats.map((s) => (
              <motion.div key={s.label} className="mission-stat-card" variants={scaleIn}
                whileHover={{ y: -6, boxShadow: "0 16px 40px -16px rgba(37,99,184,0.25)" }}
                transition={{ type: "spring", stiffness: 280 }}>
                <span className="ms-value">{s.value}</span>
                <strong className="ms-label">{s.label}</strong>
                <span className="ms-sub">{s.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="mv-divider" aria-hidden="true" />

        {/* Vision — chip grid layout */}
        <motion.div className="mv-vision-wrap" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.div className="mv-vision-header" variants={fadeUp}>
            <span className="tag">Our Vision</span>
            <h2>To build a genomically improved Indian cattle population — healthier, more productive, better adapted.</h2>
            <p>We envision a data-driven genetic improvement ecosystem where every generation benefits from increasingly precise information about its genetic potential:</p>
          </motion.div>
          <motion.div className="vision-chip-grid" variants={stagger}>
            {visionPoints.map((pt, i) => (
              <motion.button
                key={i}
                className={`vision-chip ${activeVision === i ? "vision-chip--active" : ""}`}
                onClick={() => setActiveVision(activeVision === i ? null : i)}
                variants={scaleIn}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="vc-icon">{pt.icon}</span>
                <span className="vc-text">{pt.text}</span>
              </motion.button>
            ))}
          </motion.div>
          <motion.p className="vision-conclusion" variants={fadeUp}>
            Ultimately, the goal is not simply to sequence more animals.&nbsp;
            <strong>The goal is to improve the animal.</strong>
          </motion.p>
        </motion.div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── GENOMICS TO GENETIC GAIN ─────────────────────── */}
      <section id="about-genomics-gain" className="container-fluid genomics-gain-section" aria-labelledby="genomics-gain-heading">
        <motion.div className="section-header" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
          <motion.span className="tag" variants={fadeUp}>From Genomics to Genetic Gain</motion.span>
          <motion.h2 id="genomics-gain-heading" variants={fadeUp}>
            Genomic data has value when it changes a breeding decision.
          </motion.h2>
          <motion.p className="section-lede" variants={fadeUp}>
            Our work extends from the laboratory to the herd — integrating data, computation, biology, and field decisions into a single continuous loop.
          </motion.p>
        </motion.div>

        <motion.div className="genomics-levels-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          {genomicsLevels.map((level, i) => (
            <motion.div key={level.id} className={`genomics-level-card glc--${level.color}`} variants={scaleIn}
              whileHover={{ y: -8, boxShadow: "0 20px 50px -18px rgba(0,0,0,0.18)" }}
              transition={{ type: "spring", stiffness: 260 }}>
              <div className="glc-number">{String(i + 1).padStart(2, "0")}</div>
              <span className="level-icon" aria-hidden="true">{level.icon}</span>
              <h3>{level.label}</h3>
              <p>{level.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="gain-statement" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
          <p>
            This integrated approach allows Leads Genetics to build toward a continuously improving cattle population — where each generation provides new genomic and phenotypic information that strengthens the selection decisions for the next.
          </p>
        </motion.div>
      </section>

      {/* ── LEADS GENETICS FOUNDATION ────────────────────── */}
      <section id="about-lg-foundation" className="container-fluid lg-foundation-section" aria-labelledby="lg-foundation-heading">
        <div className="lf-grid">
          <motion.div className="lf-text" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.span className="tag" variants={fadeUp}>Leads Genetics Foundation</motion.span>
            <motion.h2 id="lg-foundation-heading" variants={fadeUp}>
              Strength rooted in agriculture, sharpened by science.
            </motion.h2>
            <motion.p variants={fadeUp}>
              The strength of Leads Genetics is not only its technology. It is also the agricultural ecosystem in which that technology is being developed.
            </motion.p>
            <motion.p variants={fadeUp}>
              The BL Agro / Leads Group of Companies provides a foundation rooted in agriculture and the Indian food and dairy landscape. Cattle genomics must ultimately work within the realities of Indian farms, farmers, breeds, production systems, economics, and animal health.
            </motion.p>
            <motion.p variants={fadeUp}>
              Rather than treating cattle as sequencing samples, Leads Genetics views each animal as part of a larger production system — with a genome, phenotype, pedigree, health history, reproductive history, environment, and economic value.
            </motion.p>
          </motion.div>

          <motion.div className="lf-pillars" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {foundationPillars.map((pillar) => (
              <motion.div key={pillar.id} className={`pillar-card pc--${pillar.color}`} variants={scaleIn}
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <span className="pc-icon">{pillar.icon}</span>
                <strong className="pillar-label">{pillar.label}</strong>
                <span className="pillar-desc">{pillar.desc}</span>
              </motion.div>
            ))}
            <motion.p className="pillars-footer" variants={fadeUp}>
              Together, they form the foundation of the Leads Genetics vision for cattle improvement.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── THE ROAD AHEAD ───────────────────────────────── */}
      <section id="about-road-ahead" className="container-fluid road-ahead-section" aria-labelledby="road-ahead-heading">
        <motion.div className="road-ahead-inner" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
          <motion.span className="tag tag--light" variants={fadeUp}>The Road Ahead</motion.span>
          <motion.h2 id="road-ahead-heading" variants={fadeUp}>
            Genomics translated into genetic gain.
          </motion.h2>
          <motion.p variants={fadeUp}>
            Leads Genetics is building toward a future where genomic selection becomes increasingly accessible across India's cattle-breeding ecosystem — from elite breeding programs and organized dairy operations to cooperatives and broader population-improvement initiatives.
          </motion.p>

          {/* Step chain */}
          <motion.div className="road-steps-row" variants={stagger} aria-label="Long-term ambition">
            {roadSteps.map((step, i) => (
              <React.Fragment key={step.label}>
                <motion.div className="road-step-card" variants={scaleIn}
                  whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.12)" }}
                  transition={{ type: "spring", stiffness: 280 }}>
                  <span className="rsc-icon">{step.icon}</span>
                  <span className="rsc-label">{step.label}</span>
                </motion.div>
                {i < roadSteps.length - 1 && (
                  <span className="road-connector" aria-hidden="true">→</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          <motion.p className="road-conclusion" variants={fadeUp}>
            That is the purpose behind Leads Genetics.&nbsp;
            <em>Not genomics for genomics' sake — but genomics translated into genetic gain.</em>
          </motion.p>
        </motion.div>
      </section>

    </main>
  );
}