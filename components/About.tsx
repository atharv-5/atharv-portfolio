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
          I am a Computer Science undergraduate at Parul University (expected graduation 2027) based in Vadodara, Gujarat, India. My focus is on Data Analytics, Data Science, and Machine Learning — backed by hands-on SQL, Python, and AWS cloud experience along with a strong foundation in Data Structures & Algorithms (DSA) and Database Management Systems (DBMS).
        </p>
        <p>
          I build and deploy Explainable AI (XGBoost, SHAP) platforms, policy compliance RAG systems, and full-stack applications end-to-end — moving from raw data pipelines and machine learning algorithms to interactive web dashboards. I am comfortable navigating ambiguous technical problems both independently and in collaborative teams.
        </p>
        <p>
          Beyond predictive modeling, I place strong emphasis on model interpretability (SHAP/LIME), regulation-aligned auditability (FCRA compliance), clean software architecture, and institutional presentation standards.
        </p>
      </motion.div>
    </section>
  );
}
