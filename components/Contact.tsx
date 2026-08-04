"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Eye } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Contact() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section id="contact" className="py-16 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-dark)] mb-2">
          Contact & Credentials
        </h2>
        <div className="w-9 h-[1px] bg-[var(--color-gold)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[#ece8de] p-8 sm:p-12 rounded-[2px] border border-[var(--color-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        <div className="max-w-xl">
          <h3 className="font-serif text-xl sm:text-2xl text-[var(--color-dark)] mb-3">
            Interested in collaboration or placement opportunities?
          </h3>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            I am actively seeking roles in Data Analytics, Quantitative Research, and Machine Learning. Feel free to preview my resume online or download a direct PDF copy.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          {/* Preview Resume Modal Trigger */}
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--color-dark)] text-[var(--color-bg)] hover:bg-[var(--color-gold)] transition-colors text-xs font-sans uppercase tracking-[0.08em] rounded-[2px] shadow-xs cursor-pointer"
          >
            <Eye className="w-4 h-4 text-[var(--color-gold)]" />
            <span>Preview Resume</span>
          </button>

          {/* Direct Download Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-dark)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors text-xs font-sans uppercase tracking-[0.08em] rounded-[2px]"
          >
            <FileText className="w-4 h-4" />
            <span>Download PDF</span>
          </a>

          <div className="flex items-center gap-2 justify-center">
            {/* GitHub Authentic SVG Icon */}
            <a
              href="https://github.com/atharv-5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-dark)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors rounded-[2px]"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn Authentic SVG Icon */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-dark)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors rounded-[2px]"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Email Icon */}
            <a
              href="mailto:atharvgehlod47@gmail.com"
              className="p-3 border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-dark)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors rounded-[2px]"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Resume Modal Component */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
}
