import Link from "next/link";
import { Project } from "@/content/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block flex flex-col justify-between"
    >
      <div>
        {/* Placeholder image matching mockup reference */}
        <div className="w-full h-44 sm:h-52 bg-gradient-to-br from-[#3a3530] to-[var(--color-dark)] rounded-[2px] mb-5 flex items-center justify-center border border-black/10 group-hover:border-[var(--color-gold)]/40 transition-colors">
          <span className="font-serif text-sm text-[#a8a296] tracking-wider">
            {project.title}
          </span>
        </div>
        <div className="text-xs font-medium text-[var(--color-gold)] tracking-[0.08em] uppercase mb-2">
          {project.number} · {project.category}
        </div>
        <h3 className="font-serif text-xl text-[var(--color-dark)] mb-2 flex items-center justify-between group-hover:text-[var(--color-gold)] transition-colors">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-gold)]" />
        </h3>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
          {project.shortDescription}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-sans px-2 py-0.5 bg-[#ece8de] text-[var(--color-muted)] rounded-[2px]"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
