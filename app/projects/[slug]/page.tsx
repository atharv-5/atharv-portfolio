import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ModelMetricsWidget from "@/components/ModelMetricsWidget";
import SqlQuerySandbox from "@/components/SqlQuerySandbox";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col justify-between selection:bg-[var(--color-gold)] selection:text-white">
      <div>
        <Nav />

        <article className="py-12 sm:py-20 px-6 sm:px-8 max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.08em] text-[var(--color-muted-2)] hover:text-[var(--color-dark)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <header className="mb-12 border-b border-[var(--color-border)] pb-8">
            <div className="text-xs font-semibold text-[var(--color-gold)] tracking-[0.12em] uppercase mb-3">
              {project.number} · {project.category}
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-dark)] leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.08em] text-[var(--color-dark)] pb-0.5 border-b border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.08em] text-[var(--color-dark)] pb-0.5 border-b border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Project</span>
                </a>
              )}
            </div>
          </header>

          <div className="space-y-12">
            <section>
              <h2 className="font-serif text-xl sm:text-2xl text-[var(--color-dark)] mb-3">
                Problem Statement
              </h2>
              <div className="w-8 h-[1px] bg-[var(--color-gold)] mb-4" />
              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl sm:text-2xl text-[var(--color-dark)] mb-3">
                Approach & Technical Execution
              </h2>
              <div className="w-8 h-[1px] bg-[var(--color-gold)] mb-4" />
              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                {project.approach}
              </p>
            </section>

            {/* Interactive Model Diagnostics Widget for ML projects */}
            {project.slug === "customer-churn-analysis" && (
              <section>
                <ModelMetricsWidget />
              </section>
            )}

            {/* Interactive SQL Sandbox for Sales Performance Dashboard & Churn projects */}
            {(project.slug === "sales-performance-dashboard" || project.slug === "customer-churn-analysis") && (
              <section>
                <SqlQuerySandbox />
              </section>
            )}

            <section>
              <h2 className="font-serif text-xl sm:text-2xl text-[var(--color-dark)] mb-3">
                Quantified Outcome
              </h2>
              <div className="w-8 h-[1px] bg-[var(--color-gold)] mb-4" />
              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                {project.result}
              </p>
            </section>

            <section className="pt-4 border-t border-[var(--color-border)]">
              <h3 className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.12em] mb-4">
                Technologies & Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-sans px-3 py-1 bg-[#ece8de] text-[var(--color-dark)] rounded-[2px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
