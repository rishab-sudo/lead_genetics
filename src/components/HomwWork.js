import React from "react";
import { motion } from "framer-motion";
import "./HomeWork.css";

const cards = [
  {
    title: "Agri Genomics",
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Research Genomics",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Clinical Genomics",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
  },
];

/* Container animation */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.15,
    },
  },
};

/* Card animation - coming from down */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 0.9,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function HomeWork() {
  return (
    <section className="homework-section">
      <div className="container">
        {/* Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="subtitle">Leads Genetics</span>
          <h2>Genomics Solutions</h2>
          <p>
            Advanced genomic technologies for agriculture, research, and
            clinical applications.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="homework-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="homework-card"
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              {/* Background image */}
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>

              {/* Overlay */}
              <div className="card-overlay"></div>

              {/* Shine effect */}
              <div className="card-shine"></div>

              {/* Content */}
              <div className="card-content">
                <span className="card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{card.title}</h3>

                <p>
                  Precision genomics powered by advanced sequencing and
                  bioinformatics.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HomeWork;