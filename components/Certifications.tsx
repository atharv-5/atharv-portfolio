"use client";

import { motion } from "framer-motion";
import { certifications, CERTIFICATES_REPO_URL, CREDLY_PROFILE_URL } from "@/content/certifications";
import { ExternalLink, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-dark)] mb-2">
            Certifications & Coursework
          </h2>
          <div className="w-9 h-[1px] bg-[var(--color-gold)]" />
        </div>

        <div className="flex flex-wrap items-center gap-4 self-start sm:self-auto">
          <a
            href={CREDLY_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.08em] text-[var(--color-dark)] pb-0.5 border-b border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-gold)]" />
            <span>Verify Credly Profile ↗</span>
          </a>
          <a
            href={CERTIFICATES_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.08em] text-[var(--color-dark)] pb-0.5 border-b border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
          >
            <Award className="w-3.5 h-3.5 text-[var(--color-gold)]" />
            <span>GitHub Repository ↗</span>
          </a>
        </div>
      </motion.div>

      <div className="divide-y divide-[var(--color-border)]">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-lg text-[var(--color-dark)] group-hover:text-[var(--color-gold)] transition-colors">
                  {cert.title}
                </h3>

                {/* Credly Direct Verification Badge Link */}
                {cert.credlyUrl && (
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#ece8de] text-[10px] font-sans text-[var(--color-dark)] hover:text-[var(--color-gold)] border border-[var(--color-border)] rounded-[2px] transition-colors"
                    title="Verify badge directly on Credly"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[var(--color-gold)]" />
                    <span>Credly Verified</span>
                  </a>
                )}

                {/* GitHub Asset Link */}
                {cert.githubAssetUrl && (
                  <a
                    href={cert.githubAssetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-muted-2)] hover:text-[var(--color-gold)] transition-colors p-0.5"
                    title="View Badge File on GitHub"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              <p className="text-sm text-[var(--color-muted)] mt-1 max-w-3xl">
                {cert.description}
              </p>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.08em]">
                {cert.issuer}
              </span>
              <div className="text-xs text-[var(--color-muted-2)] mt-0.5">
                {cert.durationOrDate}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
