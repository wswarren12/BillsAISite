"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusColors: Record<Project["status"], string> = {
  Live: "bg-green-100 text-green-700",
  Beta: "bg-amber-100 text-amber-700",
  "In Development": "bg-blue-100 text-blue-700",
  Experiment: "bg-purple-100 text-purple-700",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="mb-4 flex items-start justify-between">
        <span className="text-4xl">{project.emoji}</span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            statusColors[project.status]
          }`}
        >
          {project.status}
        </span>
      </div>

      <h3 className="mb-1 text-xl font-bold text-slate-900">{project.name}</h3>
      <p className="mb-3 text-sm font-medium text-indigo-600">
        {project.tagline}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-slate-600">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
