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
          I am a Computer Science undergraduate at Parul University (expected graduation 2027) based in Vadodara, Gujarat, India. My core focus is on Data Analytics, exploratory data analysis, and predictive modeling — leveraging SQL, Python, and Power BI to analyze complex datasets and extract business insights.
        </p>
        <p>
          I work across the data lifecycle — from writing structured PostgreSQL queries and engineering features to training machine learning classifiers (XGBoost, Random Forest) and building interactive dashboards.
        </p>
        <p>
          Beyond standard analytics, I place strong emphasis on model interpretability (SHAP), data cleaning, clean architecture, and clear visual communication.
        </p>
      </motion.div>
    </section>
  );
}
