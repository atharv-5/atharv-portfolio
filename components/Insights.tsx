"use client";

import { motion } from "framer-motion";
import { articles } from "@/content/insights";
import { BookOpen, ArrowUpRight } from "lucide-react";

export default function Insights() {
  return (
    <section id="insights" className="py-16 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-dark)] mb-2">
          Insights & Technical Methodology
        </h2>
        <div className="w-9 h-[1px] bg-[var(--color-gold)]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-[#ece8de]/40 p-6 border border-[var(--color-border)] rounded-[2px] flex flex-col justify-between group hover:border-[var(--color-gold)] transition-colors"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[var(--color-gold)] font-semibold tracking-[0.08em] uppercase mb-2">
                <span>{article.number} · {article.category}</span>
                <span className="text-[var(--color-muted-2)] font-normal lowercase">{article.readTime}</span>
              </div>

              <h3 className="font-serif text-lg text-[var(--color-dark)] mb-3 leading-snug group-hover:text-[var(--color-gold)] transition-colors">
                {article.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                {article.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--color-border)]/60">
              <div className="text-[11px] font-sans font-semibold text-[var(--color-dark)] mb-2">
                <span className="text-[var(--color-gold)]">Key Takeaway: </span>
                <span className="font-normal text-[var(--color-muted)]">{article.keyTakeaway}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-sans px-2 py-0.5 bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-muted)] rounded-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
