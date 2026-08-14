import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import OurHistory from "../components/OurHistory";
import AboutPageBanner from "../components/AboutHero";



const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const commitments = [
  {
    id: "sustainability",
    image: "https://picsum.photos/seed/lag-sustainability/640/480",
    title: "Sustainability",
    copy: "From low-input extraction chemistry to energy-conscious sequencing runs, we design our process to lighten its footprint on the land our clients grow on.",
  },
  {
    id: "talent",
    image: "https://picsum.photos/seed/lag-talent/640/480",
    title: "Cultivating Talent",
    copy: "Geneticists, field scientists, and clinicians build their careers here, united by one goal: turning genetic data into decisions that matter.",
  },
];

export default function About() {
  return (
    <main className="about-page">


      {/* HERO */}
<AboutPageBanner/>
      {/* WHO WE ARE AND WHAT WE DO */}
      <section
        id="about-who-we-are"
        className="container-fluid who-we-are-section"
        aria-labelledby="who-we-are-heading"
      >
        <div className="split-grid">
          <motion.div
            className="split-text"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span className="tag" variants={fadeUp}>
              Who We Are and What We Do
            </motion.span>
            <motion.h2 id="who-we-are-heading" variants={fadeUp}>
              A genomics partner trusted across the whole pipeline
            </motion.h2>
            <motion.p className="lede" variants={fadeUp}>
              For over a decade, Leads Agri Genetics has supported breeders,
              researchers, and clinicians with the same rigor.
            </motion.p>
            <motion.p variants={fadeUp}>
              From marker-assisted selection in the field to variant calling
              in the lab, our sequencing and analysis platforms turn raw
              genetic data into decisions you can act on — with the accuracy
              science demands and the speed discovery deserves.
            </motion.p>
            <motion.a
              className="link-arrow"
              href="#about-who-we-serve"
              variants={fadeUp}
            >
              See who we serve
              <span aria-hidden="true">&rarr;</span>
            </motion.a>

            <motion.dl className="stats-strip" variants={fadeUp}>
              <div className="stat-item">
                <dt className="stat-label">Genomes Sequenced</dt>
                <dd className="stat-value">2M+</dd>
              </div>
              <div className="stat-item">
                <dt className="stat-label">Research Partners</dt>
                <dd className="stat-value">180+</dd>
              </div>
              <div className="stat-item">
                <dt className="stat-label">Countries Served</dt>
                <dd className="stat-value">25+</dd>
              </div>
              <div className="stat-item">
                <dt className="stat-label">Founded</dt>
                <dd className="stat-value">2008</dd>
              </div>
            </motion.dl>
          </motion.div>

          <motion.div
            className="split-media"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://picsum.photos/seed/lag-lab/720/560"
              alt="Scientist analyzing genomic sequencing data in the lab"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <OurHistory/>


      {/* OUR COMMITMENT TO PEOPLE, PLANET, AND PURPOSE */}
      <section
        id="about-commitment"
        className="container-fluid commitment-section"
        aria-labelledby="commitment-heading"
      >
        <motion.span
          className="tag"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          Our Commitment
        </motion.span>
        <motion.h2
          id="commitment-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          People, Planet, and Purpose
        </motion.h2>

        <motion.div
          className="commitment-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {commitments.map((item) => (
            <motion.article
              key={item.id}
              id={`about-commitment-${item.id}`}
              className="commitment-card"
              variants={fadeUp}
            >
              <div className="commitment-media">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a className="link-arrow" href={`#about-commitment-${item.id}`}>
                Learn more
                <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* OUR LEADERSHIP TEAM */}
      <section
        id="about-leadership"
        className="container-fluid leadership-section"
        aria-labelledby="leadership-heading"
      >
        <motion.span
          className="tag"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          Our Leadership Team
        </motion.span>
        <motion.h2
          id="leadership-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          Leadership that powers discovery
        </motion.h2>

        <motion.div
          className="leadership-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="leadership-photo">
            <img
              src="https://picsum.photos/seed/lag-ceo/200/200"
              alt="Portrait of the Leads Agri Genetics CEO"
              loading="lazy"
            />
          </div>
          <div className="leadership-copy">
            <blockquote>
              "We're uniquely positioned to move genomics forward across
              agriculture, research, and the clinic. I can't think of a more
              meaningful place to make an impact."
            </blockquote>
            <p className="leader-name">
              Jordan Whitfield
              <span className="leader-title">Chief Executive Officer</span>
            </p>
            <button type="button" className="btn btn-primary">
              Meet Our Leadership Team
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}