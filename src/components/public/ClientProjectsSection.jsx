"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBuilding } from "react-icons/fa";

const CLIENT_PROJECTS = [
  {
    id: 1,
    title: "Acropolis Educational Platform",
    role: "Full Stack Development Engineer",
    company: "Qualimatrix Technologies Pvt Ltd",
    description: "The official web platform for Acropolis Institute of Law, empowering future legal professionals with comprehensive academic resources, student life updates, and admission management.",
    techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    repos: [
      { label: "Frontend", url: "https://github.com/developers-qualimatrix/acropolis" },
      { label: "Backend", url: "https://github.com/developers-qualimatrix/acropolis-backend" },
      { label: "AGI", url: "https://github.com/developers-qualimatrix/acropolis-main-website" },
    ],
    demo: "https://www.acropolislaw.in/",
  },
  {
    id: 2,
    title: "Gulf Healthcare Platform",
    role: "Full Stack Development Engineer",
    company: "Qualimatrix Technologies Pvt Ltd",
    description: "A robust healthcare management platform connecting clinics and patients. Provides a unified ecosystem for appointments, centralized reports vault, and autonomous clinical workflows.",
    techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    repos: [
      { label: "App", url: "https://github.com/developers-qualimatrix/gulfhealthcare-app" },
      { label: "Frontend", url: "https://github.com/developers-qualimatrix/gulfhealthcare-platform-frontend" },
      { label: "Backend", url: "https://github.com/developers-qualimatrix/gulfhealthcare-platform-backend" },
    ],
    demo: "https://platform.gulfhealth.care/",
  },
  {
    id: 3,
    title: "Skill Access",
    role: "Full Stack Development Engineer",
    company: "Qualimatrix Technologies Pvt Ltd",
    description: "An AI-driven talent assessment platform that bridges the gap between students, institutes, and corporates with smart assessments, real-time analytics, and scalable hiring workflows.",
    techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    repos: [
      { label: "Frontend", url: "https://github.com/developers-qualimatrix/skillaccess-frontend" },
      { label: "Backend", url: "https://github.com/developers-qualimatrix/skillaccess-backend" },
    ],
    demo: "https://www.skillaccess.in/",
  },
  {
    id: 4,
    title: "TechyMed AI",
    role: "Full Stack Development Engineer",
    company: "Qualimatrix Technologies Pvt Ltd",
    description: "The world's first agentic care engine. Deploys specialized AI agents that reason, coordinate, and execute clinic operations autonomously to eliminate manual administrative effort.",
    techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    repos: [
      { label: "Frontend", url: "https://github.com/developers-qualimatrix/techymedai-frontend" },
      { label: "Backend", url: "https://github.com/developers-qualimatrix/techymedai-backend" },
    ],
    demo: "https://www.techymed.ai/",
  },
];

export default function ClientProjectsSection() {
  return (
    <section id="client-projects" className="bg-bg py-20 md:py-28 relative border-t border-stroke/60">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
              Client Engagements
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-text-primary tracking-tight">
            Industry <span className="font-display italic">experience</span>
          </h2>

          <p className="text-sm md:text-base text-muted font-light mt-3 max-w-xl">
            High-impact production platforms engineered during my tenure at Qualimatrix Technologies Pvt Ltd.
          </p>
        </motion.div>

        {/* Horizontal Project List */}
        <div className="space-y-5 md:space-y-6">
          {CLIENT_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-[28px] sm:rounded-[36px] bg-surface/30 hover:bg-surface border border-stroke p-6 sm:p-8 md:p-10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover gradient wash */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#89AACC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left Info */}
                <div className="flex-1 max-w-2xl">
                  {/* Badge Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#89AACC] font-medium">
                      <FaBuilding className="text-[11px]" />
                      {project.company}
                    </span>
                    <span className="text-stroke">•</span>
                    <span className="text-xs text-muted font-light">{project.role}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary group-hover:text-[#89AACC] transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-light mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-3 py-1 rounded-full bg-bg/80 border border-stroke text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-stroke/50">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-text-primary bg-text-primary/10 hover:bg-text-primary hover:text-bg rounded-full px-5 py-2.5 transition-all duration-200"
                    >
                      <span>Live Site</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}

                  {/* Multi-repo Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.repos.map((repo, i) => (
                      <a
                        key={i}
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-text-primary bg-bg/60 hover:bg-bg border border-stroke rounded-full px-3 py-1.5 transition-colors"
                      >
                        <FaGithub className="text-[11px]" />
                        <span>{repo.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
