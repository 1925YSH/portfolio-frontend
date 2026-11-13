"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { apiUrl } from "@/lib/api";

const SEED_PROJECTS = [
  {
    _id: "seed-career-os",
    title: "AI CareerOS",
    description: "An autonomous career intelligence operating system featuring transparent hybrid AI job matching, autonomous career portal web ingestion, an ATS resume diagnostic center, 7-day interview roadmaps, employer recruitment pipelines, and Stripe monetization.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "AWS S3", "Gemini 1.5", "Stripe"],
    image: "/projects/career-os.jpg",
    github: "https://github.com/1925YSH/careerOS-frontend, https://github.com/1925YSH/careerOs-backend",
    demo: "https://career-os.vercel.app",
  },
  {
    _id: "seed-food-app",
    title: "Food Delivery App",
    description: "A full-featured food ordering and delivery ecosystem with cart mechanics, restaurant catalog, live order status updates, and interactive user reviews.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/food-delivery.jpg",
    github: "https://github.com/1925YSH/FOOD-App",
    demo: "https://food-app-blush-eight.vercel.app/",
  },
  {
    _id: "seed-quick-ai",
    title: "Quick.ai",
    description: "An intelligent generative workspace integrating multimodal AI workflows, automated prompt engineering, and conversational tool use.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini API"],
    image: "/projects/quick-ai.jpg",
    github: "https://github.com/1925YSH/QuickAi",
    demo: "https://quick-ai-client-gold.vercel.app",
  },
  {
    _id: "seed-e-agro",
    title: "E-Agro Platform",
    description: "Direct-to-consumer agricultural commerce platform empowering farmers with market price discovery, verified crop listings, and transparent logistics.",
    techStack: ["MERN Stack", "Tailwind CSS", "REST API"],
    image: "/projects/e-agro.jpg",
    github: "https://github.com/Yashraj1925/E-Agro-MERN",
    demo: "https://eagro.vercel.app/",
  },
  {
    _id: "seed-weather-app",
    title: "Weather Pulse",
    description: "Real-time atmospheric intelligence dashboard providing hourly forecasts, radar visualization, precipitation metrics, and location lookups.",
    techStack: ["React", "OpenWeather API", "CSS Modules"],
    image: "/projects/weather-app.jpg",
    github: "https://github.com/1925YSH/Weather-app",
    demo: "https://1925ysh.github.io/Weather-app/",
  },
  {
    _id: "seed-gym-page",
    title: "FitPulse Gym Landing",
    description: "High-conversion fitness center landing experience with dynamic membership calculators, trainer showcases, and class reservation booking.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Animation"],
    image: "/projects/gym-project.jpg",
    github: "https://github.com/1925YSH/GYM-Project",
    demo: "https://1925ysh.github.io/GYM-Project/",
  },
];

// Helper to determine the best fallback image by project title
function getProjectFallbackImage(title = "") {
  const t = title.toLowerCase();
  if (t.includes("career")) return "/projects/career-os.jpg";
  if (t.includes("food")) return "/projects/food-delivery.jpg";
  if (t.includes("quick")) return "/projects/quick-ai.jpg";
  if (t.includes("weather")) return "/projects/weather-app.jpg";
  if (t.includes("gym")) return "/projects/gym-project.jpg";
  if (t.includes("agro")) return "/projects/e-agro.jpg";
  return "/projects/career-os.jpg";
}

// Helper to resolve the correct URL for an image
function resolveProjectImageUrl(project) {
  if (!project.image) {
    return getProjectFallbackImage(project.title);
  }
  const clean = project.image.replace(/\\/g, "/").trim();
  if (clean.startsWith("http://") || clean.startsWith("https://")) {
    return clean;
  }
  if (clean.startsWith("/")) {
    return clean;
  }
  // If it refers to public projects or uploads
  if (clean.startsWith("projects/") || clean.startsWith("uploads/")) {
    return `/${clean}`;
  }
  return `/${clean}`;
}

// Helper to get demo link with smart fallbacks
function getProjectDemoUrl(project) {
  if (project.demo && project.demo.trim()) {
    return project.demo.trim();
  }
  const t = (project.title || "").toLowerCase();
  if (t.includes("career")) return "https://career-os.vercel.app";
  if (t.includes("food")) return "https://food-app-blush-eight.vercel.app/";
  if (t.includes("quick")) return "https://quick-ai-client-gold.vercel.app";
  if (t.includes("weather")) return "https://1925ysh.github.io/Weather-app/";
  if (t.includes("gym")) return "https://1925ysh.github.io/GYM-Project/";
  if (t.includes("agro")) return "https://eagro.vercel.app/";

  // Fallback to first github link if no demo URL exists
  if (project.github) {
    const firstLink = typeof project.github === "string" ? project.github.split(/[\s,]+/)[0] : project.github[0];
    if (firstLink) return firstLink;
  }
  return "#";
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState(SEED_PROJECTS);

  useEffect(() => {
    fetch(apiUrl("api/projects"))
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Merge with fallback seed data if any fields are missing
          const merged = data.map((item) => {
            const seedMatch = SEED_PROJECTS.find(
              (s) => s.title.toLowerCase().split(" ")[0] === item.title.toLowerCase().split(" ")[0]
            );
            return {
              ...item,
              demo: item.demo || seedMatch?.demo || getProjectDemoUrl(item),
              image: item.image || seedMatch?.image || getProjectFallbackImage(item.title),
            };
          });
          setProjects(merged);
        }
      })
      .catch((err) => {
        console.warn("Using seeded projects fallback:", err.message);
      });
  }, []);

  return (
    <section id="projects" className="bg-bg py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Selected Work
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-text-primary tracking-tight">
              Featured <span className="font-display italic">projects</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted font-light mt-3 max-w-lg">
              A selection of projects I&apos;ve worked on, from concept to launch.
            </p>
          </div>

          {/* Desktop "View all work" button */}
          <a
            href="https://github.com/1925YSH?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-text-primary border border-stroke rounded-full px-6 py-3 hover:border-transparent hover:bg-surface transition-all duration-300 relative group"
          >
            <span className="absolute -inset-0.5 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <span>View all work</span>
            <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, index) => {
            // Alternate spans: 7 / 5 / 5 / 7
            const isWide = index % 4 === 0 || index % 4 === 3;
            const colSpan = isWide ? "md:col-span-7" : "md:col-span-5";

            const imageUrl = resolveProjectImageUrl(project);
            const demoUrl = getProjectDemoUrl(project);

            return (
              <motion.div
                key={project._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className={`${colSpan} group relative rounded-3xl overflow-hidden border border-stroke bg-surface min-h-[380px] md:min-h-[460px] flex flex-col justify-end p-6 md:p-8`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt={project.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getProjectFallbackImage(project.title);
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
                  />
                  {/* Halftone Pattern Overlay */}
                  <div className="absolute inset-0 halftone-overlay opacity-20 mix-blend-multiply pointer-events-none" />
                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/65 to-transparent" />
                </div>

                {/* Default Bottom Content (Visible when not hovering) */}
                <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary">
                      {project.title}
                    </h3>
                    {demoUrl && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#89AACC] font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                        Live Demo ↗
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-muted line-clamp-2 max-w-md font-light mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {Array.isArray(project.techStack) &&
                      project.techStack.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    {Array.isArray(project.techStack) && project.techStack.length > 4 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-muted">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 z-20 bg-bg/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between">
                  {/* Top Bar: Pill (left) + Live Demo Button (right - highlighted by user) */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="relative inline-flex items-center">
                      <span className="absolute -inset-0.5 rounded-full accent-gradient animate-gradient-shift -z-10" />
                      <span className="bg-bg rounded-full px-4 py-1.5 text-xs text-text-primary font-medium tracking-wide">
                        View — <span className="font-display italic">{project.title}</span>
                      </span>
                    </div>

                    {/* LIVE DEMO BUTTON (Always visible at top-right on hover) */}
                    {demoUrl && (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-primary bg-blue-600/30 hover:bg-blue-600/60 border border-blue-400/40 rounded-full px-4 py-1.5 transition-all duration-200 hover:scale-105 shadow-md shadow-blue-500/10"
                      >
                        <span>Live Demo</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}
                  </div>

                  {/* Center Content: Full description & Tech Stack */}
                  <div className="my-auto py-3">
                    <h4 className="text-2xl sm:text-3xl font-display italic text-text-primary mb-2.5">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-primary/75 leading-relaxed font-light mb-4 line-clamp-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {Array.isArray(project.techStack) &&
                        project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full bg-surface border border-stroke text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Bottom Bar: Action Buttons (Both Demo & GitHub Repos) */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-stroke">
                    {/* Secondary Live Demo Button */}
                    {demoUrl && (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full px-4 py-2 transition-all hover:scale-105 shadow-sm"
                      >
                        <FaExternalLinkAlt className="text-[10px]" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {/* GitHub Buttons */}
                    {project.github && (() => {
                      const links = (typeof project.github === "string"
                        ? project.github.split(/[\s,]+/)
                        : project.github
                      ).filter(Boolean);

                      if (links.length === 1) {
                        return (
                          <a
                            href={links[0]}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-medium text-text-primary border border-stroke bg-surface/80 hover:bg-surface rounded-full px-4 py-2 transition-all hover:scale-105"
                          >
                            <FaGithub className="text-sm" />
                            <span>Code Repository</span>
                          </a>
                        );
                      }

                      return links.map((link, idx) => {
                        const isFrontend = /frontend/i.test(link);
                        const isBackend = /backend/i.test(link);
                        const label = isFrontend
                          ? "Frontend Repo"
                          : isBackend
                          ? "Backend Repo"
                          : `Repo ${idx + 1}`;
                        return (
                          <a
                            key={idx}
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-text-primary border border-stroke bg-surface/80 hover:bg-surface rounded-full px-3.5 py-1.5 transition-all hover:scale-105"
                          >
                            <FaGithub className="text-xs" />
                            <span>{label}</span>
                          </a>
                        );
                      });
                    })()}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
