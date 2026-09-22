"use client";

import { motion } from "framer-motion";

export default function StatsBand() {
  const stats = [
    { number: "05", label: "projects shipped" },
    { number: "$2.29M", label: "revenue analyzed" },
    { number: "8wk", label: "AI & Sustainability Internship" },
  ];

  return (
    <section className="w-full bg-[var(--color-dark)] py-12 sm:py-16 px-6 sm:px-8 my-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="font-serif text-3xl sm:text-4xl text-[var(--color-bg)] font-normal">
              {stat.number}
            </div>
            <div className="text-xs font-sans text-[#a8a296] uppercase tracking-[0.08em] mt-2">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
