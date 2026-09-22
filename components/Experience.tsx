"use client";

import { motion } from "framer-motion";
import { experiences } from "@/content/experience";
import { Briefcase, Calendar, MapPin, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-dark)] mb-2">
          Experience & Internships
        </h2>
        <div className="w-9 h-[1px] bg-[var(--color-gold)]" />
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 sm:p-8 bg-[#f7f5f0] border border-[var(--color-border)] rounded-[2px] relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 border-b border-[var(--color-border)] pb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.12em]">
                    {exp.partner} × {exp.company}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[var(--color-dark)]">
                  {exp.role}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col sm:items-baseline md:items-end gap-1 text-xs text-[var(--color-muted-2)]">
                <div className="flex items-center gap-1.5 text-[var(--color-dark)] font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--color-border)]">
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-sans px-2.5 py-0.5 bg-[#ece8de] text-[var(--color-dark)] rounded-[2px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {exp.projectSlug && (
                <Link
                  href={`/projects/${exp.projectSlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.08em] text-[var(--color-dark)] hover:text-[var(--color-gold)] transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  <span>View AirLens Capstone Project →</span>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
