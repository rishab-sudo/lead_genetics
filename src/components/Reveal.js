// src/components/Reveal.jsx
import React from "react";
import { motion } from "framer-motion";

const Reveal = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 60,
  once = true,
  amount = 0.2, // % of element visible before triggering
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;