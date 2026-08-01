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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function HomeWork() {
  return (
    <section className="homework-section">
      <div className="container">
        <div className="section-heading">
          <span className="subtitle">Leads Genetics</span>
          <h2>Genomics Solutions</h2>
          <p>
            Advanced genomic technologies for agriculture, research, and
            clinical applications.
          </p>
        </div>

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
            >
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>

              <div className="card-overlay"></div>
              <div className="card-shine"></div>

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