"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaStripe,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiGoogle,
} from "react-icons/si";

const SKILL_ITEMS = [
  {
    name: "React 19",
    category: "Frontend",
    description: "Component architecture, hooks, state machines, and concurrent rendering.",
    icon: <FaReact className="text-[#61DAFB]" />,
  },
  {
    name: "Next.js 15",
    category: "Fullstack",
    description: "App Router, Server Actions, SSR, edge runtime, and performance optimizations.",
    icon: <SiNextdotjs className="text-white" />,
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Strict static typing, interfaces, generics, and compile-time correctness.",
    icon: <SiTypescript className="text-[#3178C6]" />,
  },
  {
    name: "Node.js & Express",
    category: "Backend",
    description: "Scalable event-driven REST APIs, middleware pipelines, and JWT authentication.",
    icon: <FaNodeJs className="text-[#5FA04E]" />,
  },
  {
    name: "MongoDB Atlas",
    category: "Database",
    description: "NoSQL document modeling, indexing strategies, and aggregation pipelines.",
    icon: <SiMongodb className="text-[#47A248]" />,
  },
  {
    name: "Tailwind CSS v4",
    category: "Styling",
    description: "Utility-first design systems, responsive layouts, and dark mode theming.",
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
  },
  {
    name: "Google Gemini 1.5",
    category: "AI & LLM",
    description: "Multimodal AI agent orchestration, structured outputs, and prompt chaining.",
    icon: <SiGoogle className="text-[#EA4335]" />,
  },
  {
    name: "AWS S3 & Cloud",
    category: "Infrastructure",
    description: "Cloud object storage, presigned URLs, and serverless hosting architecture.",
    icon: <FaAws className="text-[#FF9900]" />,
  },
  {
    name: "Stripe Payments",
    category: "Fintech",
    description: "Checkout flows, recurring subscriptions, customer portals, and webhooks.",
    icon: <FaStripe className="text-[#635BFF]" />,
  },
  {
    name: "Git & Version Control",
    category: "DevOps",
    description: "Trunk-based workflow, branch protection, semantic commits, and CI/CD pipelines.",
    icon: <FaGitAlt className="text-[#F05032]" />,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-bg py-20 md:py-28 relative border-t border-stroke/60">
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
              Explorations
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-text-primary tracking-tight">
            Technical <span className="font-display italic">ecosystem</span>
          </h2>

          <p className="text-sm md:text-base text-muted font-light mt-3 max-w-xl">
            A curated stack of modern languages, frameworks, and cloud infrastructure engineered for production reliability.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SKILL_ITEMS.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group p-6 rounded-2xl bg-surface/30 hover:bg-surface border border-stroke hover:border-[#89AACC]/40 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="text-3xl p-3 rounded-xl bg-bg border border-stroke group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-bg border border-stroke text-muted">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-[#89AACC] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
