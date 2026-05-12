"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
             <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Who am I?</h3>
             <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                I am a passionate Full Stack Developer based in Indore, India. I specialize in building dynamic, responsive, and user-centric web applications using the MERN stack and Next.js.
             </p>
             <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                With a strong foundation in both frontend aesthetics and backend architecture, I aim to create seamless digital experiences. I am constantly learning and adapting to new technologies to stay ahead in the ever-evolving tech landscape.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
             {[
               { number: "1+", label: "Years Experience" },
               { number: "10+", label: "Projects Completed" },
               { number: "5+", label: "Technologies Mastered" },
               { number: "100%", label: "Dedication" }
             ].map((stat, i) => (
               <div key={i} className="glass-panel p-6 rounded-2xl text-center border border-slate-200 dark:border-gray-800 hover:border-blue-500/30 transition-colors">
                  <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">{stat.number}</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400">{stat.label}</p>
               </div>
             ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Education Journey</h3>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            { degree: "B.Tech in Computer Science", school: "Institute of Engineering & Science, IPS Academy Indore", year: "2021 – 2025", score: "CGPA: 8.4" },
            { degree: "Class 12th", school: "RHHS School, Zirapur", year: "2020 – 2021", score: "Percentage: 87%" },
            { degree: "Class 10th", school: "MTCH School, Khilchipur", year: "2018 – 2019", score: "Percentage: 88%" }
          ].map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between border border-slate-200 dark:border-gray-800 hover:border-purple-500/30 transition-colors group"
            >
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-purple-400 transition-colors">{edu.degree}</h4>
                <p className="text-slate-600 dark:text-gray-400 mb-3 md:mb-0">{edu.school}</p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-2">{edu.year}</span>
                <p className="text-slate-700 dark:text-gray-300 font-medium">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
