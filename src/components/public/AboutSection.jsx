"use client";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const STATS = [
  { value: "1+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "100%", label: "Client Dedication" },
  { value: "5+", label: "Tech Stacks Mastered" },
];

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    school: "Institute of Engineering & Science, IPS Academy Indore",
    year: "2021 – 2025",
    score: "CGPA: 8.4",
  },
  {
    degree: "Class 12th (Senior Secondary)",
    school: "RHHS School, Zirapur",
    year: "2020 – 2021",
    score: "Percentage: 87%",
  },
  {
    degree: "Class 10th (Secondary School)",
    school: "MTCH School, Khilchipur",
    year: "2018 – 2019",
    score: "Percentage: 88%",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-bg py-20 md:py-28 relative border-t border-stroke/60">
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
              Background & Journey
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-text-primary tracking-tight">
            About <span className="font-display italic">myself</span>
          </h2>

          <p className="text-sm md:text-base text-muted font-light mt-3 max-w-xl">
            Passionate about turning complex engineering problems into intuitive, high-performance digital experiences.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-3xl bg-surface/30 border border-stroke text-center relative overflow-hidden group hover:bg-surface transition-colors"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display text-text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm text-muted font-light">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Bio & Philosophy Card */}
        <div className="rounded-3xl bg-surface/20 border border-stroke p-8 sm:p-10 md:p-12 mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary mb-5">
            Engineering with architectural integrity.
          </h3>
          <div className="space-y-4 text-sm sm:text-base text-muted font-light leading-relaxed max-w-3xl">
            <p>
              I am a dedicated Full Stack Developer based in Indore, India. I specialize in designing and engineering dynamic, responsive, and user-centric web applications utilizing modern technologies across the MERN ecosystem and Next.js.
            </p>
            <p>
              With a solid foundation in both interface nuance and backend system design, I aim to create coherent digital products that deliver measurable real-world value.
            </p>
          </div>
        </div>

        {/* Education Journey */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FaGraduationCap className="text-[#89AACC] text-lg" />
            <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary">
              Academic foundation
            </h3>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 sm:p-8 rounded-2xl bg-surface/30 hover:bg-surface border border-stroke transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-lg sm:text-xl font-medium text-text-primary group-hover:text-[#89AACC] transition-colors mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted font-light">{edu.school}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted bg-bg px-3 py-1 rounded-full border border-stroke">
                    {edu.year}
                  </span>
                  <span className="text-xs font-semibold text-[#89AACC] bg-[#4E85BF]/10 px-3 py-1 rounded-full border border-[#4E85BF]/20">
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
