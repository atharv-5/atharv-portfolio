"use client";

import { motion } from "framer-motion";
import { projects } from "@/content/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedWork() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-dark)] mb-2">
          Featured work
        </h2>
        <div className="w-9 h-[1px] bg-[var(--color-gold)]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
