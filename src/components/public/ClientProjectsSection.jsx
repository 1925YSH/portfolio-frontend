"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBuilding } from "react-icons/fa";

export default function ClientProjectsSection() {
  const clientProjects = [
    {
      id: 1,
      title: "Acropolis Educational Platform",
      description: "The official web platform for Acropolis Institute of Law, empowering future legal professionals with comprehensive academic resources, student life updates, and admission management.",
      techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
      repos: [
        { label: "Frontend", url: "https://github.com/developers-qualimatrix/acropolis" },
        { label: "Backend", url: "https://github.com/developers-qualimatrix/acropolis-backend" },
        { label: "AGI", url: "https://github.com/developers-qualimatrix/acropolis-main-website" }
      ],
      demo: "https://www.acropolislaw.in/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Gulf Healthcare Platform",
      description: "A robust healthcare management platform connecting clinics and patients. Provides a unified ecosystem for appointments, centralized reports vault, and autonomous clinical workflows.",
      techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
      repos: [
        { label: "App", url: "https://github.com/developers-qualimatrix/gulfhealthcare-app" },
        { label: "Frontend", url: "https://github.com/developers-qualimatrix/gulfhealthcare-platform-frontend" },
        { label: "Backend", url: "https://github.com/developers-qualimatrix/gulfhealthcare-platform-backend" }
      ],
      demo: "https://platform.gulfhealth.care/",
      color: "from-teal-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Skill Access",
      description: "An AI-driven talent assessment platform that bridges the gap between students, institutes, and corporates with smart assessments, real-time analytics, and scalable hiring workflows.",
      techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
      repos: [
        { label: "Frontend", url: "https://github.com/developers-qualimatrix/skillaccess-frontend" },
        { label: "Backend", url: "https://github.com/developers-qualimatrix/skillaccess-backend" }
      ],
      demo: "https://www.skillaccess.in/",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 4,
      title: "TechyMed AI",
      description: "The world's first agentic care engine. Deploys specialized AI agents that reason, coordinate, and execute clinic operations autonomously to eliminate manual administrative effort.",
      techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
      repos: [
        { label: "Frontend", url: "https://github.com/developers-qualimatrix/techymedai-frontend" },
        { label: "Backend", url: "https://github.com/developers-qualimatrix/techymedai-backend" }
      ],
      demo: "https://www.techymed.ai/",
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section id="client-projects" className="py-24 relative bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FaBuilding className="text-3xl text-blue-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Client Projects</h2>
          </div>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            Professional projects I worked on during my time as a Software Development Engineer at Qualimatrix Technologies Pvt Ltd.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {clientProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors group bg-white dark:bg-slate-900 shadow-sm hover:shadow-md"
            >
              {/* Project Image/Gradient Placeholder */}
              <div className={`h-2 relative w-full bg-gradient-to-r ${project.color}`}></div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400 bg-blue-500/10 p-2 rounded-full transition-colors">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>

                <p className="text-slate-600 dark:text-gray-400 text-base mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-gray-800">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Repositories:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.repos.map((repo, i) => (
                      <a
                        key={i}
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-sm font-medium px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                      >
                        <FaGithub className="mr-2" /> {repo.label}
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
