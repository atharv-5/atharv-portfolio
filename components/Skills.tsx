"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/content/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-dark)] mb-2">
          Skills & Technical Expertise
        </h2>
        <div className="w-9 h-[1px] bg-[var(--color-gold)]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="border-t border-[var(--color-border)] pt-4"
          >
            <h3 className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.12em] mb-4">
              {cat.category}
            </h3>
            <ul className="space-y-2">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm sm:text-base text-[var(--color-dark)] flex items-center justify-between border-b border-[var(--color-border)]/40 pb-2"
                >
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
