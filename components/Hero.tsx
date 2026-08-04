"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 px-6 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-xs font-semibold text-[var(--color-gold)] tracking-[0.15em] uppercase mb-4">
          DATA ANALYTICS · MACHINE LEARNING
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--color-dark)] leading-[1.2] mb-6 max-w-2xl">
          From building interfaces to building the intelligence behind them
        </h1>
        <p className="text-base sm:text-lg text-[var(--color-muted)] max-w-xl leading-relaxed mb-8">
          I started in full-stack development, shipping products end-to-end. Now I build the models and pipelines that decide what those products should do next — with a focus on the rigor financial institutions demand.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-dark)] pb-1 border-b border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors group"
        >
          <span>View my work</span>
          <ArrowRight className="w-4 h-4 text-[var(--color-gold)] group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
