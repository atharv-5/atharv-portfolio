"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-[var(--color-border)]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-dark)] mb-2">
          Get in Touch
        </h2>
        <div className="w-9 h-[1px] bg-[var(--color-gold)]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-serif text-xl sm:text-2xl text-[var(--color-dark)] mb-4">
            ATHARV GEHLOD
          </h3>
          <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed mb-6">
            Computer Science Undergraduate | Data Analytics, ML & Explainable AI
          </p>

          <div className="space-y-4 text-sm text-[var(--color-dark)]">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
              <span>Vadodara, Gujarat, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
              <a href="mailto:atharvgehlod47@gmail.com" className="hover:text-[var(--color-gold)] transition-colors">
                atharvgehlod47@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
              <a href="tel:+919302053410" className="hover:text-[var(--color-gold)] transition-colors">
                +91 93020 53410
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 flex flex-col justify-center"
        >
          <a
            href="https://linkedin.com/in/atharv-gehlod-k05a24"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[#f7f5f0] border border-[var(--color-border)] rounded-[2px] flex items-center justify-between group hover:border-[var(--color-gold)] transition-colors"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-[var(--color-gold)]" />
              <div>
                <div className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.08em]">
                  LinkedIn
                </div>
                <div className="text-sm text-[var(--color-dark)] font-medium">
                  linkedin.com/in/atharv-gehlod-k05a24
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--color-muted-2)] group-hover:text-[var(--color-gold)] transition-colors" />
          </a>

          <a
            href="https://github.com/atharv-5"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[#f7f5f0] border border-[var(--color-border)] rounded-[2px] flex items-center justify-between group hover:border-[var(--color-gold)] transition-colors"
          >
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-[var(--color-gold)]" />
              <div>
                <div className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.08em]">
                  GitHub
                </div>
                <div className="text-sm text-[var(--color-dark)] font-medium">
                  github.com/atharv-5
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--color-muted-2)] group-hover:text-[var(--color-gold)] transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
