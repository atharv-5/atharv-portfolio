"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#f7f5f0]/95 backdrop-blur-sm border-[#d8d3c8] shadow-xs"
          : "bg-transparent border-[#d8d3c8]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-[0.12em] text-[var(--color-dark)] uppercase hover:text-[var(--color-gold)] transition-colors"
        >
          ATHARV GEHLOD
        </Link>
        <nav className="flex items-center gap-5 sm:gap-8 text-xs tracking-[0.05em] uppercase text-[var(--color-muted-2)] font-sans">
          <a
            href="#projects"
            className="hover:text-[var(--color-dark)] transition-colors"
          >
            Projects
          </a>
          <a
            href="#insights"
            className="hover:text-[var(--color-dark)] transition-colors"
          >
            Insights
          </a>
          <a
            href="#skills"
            className="hover:text-[var(--color-dark)] transition-colors"
          >
            Skills
          </a>
          <a
            href="#certifications"
            className="hover:text-[var(--color-dark)] transition-colors"
          >
            Certifications
          </a>
          <a
            href="#about"
            className="hover:text-[var(--color-dark)] transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--color-dark)] transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
