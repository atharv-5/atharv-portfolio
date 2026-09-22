"use client";

import { motion } from "framer-motion";
import { educationList } from "@/content/education";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-dark)] mb-2">
          Education
        </h2>
        <div className="w-9 h-[1px] bg-[var(--color-gold)]" />
      </motion.div>

      <div className="space-y-6">
        {educationList.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 sm:p-8 bg-[#f7f5f0] border border-[var(--color-border)] rounded-[2px]"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 pb-4 border-b border-[var(--color-border)]">
              <div>
                <span className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.12em] flex items-center gap-1.5 mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>{edu.institution}</span>
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[var(--color-dark)]">
                  {edu.degree}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col sm:items-baseline md:items-end gap-1 text-xs text-[var(--color-muted-2)] shrink-0">
                <div className="flex items-center gap-1.5 text-[var(--color-dark)] font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-[var(--color-dark)] uppercase tracking-[0.08em] flex items-center gap-1.5 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                <span>Relevant Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs font-sans px-3 py-1 bg-[#ece8de] text-[var(--color-dark)] rounded-[2px]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
