"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Design", "Create", "Inspire"];

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  // Counter using requestAnimationFrame over ~2700ms
  useEffect(() => {
    let startTimestamp = null;
    const duration = 2700;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * 100);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(100);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  // Cycle rotating words every 900ms
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 sm:p-10 md:p-16 select-none"
    >
      {/* Top Left Label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-3"
      >
        <div className="w-2 h-2 rounded-full accent-gradient animate-pulse" />
        <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
          Portfolio
        </span>
      </motion.div>

      {/* Center Rotating Words */}
      <div className="relative flex items-center justify-center my-auto h-28">
        <AnimatePresence mode="wait">
          <motion.p
            key={WORDS[wordIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display italic text-text-primary/85 tracking-tight text-center"
          >
            {WORDS[wordIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Bottom Row: Counter & Progress */}
      <div className="flex flex-col items-end w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl sm:text-8xl md:text-9xl font-display text-text-primary tabular-nums tracking-tighter mb-4"
        >
          {String(count).padStart(3, "0")}
        </motion.div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[3px] bg-stroke/50 overflow-hidden">
        <div
          className="h-full accent-gradient transition-transform duration-75 ease-out origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 10px rgba(137, 170, 204, 0.45)",
          }}
        />
      </div>
    </motion.div>
  );
}

