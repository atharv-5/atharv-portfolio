import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border)] py-8 px-6 sm:px-8 mt-16 text-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[var(--color-muted-2)]">
        <span className="uppercase tracking-[0.08em] font-medium">
          Built by Atharv · 2026
        </span>
        <div className="flex items-center gap-6 tracking-[0.05em] uppercase">
          <a
            href="https://github.com/atharv-5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-dark)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-dark)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
