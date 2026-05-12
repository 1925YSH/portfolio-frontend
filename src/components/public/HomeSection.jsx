"use client";
import { motion } from "framer-motion";

export default function HomeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 50 } },
  };

  const blobVariants = {
    animate: {
      y: [0, -30, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration with floating animation */}
      <motion.div variants={blobVariants} animate="animate" className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-300/30 dark:bg-blue-600/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-60" />
      <motion.div variants={blobVariants} animate="animate" style={{ animationDelay: '-4s' }} className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.p 
            variants={itemVariants}
            className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] mb-4 text-sm md:text-base uppercase"
          >
            Hello, World!
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-slate-900 dark:text-slate-900 dark:text-white tracking-tight"
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-purple-500">Yash Otwal</span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-4xl text-slate-600 dark:text-slate-700 dark:text-gray-300 mb-8 font-light"
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-slate-600 dark:text-slate-600 dark:text-gray-400 mb-10 text-lg md:text-xl leading-relaxed"
          >
            I build robust, scalable, and beautiful web applications. 
            Passionate about turning complex problems into simple, elegant, and intuitive digital experiences.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#projects" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-slate-900 dark:text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full border-2 border-slate-300 dark:border-gray-600 hover:border-slate-800 dark:hover:border-gray-400 text-slate-700 dark:text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-slate-900 dark:text-white font-medium transition-all duration-300 bg-white/50 dark:bg-transparent backdrop-blur-sm">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
