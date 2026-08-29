import React, { useState } from "react";
import { motion } from "framer-motion";
import embroy1 from "../assets/embroy1.jpeg";
import lab_gr from "../assets/lab_gr.jpeg";
import calf6 from "../assets/calf6.jpeg";
import homekaam from "../assets/home_kam.png";
import embroy3 from "../assets/embroy3.jpeg";
import agri_moet from "../assets/agri_moet.jpg";

/**
 * MOET Technology — Leads Genetics
 * Single-file React component (styles embedded via <style>).
 * Images are pulled from local assets — replace the files under
 * src/assets/ to swap out the photography.
 *
 * Heading typography (Cormorant Garamond for h1/h2, Libre Baskerville
 * for body copy) comes from the app-wide `hero-heading` / `section-heading`
 * classes defined in App.css — this file no longer sets its own
 * heading font-family so those rules win.
 */

const IMAGES = {
  heroCattle: embroy1,
  vetCare: homekaam,
  lab: lab_gr,
  calf: calf6,
  embroy3: embroy3,
  agriMoet: agri_moet,
};

const TRAITS = [
  { code: "MY", name: "Milk Yield", detail: "Selected from donors in the top percentile for 305-day lactation volume." },
  { code: "FT", name: "Fat %", detail: "Bulls and donors paired for higher butterfat without sacrificing yield." },
  { code: "SNF", name: "Solids-Not-Fat", detail: "Improves processing value for ghee, paneer, and khoa-grade milk." },
  { code: "DR", name: "Disease Resistance", detail: "Genetic lines screened for mastitis resistance and general herd immunity." },
  { code: "LG", name: "Longevity", detail: "Favors structurally sound offspring that stay productive for more lactations." },
  { code: "FI", name: "Fertility Index", detail: "Prioritizes calving ease and rebreeding performance in recipient herds." },
];

const FAQS = [
  {
    q: "How many embryos does one donor cycle typically produce?",
    a: "It varies by donor and protocol response, but a single superovulation cycle commonly yields several transferable embryos - far more than the one calf a donor would produce naturally in that time.",
  },
  {
    q: "Do we need our own recipient herd?",
    a: "No. We help you evaluate and synchronize recipient cows from your existing herd, and can advise on sourcing additional recipients if your herd size is limited.",
  },
  {
    q: "What happens if a fresh transfer isn't possible right away?",
    a: "Good-quality embryos are cryopreserved on-site and transferred later once recipients are synchronized, with no meaningful drop in expected conception rates.",
  },
  {
    q: "Can we choose the sex of the calves?",
    a: "Yes - sex-sorted semen can be used alongside the MOET protocol to skew a batch toward female calves.",
  },
];

/* Framer Motion — shared stagger variants so groups of items animate in one-by-one */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MoetLeadsGenetics() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="moet-root">
      <style>{`
        .moet-root{
          --bg: #F3F0E4;
          --ink: #1E2A20;
          --ink-soft: #4B5A4E;
          --green: #33503A;
          --green-deep: #1F3324;
          --green-soft: #A8D39B;
          --green-tint: #E4EFDD;
          --line: #D9D2BD;
          --line-deep: rgba(243,240,228,0.18);
          --white: #FCFBF7;
          background:var(--bg);
          color:var(--ink);
          font-family:'IBM Plex Sans', sans-serif;
          font-size:16px;
          line-height:1.6;
          -webkit-font-smoothing:antialiased;
          text-transform: capitalize;
        }
        .moet-root *{box-sizing:border-box;}
        .moet-root h3{font-family:'Fraunces', serif; font-weight:600; letter-spacing:-0.01em; margin:0;}
        .moet-container-fluid{width:100%;}
        .moet-inner{max-width:1140px; margin:0 auto; padding:0 32px;}
        .moet-eyebrow{
          font-family:'IBM Plex Mono', monospace;
          font-size:12px;
          letter-spacing:0.1em;
          text-transform:uppercase;
          color:var(--green);
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:0;
          margin:0 0 6px;
          border:1px solid currentColor;
          border-radius:999px;
          padding:7px 18px;
          line-height:1;
        }
        .moet-mono{font-family:'IBM Plex Mono', monospace;}

        /* Section heads that are centered (Protocol / Traits / Compare / Field / FAQ) */
        .moet-head-center{ text-align:center; }
        .moet-head-center .moet-eyebrow{ margin:0 auto 14px; }
        .moet-head-center h2{ margin-left:auto; margin-right:auto; }
        .moet-head-center > p{ margin-left:auto; margin-right:auto; }

        /* HERO */
        .moet-hero{
          background:
            radial-gradient(ellipse 900px 500px at 82% -10%, rgba(76,138,61,0.22), transparent 60%),
            linear-gradient(180deg, rgba(31,51,36,0.94) 0%, rgba(36,57,42,0.94) 100%),
            url(${IMAGES.heroCattle});
          background-size:cover;
          background-position:center;
          color:var(--bg);
          padding:96px 0 80px;
          position:relative;
          overflow:hidden;
        }
        .moet-hero::after{
          content:"";
          position:absolute; inset:0;
          background-image: repeating-linear-gradient(90deg, var(--line-deep) 0 1px, transparent 1px 120px);
          opacity:0.5;
          pointer-events:none;
        }
        .moet-hero .moet-eyebrow{color:var(--green-soft); margin-bottom:18px;}
        .moet-hero h1{
          font-size:clamp(38px, 5.4vw, 64px);
          line-height:1.06;
          margin:0 0 24px;
          max-width:15ch;
          color:var(--white);
          position:relative;
        }
        .moet-hero h1 em{ font-style:italic; color:var(--green-soft); }
        .moet-hero p.moet-lede{
          max-width:56ch;
          font-size:18px;
          color:rgba(252,251,247,0.82);
          margin:0 0 44px;
          position:relative;
        }
        .moet-hero-stats{
          display:grid;
          grid-template-columns:repeat(3, auto);
          gap:40px;
          border-top:1px solid var(--line-deep);
          padding-top:28px;
          max-width:640px;
          position:relative;
        }
        .moet-hero-stat .moet-num{ font-family:'IBM Plex Mono', monospace; font-size:28px; color:var(--green-soft); display:block; }
        .moet-hero-stat .moet-label{ font-size:12.5px; color:rgba(252,251,247,0.65); margin-top:4px; }

        /* CONTEXT */
        .moet-context{padding:80px 0; border-bottom:1px solid var(--line);}
        .moet-context .moet-inner{ display:grid; grid-template-columns:1fr 1.3fr; gap:64px; align-items:start; }
        .moet-context h2{font-size:clamp(26px,3vw,34px); line-height:1.18;}
        .moet-context .moet-body p{font-size:16.5px; color:var(--ink-soft); margin:0 0 16px; max-width:60ch;}
        .moet-context .moet-body p:last-child{margin-bottom:0;}

        /* PROTOCOL */
        .moet-protocol{padding:88px 0 96px; background:var(--white); border-bottom:1px solid var(--line);}
        .moet-protocol > .moet-inner > h2{ font-size:clamp(28px,3.4vw,38px); max-width:18ch; margin-top:0; margin-bottom:16px; }
        .moet-protocol > .moet-inner > p{color:var(--ink-soft); max-width:58ch; margin:0 0 64px;}
        .moet-timeline{position:relative; padding-top:8px;}
        .moet-timeline-track{ position:relative; height:2px; background:var(--line); }
        .moet-timeline-track::before{
          content:""; position:absolute; left:0; top:0; height:2px; width:100%;
          background:linear-gradient(90deg, var(--green) 0%, var(--green-soft) 100%); opacity:0.85;
        }
        .moet-steps{ display:grid; grid-template-columns:repeat(4, 1fr); gap:24px; margin-top:0; }
        .moet-step{ position:relative; padding-top:28px; }
        .moet-step::before{
          content:""; position:absolute; top:-9px; left:0; width:10px; height:10px; border-radius:50%;
          background:var(--green); border:2px solid var(--white); box-shadow:0 0 0 1px var(--green);
        }
        .moet-step .moet-day{ font-family:'IBM Plex Mono', monospace; font-size:13px; color:var(--green); letter-spacing:0.04em; display:block; margin-bottom:10px; }
        .moet-step h3{ font-size:18px; font-weight:600; margin-bottom:8px; line-height:1.28; }
        .moet-step p{font-size:14.5px; color:var(--ink-soft); line-height:1.55; margin:0;}

        /* TRAITS (new) */
        .moet-traits{padding:88px 0; border-bottom:1px solid var(--line); background:var(--bg);}
        .moet-traits > .moet-inner > h2{ font-size:clamp(26px,3.2vw,34px); max-width:20ch; margin:0 0 16px; }
        .moet-traits > .moet-inner > p{ color:var(--ink-soft); max-width:58ch; margin:0 0 52px; }
        .moet-traits-grid{ display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; }
        .moet-trait{
          background:var(--white); border:1px solid var(--line); padding:24px;
          cursor:pointer; text-align:left; transition:border-color 0.2s ease, transform 0.2s ease;
        }
        .moet-trait:hover{ border-color:var(--green); transform:translateY(-2px); }
        .moet-trait.is-active{ border-color:var(--green); background:var(--white); box-shadow:inset 0 0 0 1px var(--green); }
        .moet-trait-top{ display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; }
        .moet-trait-code{ font-family:'IBM Plex Mono', monospace; font-size:12px; color:var(--green); letter-spacing:0.06em; }
        .moet-trait h3{ font-size:17px; margin-bottom:8px; }
        .moet-trait p{ font-size:14px; color:var(--ink-soft); margin:0; line-height:1.5; }

        /* COMPARISON */
        .moet-compare{padding:88px 0; background:var(--green-deep); color:var(--white);}
        .moet-compare .moet-eyebrow{color:var(--green-soft);}
        .moet-compare h2{font-size:clamp(26px,3.2vw,34px); max-width:20ch; margin:0 0 48px; color:var(--white);}
        .moet-compare-layout{ display:grid; grid-template-columns:1fr 1.15fr; gap:48px; align-items:center; }
        .moet-compare-grid{ display:grid; grid-template-columns:1.1fr 1fr 1fr; border-top:1px solid var(--line-deep); }
        .moet-compare-grid > div{ padding:20px 20px; border-bottom:1px solid var(--line-deep); font-size:14.5px; }
        .moet-compare-head{ font-family:'IBM Plex Mono', monospace; font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:rgba(252,251,247,0.55); padding-bottom:14px !important; }
        .moet-compare-metric{color:rgba(252,251,247,0.85);}
        .moet-compare-moet{ font-family:'IBM Plex Mono', monospace; color:var(--green-soft); font-weight:500; }
        .moet-compare-ivf{ font-family:'IBM Plex Mono', monospace; color:rgba(252,251,247,0.5); }
        .moet-compare-media{ position:relative; border:1px solid var(--line-deep); overflow:hidden; align-self:stretch; min-height:420px; }
        .moet-compare-media img{ width:100%; height:100%; object-fit:cover; display:block; filter:saturate(0.92) contrast(1.02); }
        .moet-compare-media-caption{
          position:absolute; left:0; right:0; bottom:0; padding:16px 18px;
          background:linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 100%);
        }
        .moet-compare-media-caption .moet-mono{ font-size:11.5px; letter-spacing:0.06em; color:var(--green-soft); text-transform:uppercase; display:block; margin-bottom:4px; }
        .moet-compare-media-caption span.moet-cap-title{ font-size:14px; font-weight:500; color:var(--white); }

        /* IN THE FIELD gallery (new) */
        .moet-field{padding:88px 0; border-bottom:1px solid var(--line); background:var(--white);}
        .moet-field > .moet-inner > h2{ font-size:clamp(26px,3.2vw,34px); max-width:20ch; margin:0 0 16px; }
        .moet-field > .moet-inner > p{ color:var(--ink-soft); max-width:58ch; margin:0 0 52px; }
        .moet-field-grid{ display:grid; grid-template-columns:1.3fr 1fr 1fr; gap:16px; grid-template-rows:280px 280px; }
        .moet-field-item{ position:relative; overflow:hidden; border:1px solid var(--line); }
        .moet-field-item:first-child{ grid-row:1 / span 2; }
        .moet-field-item.moet-field-item-fill{ grid-column:2 / 4; grid-row:2; }
        .moet-field-item img{ width:100%; height:100%; object-fit:cover; display:block; filter:saturate(0.92) contrast(1.02); }
        .moet-field-caption{
          position:absolute; left:0; right:0; bottom:0; padding:16px 18px;
          background:linear-gradient(0deg, rgba(31,51,36,0.86) 0%, transparent 100%);
          color:var(--white);
        }
        .moet-field-caption .moet-mono{ font-size:11.5px; letter-spacing:0.06em; color:var(--green-soft); text-transform:uppercase; display:block; margin-bottom:4px; }
        .moet-field-caption span.moet-cap-title{ font-size:15px; font-weight:500; }

        /* ADD-ONS */
        .moet-addons{padding:88px 0; border-bottom:1px solid var(--line);}
        .moet-addons-grid{ display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--line); border:1px solid var(--line); }
        .moet-addon{background:var(--white); padding:44px 40px;}
        .moet-addon .moet-eyebrow{margin-bottom:20px;}
        .moet-addon h3{font-size:22px; margin-bottom:14px; line-height:1.24;}
        .moet-addon p{color:var(--ink-soft); font-size:15px; max-width:42ch; margin:0;}

        /* TESTIMONIAL (new) */
        .moet-quote{ padding:96px 0; background:var(--green-tint); border-bottom:1px solid var(--line); }
        .moet-quote .moet-inner{ max-width:820px; text-align:center; }
        .moet-quote .moet-eyebrow{ margin-bottom:18px; }
        .moet-quote blockquote{
          font-family:'Fraunces', serif; font-weight:500; font-style:italic;
          font-size:clamp(22px,2.6vw,30px); line-height:1.4; color:var(--green-deep); margin:0 0 24px;
        }
        .moet-quote-attr{ font-family:'IBM Plex Mono', monospace; font-size:13px; color:var(--ink-soft); }
        .moet-quote-attr strong{ color:var(--ink); font-weight:600; }

        /* FAQ (new) */
        .moet-faq{padding:88px 0; border-bottom:1px solid var(--line); background:var(--white);}
        .moet-faq > .moet-inner > .moet-head-center h2{ font-size:clamp(26px,3.2vw,34px); max-width:16ch; margin:0 auto 48px; }
        .moet-faq-list{ max-width:760px; margin-left:auto; margin-right:auto; }
        .moet-faq-item{ border-bottom:1px solid var(--line); }
        .moet-faq-q{
          width:100%; background:none; border:none; text-align:left; cursor:pointer;
          padding:22px 0; display:flex; align-items:center; justify-content:space-between; gap:20px;
          font-family:'Fraunces', serif; font-size:18px; color:var(--ink); font-weight:600;
        }
        .moet-faq-q .moet-faq-icon{
          font-family:'IBM Plex Mono', monospace; color:var(--green); font-size:20px; flex-shrink:0;
          transition:transform 0.2s ease;
        }
        .moet-faq-item.is-open .moet-faq-icon{ transform:rotate(45deg); }
        .moet-faq-a{ max-width:64ch; color:var(--ink-soft); font-size:15px; padding:0 0 22px; margin:0; }

        /* CLOSE / CTA */
        .moet-close{padding:96px 0; text-align:center;}
        .moet-close .moet-eyebrow{ margin-bottom:16px; }
        .moet-close h2{ font-size:clamp(28px,4vw,42px); max-width:20ch; margin:0 auto 22px; line-height:1.16; }
        .moet-close p{color:var(--ink-soft); max-width:52ch; margin:0 auto 36px;}
        .moet-cta{
          display:inline-flex; align-items:center; gap:10px; background:var(--green); color:var(--white);
          font-family:'IBM Plex Mono', monospace; font-size:13.5px; letter-spacing:0.04em;
          padding:15px 28px; border-radius:2px; text-decoration:none; border:none; cursor:pointer;
          transition:background 0.2s ease;
        }
        .moet-cta:hover{background:var(--green-deep);}
        .moet-cta:focus-visible{outline:2px solid var(--green); outline-offset:3px;}

        /* RESPONSIVE */
        @media (max-width:860px){
          .moet-context .moet-inner{grid-template-columns:1fr; gap:32px;}
          .moet-steps{grid-template-columns:1fr 1fr; row-gap:36px;}
          .moet-traits-grid{grid-template-columns:1fr 1fr;}
          .moet-compare-layout{grid-template-columns:1fr; gap:32px;}
          .moet-compare-grid{grid-template-columns:1.3fr 1fr 1fr;}
          .moet-compare-media{min-height:280px;}
          .moet-field-grid{grid-template-columns:1fr 1fr; grid-template-rows:220px 220px 220px;}
          .moet-field-item:first-child{grid-row:auto; grid-column:1 / span 2;}
          .moet-field-item.moet-field-item-fill{grid-column:1 / span 2; grid-row:auto;}
          .moet-addons-grid{grid-template-columns:1fr;}
          .moet-hero-stats{grid-template-columns:1fr 1fr; row-gap:24px;}
        }
        @media (max-width:520px){
          .moet-inner{padding:0 20px;}
          .moet-steps{grid-template-columns:1fr;}
          .moet-traits-grid{grid-template-columns:1fr;}
          .moet-field-grid{grid-template-columns:1fr; grid-template-rows:220px 220px 220px 220px;}
          .moet-field-item:first-child{grid-column:auto;}
          .moet-field-item.moet-field-item-fill{grid-column:auto;}
          .moet-hero{padding:72px 0 56px;}
        }
        @media (prefers-reduced-motion: reduce){
          .moet-cta, .moet-trait, .moet-faq-icon{transition:none;}
        }
      `}</style>

      {/* HERO */}
      <section className="moet-container-fluid moet-hero">
        <div className="moet-inner section-heading">
          <motion.span
            className="moet-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
          >
            Reproductive Technology
          </motion.span>
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Genetic improvement, grown <em>naturally</em> inside the donor.
          </motion.h1>
          <motion.p
            className="moet-lede"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Multiple Ovulation and Embryo Transfer produces elite dairy embryos inside the cow's own
            reproductive tract - not in a lab dish. In India, where AI is widespread but MOET and IVF
            are still early-stage, this is the fastest natural path to better milk-producing herds.
          </motion.p>
          <motion.div
            className="moet-hero-stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div className="moet-hero-stat" variants={staggerItem}>
              <span className="moet-num">60%+</span>
              <span className="moet-label">Conception rate, fresh good-quality embryos</span>
            </motion.div>
            <motion.div className="moet-hero-stat" variants={staggerItem}>
              <span className="moet-num">4–5</span>
              <span className="moet-label">Days of FSH stimulation</span>
            </motion.div>
            <motion.div className="moet-hero-stat" variants={staggerItem}>
              <span className="moet-num">1</span>
              <span className="moet-label">Elite donor, multiple embryos per cycle</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTEXT */}
      <motion.section
        className="moet-container-fluid moet-context"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="moet-inner">
          <h2 className="section-heading">Milk potential is a genetic ceiling. MOET raises it faster.</h2>
          <div className="moet-body">
            <p>
              Artificial insemination reached most Indian dairy farmers years ago. Advanced reproductive
              technologies like MOET and IVF have not - they remain early-stage, even though they compress
              generations of genetic improvement into a single breeding cycle.
            </p>
            <p>
              Because MOET embryos develop inside the donor cow rather than in vitro, they inherit her
              natural uterine environment. That single difference is why MOET consistently outperforms IVF
              on the metrics that matter to a recipient herd: conception, embryo survival, and calving
              outcomes.
            </p>
          </div>
        </div>
      </motion.section>

      {/* PROTOCOL TIMELINE */}
      <section className="moet-container-fluid moet-protocol">
        <div className="moet-inner">
          <motion.div
            className="moet-head-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <span className="moet-eyebrow">The Protocol</span>
            <h2 className="section-heading">One donor cycle, day by day</h2>
            <p>
              From hormone stimulation to embryo transfer - a single elite donor cow produces a batch of
              naturally developed embryos in about a week.
            </p>
          </motion.div>
          <div className="moet-timeline">
            <div className="moet-timeline-track"></div>
            <motion.div
              className="moet-steps"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="moet-step" variants={staggerItem}>
                <span className="moet-day">DAY 0–5</span>
                <h3>Superovulation</h3>
                <p>The elite donor cow receives FSH over 4–5 days to trigger multiple ovulations instead of the usual single egg.</p>
              </motion.div>
              <motion.div className="moet-step" variants={staggerItem}>
                <span className="moet-day">DAY 5</span>
                <h3>Insemination</h3>
                <p>Donor is inseminated with semen from a genetically superior bull - optionally sex-sorted for female calves.</p>
              </motion.div>
              <motion.div className="moet-step" variants={staggerItem}>
                <span className="moet-day">DAY 12</span>
                <h3>Embryo flushing</h3>
                <p>Embryos are collected via a non-invasive transcervical flush - no surgery, no incision on the donor.</p>
              </motion.div>
              <motion.div className="moet-step" variants={staggerItem}>
                <span className="moet-day">DAY 12+</span>
                <h3>Transfer or freeze</h3>
                <p>Fresh embryos go to synchronized recipients quickly, or are cryopreserved for transfer after thawing.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRAITS (new section) */}
      <section className="moet-container-fluid moet-traits">
        <div className="moet-inner">
          <motion.div
            className="moet-head-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <span className="moet-eyebrow">Trait Selection</span>
            <h2 className="section-heading">Every embryo is bred for something specific</h2>
            <p>
              Donor and bull pairings are chosen against the traits your herd actually needs - not a generic
              "elite genetics" claim. Tap a trait to see what it optimizes for.
            </p>
          </motion.div>
          <motion.div
            className="moet-traits-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {TRAITS.map((trait, i) => (
              <motion.button
                key={trait.code}
                type="button"
                className={"moet-trait" + (i === 0 ? " is-active" : "")}
                variants={staggerItem}
                onClick={(e) => {
                  document.querySelectorAll(".moet-trait").forEach((el) => el.classList.remove("is-active"));
                  e.currentTarget.classList.add("is-active");
                }}
              >
                <div className="moet-trait-top">
                  <h3 style={{ margin: 0 }}>{trait.name}</h3>
                  <span className="moet-trait-code">{trait.code}</span>
                </div>
                <p>{trait.detail}</p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="moet-container-fluid moet-compare">
        <div className="moet-inner">
          <motion.div
            className="moet-head-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <span className="moet-eyebrow">MOET vs IVF</span>
            <h2 className="section-heading">Why a naturally-developed embryo wins</h2>
          </motion.div>
          <motion.div
            className="moet-compare-layout"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="moet-compare-grid" variants={staggerItem}>
              <div className="moet-compare-head">Outcome</div>
              <div className="moet-compare-head">MOET</div>
              <div className="moet-compare-head">IVF</div>

              <div className="moet-compare-metric">Conception rate</div>
              <div className="moet-compare-moet">Higher</div>
              <div className="moet-compare-ivf">Lower</div>

              <div className="moet-compare-metric">Early embryonic loss</div>
              <div className="moet-compare-moet">Reduced</div>
              <div className="moet-compare-ivf">Elevated</div>

              <div className="moet-compare-metric">Abortion incidence</div>
              <div className="moet-compare-moet">Lower</div>
              <div className="moet-compare-ivf">Higher</div>

              <div className="moet-compare-metric">Large offspring syndrome</div>
              <div className="moet-compare-moet">Lower risk</div>
              <div className="moet-compare-ivf">Higher risk</div>
            </motion.div>
            <motion.div className="moet-compare-media" variants={staggerItem}>
              <img src={IMAGES.agriMoet} alt="MOET donor cow being handled in the field" />
              <div className="moet-compare-media-caption">
                <span className="moet-mono">On The Ground</span>
                <span className="moet-cap-title">Every advantage above starts with a healthy donor</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IN THE FIELD (new gallery section) */}
      <section className="moet-container-fluid moet-field">
        <div className="moet-inner">
          <motion.div
            className="moet-head-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <span className="moet-eyebrow">In The Field</span>
            <h2 className="section-heading">From donor selection to a calf on the ground</h2>
            <p>A look at the people and process behind every cycle - recipient care, genomic screening, and the calves the program exists for.</p>
          </motion.div>
          <motion.div
            className="moet-field-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="moet-field-item" variants={staggerItem}>
              <img src={IMAGES.vetCare} alt="Field technician caring for recipient cows in the barn" />
              <div className="moet-field-caption">
                <span className="moet-mono">Recipient Care</span>
                <span className="moet-cap-title">Daily monitoring keeps synchronization on schedule</span>
              </div>
            </motion.div>
            <motion.div className="moet-field-item" variants={staggerItem}>
              <img src={IMAGES.lab} alt="Lab technician reviewing genomic data" />
              <div className="moet-field-caption">
                <span className="moet-mono">Genomic Screening</span>
                <span className="moet-cap-title">Donor and bull pairings verified before flush day</span>
              </div>
            </motion.div>
            <motion.div className="moet-field-item" variants={staggerItem}>
              <img src={IMAGES.calf} alt="Newly born calf with its mother" />
              <div className="moet-field-caption">
                <span className="moet-mono">The Result</span>
                <span className="moet-cap-title">A healthy calf, backed by two generations of selection</span>
              </div>
            </motion.div>
            <motion.div className="moet-field-item moet-field-item-fill" variants={staggerItem}>
              <img src={IMAGES.embroy3} alt="Embryos collected during a MOET flush" />
              <div className="moet-field-caption">
                <span className="moet-mono">Embryo Collection</span>
                <span className="moet-cap-title">Flushed embryos, graded before transfer or freezing</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="moet-container-fluid moet-addons">
        <div className="moet-inner">
          <motion.div
            className="moet-addons-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="moet-addon" variants={staggerItem}>
              <span className="moet-eyebrow">Sex-Sorted Semen</span>
              <h3>More elite female calves, faster</h3>
              <p>Paired with MOET, sex-sorted semen skews the batch toward genetically valuable female calves. In large-framed HF recipients, well-run protocols can even produce twin female calves.</p>
            </motion.div>
            <motion.div className="moet-addon" variants={staggerItem}>
              <span className="moet-eyebrow">Cryopreservation</span>
              <h3>Freeze now, transfer later</h3>
              <p>High-quality MOET embryos freeze well. With correct freezing, thawing, and recipient synchronization, frozen-thawed transfers still achieve satisfactory conception rates.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL (new) */}
      <motion.section
        className="moet-container-fluid moet-quote"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <div className="moet-inner">
          <span className="moet-eyebrow">Partner Herd</span>
          <blockquote>
            "We ran one donor through a single cycle and ended up with more elite female calves than we'd
            have gotten from three years of regular AI. The recipients calved without any complications."
          </blockquote>
          <div className="moet-quote-attr"><strong>Herd Manager</strong> · 220-cow HF dairy, Uttar Pradesh</div>
        </div>
      </motion.section>

      {/* FAQ (new) */}
      <section className="moet-container-fluid moet-faq">
        <div className="moet-inner">
          <motion.div
            className="moet-head-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <span className="moet-eyebrow">Questions</span>
            <h2 className="section-heading">Before you talk to our team</h2>
          </motion.div>
          <motion.div
            className="moet-faq-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {FAQS.map((item, i) => (
              <motion.div
                key={item.q}
                className={"moet-faq-item" + (openFaq === i ? " is-open" : "")}
                variants={staggerItem}
              >
                <button
                  type="button"
                  className="moet-faq-q"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="moet-faq-icon">+</span>
                </button>
                {openFaq === i && <p className="moet-faq-a">{item.a}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CLOSE / CTA */}
      <motion.section
        className="moet-container-fluid moet-close"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <div className="moet-inner">
          <span className="moet-eyebrow">Leads Genetics</span>
          <h2 className="section-heading">Bring elite genetics into your herd, one donor cycle at a time.</h2>
          <p>From FSH protocol design to recipient synchronization, our team runs the full MOET pipeline for dairy farms across India.</p>
          <a href="/contact" className="moet-cta">
            TALK TO OUR TEAM →
          </a>
        </div>
      </motion.section>
    </div>
  );
}