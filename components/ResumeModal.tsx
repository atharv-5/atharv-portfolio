"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, ExternalLink, GraduationCap, Briefcase, Award, Code2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl?: string;
}

export default function ResumeModal({
  isOpen,
  onClose,
  resumeUrl = "/resume.pdf",
}: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-5xl h-[90vh] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[2px] shadow-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Top Bar Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-cream-block)] shrink-0">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-serif text-base text-[var(--color-dark)]">
                  Atharv Gehlod — Resume
                </h3>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[var(--color-muted-2)]">
                  Expected Graduation: 2027 · Vadodara, Gujarat
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={resumeUrl}
                download="Atharv_Gehlod_Resume.pdf"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--color-dark)] text-[var(--color-bg)] hover:bg-[var(--color-gold)] transition-colors text-xs font-sans uppercase tracking-[0.08em] rounded-[2px]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[var(--color-muted)] hover:text-[var(--color-dark)] transition-colors"
                title="Open PDF directly"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="p-2 text-[var(--color-muted)] hover:text-[var(--color-dark)] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 text-left bg-[var(--color-bg)] font-sans">
            {/* Header / Contact Info */}
            <div className="border-b border-[var(--color-border)] pb-6">
              <h1 className="font-serif text-3xl text-[var(--color-dark)] tracking-tight">
                ATHARV GEHLOD
              </h1>
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--color-gold)] font-semibold mt-1">
                Expected Graduation: 2027 · Computer Science Engineering
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--color-muted)] mt-2">
                <span>Vadodara, Gujarat, India</span>
                <span>•</span>
                <span>+91 93020 53410</span>
                <span>•</span>
                <a href="mailto:atharvgehlod47@gmail.com" className="hover:text-[var(--color-gold)]">
                  atharvgehlod47@gmail.com
                </a>
                <span>•</span>
                <a href="https://github.com/atharv-5" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)]">
                  github.com/atharv-5
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <section>
              <h2 className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.12em] mb-2 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Professional Summary</span>
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-dark)] leading-relaxed bg-[#ece8de]/60 p-4 border-l-2 border-[var(--color-gold)] rounded-r-[2px]">
                Computer Science undergraduate (expected graduation 2027) transitioning from full-stack development into Data Analytics, with hands-on SQL, NoSQL, and AWS cloud experience and a strong DSA/DBMS foundation. Co-built and deployed Athrion AI, owning backend, database, and AI pipeline integration; now building SQL- and Python-based data analytics projects involving data cleaning and dashboard visualization, and comfortable navigating ambiguous problems independently and in teams.
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.12em] mb-3 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </h2>
              <div className="border-l border-[var(--color-border)] pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-semibold text-[var(--color-dark)]">
                  <span>Parul University — Bachelor of Technology, Computer Science Engineering</span>
                  <span className="text-xs font-sans text-[var(--color-muted-2)] font-normal">2023 – 2027 (Expected: 2027)</span>
                </div>
                <div className="text-xs text-[var(--color-muted)]">Vadodara, Gujarat, India</div>
                <div className="text-xs text-[var(--color-muted)] mt-1">
                  <strong className="text-[var(--color-dark)]">Relevant Coursework:</strong> Data Structures & Algorithms, Web Technologies, Database Management Systems (DBMS), Cloud Computing, Software Engineering, Object-Oriented Programming.
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.12em] mb-3 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5" />
                <span>Technical Skills</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-[#ece8de]/40 p-3 rounded-[2px] border border-[var(--color-border)]">
                  <span className="font-semibold text-[var(--color-dark)] block mb-1">Languages:</span>
                  <span className="text-[var(--color-muted)]">SQL, Python, Java, JavaScript, HTML5, CSS3</span>
                </div>
                <div className="bg-[#ece8de]/40 p-3 rounded-[2px] border border-[var(--color-border)]">
                  <span className="font-semibold text-[var(--color-dark)] block mb-1">Data Analytics & Visualization:</span>
                  <span className="text-[var(--color-muted)]">Data Cleaning, Exploratory Data Analysis, Power BI, Excel</span>
                </div>
                <div className="bg-[#ece8de]/40 p-3 rounded-[2px] border border-[var(--color-border)]">
                  <span className="font-semibold text-[var(--color-dark)] block mb-1">Databases:</span>
                  <span className="text-[var(--color-muted)]">PostgreSQL, MongoDB, NoSQL data modeling, relational database design</span>
                </div>
                <div className="bg-[#ece8de]/40 p-3 rounded-[2px] border border-[var(--color-border)]">
                  <span className="font-semibold text-[var(--color-dark)] block mb-1">Frameworks & Tools:</span>
                  <span className="text-[var(--color-muted)]">React.js, Node.js, Express.js, Docker, Git, GitHub, Postman, VS Code</span>
                </div>
              </div>
              <div className="mt-2 text-xs text-[var(--color-muted)]">
                <strong className="text-[var(--color-dark)]">Problem Solving:</strong> Data Structures & Algorithms — solved 100+ problems on LeetCode.
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.12em] mb-3 flex items-center gap-2">
                <Award className="w-3.5 h-3.5" />
                <span>Certifications</span>
              </h2>
              <ul className="space-y-1.5 text-xs text-[var(--color-muted)] list-disc pl-5">
                <li><strong className="text-[var(--color-dark)]">Data Analytics Essentials</strong> — Cisco Networking Academy (data collection, cleaning, and visualization)</li>
                <li><strong className="text-[var(--color-dark)]">SQL and Relational Databases</strong> — IBM SkillsBuild (relational design and SQL querying)</li>
                <li><strong className="text-[var(--color-dark)]">NoSQL and DBaaS</strong> — IBM SkillsBuild (NoSQL data models and Database-as-a-Service)</li>
                <li><strong className="text-[var(--color-dark)]">Building Language Models & Cloud Fundamentals</strong> — AWS (cloud fundamentals and LLM deployment basics)</li>
              </ul>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.12em] mb-4">
                Key Projects
              </h2>
              <div className="space-y-5">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm font-semibold text-[var(--color-dark)]">
                    <span>Athrion AI — Interview Prep & Resume Analysis Platform</span>
                    <span className="text-xs text-[var(--color-gold)] font-normal">Deployed | Team Project Owner</span>
                  </div>
                  <div className="text-[11px] text-[var(--color-muted-2)] mb-2">
                    React 18, Vite, Node.js/Express, MongoDB, Groq (LLaMA 3.3 70B), OpenRouter, JWT
                  </div>
                  <ul className="space-y-1 text-xs text-[var(--color-muted)] list-disc pl-5">
                    <li>Co-built and deployed a full-stack platform combining AI mock interviews, an AI resume analyzer, and a performance analytics dashboard; owned backend architecture, database design, and AI pipeline integration.</li>
                    <li>Designed MongoDB/Mongoose schemas and RESTful APIs across auth, resume, interview, and dashboard modules; implemented JWT + bcrypt authentication with protected middleware.</li>
                    <li>Engineered a multi-tier AI pipeline with automatic failover (Groq LLaMA 3.3 70B → OpenRouter → local simulation) and built the resume-parsing pipeline (Multer + pdf-parse) that extracts skills and recommends target roles.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm font-semibold text-[var(--color-dark)]">
                    <span>Sales & Business Performance Dashboard</span>
                    <span className="text-xs text-[var(--color-gold)] font-normal">Completed</span>
                  </div>
                  <div className="text-[11px] text-[var(--color-muted-2)] mb-2">
                    Python (pandas, SQLAlchemy), PostgreSQL, Power BI
                  </div>
                  <ul className="space-y-1 text-xs text-[var(--color-muted)] list-disc pl-5">
                    <li>Built an end-to-end ETL pipeline to clean and load retail order data into PostgreSQL, then queried it to power an interactive Power BI dashboard.</li>
                    <li>Analyzed $2.29M in revenue across 4,922 orders and 793 customers; identified the West region as the top performer (31.4% of sales) and Technology as the top category ($836K).</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm font-semibold text-[var(--color-dark)]">
                    <span>Customer Churn Analysis & Retention Strategy</span>
                    <span className="text-xs text-[var(--color-gold)] font-normal">Completed</span>
                  </div>
                  <div className="text-[11px] text-[var(--color-muted-2)] mb-2">
                    Python (pandas, scikit-learn), Random Forest, SQL
                  </div>
                  <ul className="space-y-1 text-xs text-[var(--color-muted)] list-disc pl-5">
                    <li>Built an EDA and Random Forest classification pipeline on 7,043 telecom customers, finding a 26.54% overall churn rate and Contract Type as the top driver (42.7% churn for month-to-month vs. 2.8% for two-year contracts).</li>
                    <li>Found 53% of churned customers left within their first 12 months, and translated findings into 3 retention strategies (contract incentives, onboarding campaigns, tech-support bundling).</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3 border-t border-[var(--color-border)] bg-[var(--color-cream-block)] flex items-center justify-between text-xs text-[var(--color-muted-2)] shrink-0">
            <span>Official Resume · Atharv Gehlod</span>
            <div className="flex items-center gap-4">
              <a
                href={resumeUrl}
                download="Atharv_Gehlod_Resume.pdf"
                className="hover:text-[var(--color-dark)] font-semibold text-[var(--color-gold)] uppercase tracking-wider transition-colors"
              >
                Download PDF Copy
              </a>
              <button
                onClick={onClose}
                className="hover:text-[var(--color-dark)] uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
