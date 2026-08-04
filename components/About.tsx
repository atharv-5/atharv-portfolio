"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-dark)] mb-2">
          About
        </h2>
        <div className="w-9 h-[1px] bg-[var(--color-gold)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl space-y-6 text-base text-[var(--color-muted)] leading-relaxed"
      >
        <p>
          I am a final-year B.Tech Computer Science & Engineering student at Parul University (expected graduation 2027). My journey began in full-stack software development, where I built complex user interfaces and REST APIs.
        </p>
        <p>
          Recognizing the pivotal role of quantitative modeling in financial markets and enterprise strategy, I pivoted toward Data Analytics, Machine Learning, and Financial Technology. My goal is to apply predictive modeling, statistical analysis, and generative AI to drive data-informed decision making at premier financial institutions like JPMorgan Chase, Morgan Stanley, and Citi.
        </p>
        <p>
          Beyond algorithms and SQL models, I place strong emphasis on model interpretability (SHAP/LIME), rigorous evaluation metrics, clean architecture, and institutional presentation standards.
        </p>
      </motion.div>
    </section>
  );
}
