"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg py-8 border-t border-stroke/50 text-xs text-muted">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-text-primary/80 font-medium">
            Available for new opportunities
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/1925YSH"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yash-otwal-55137a258"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yashotwal777@gmail.com"
            className="hover:text-text-primary transition-colors"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <p className="font-light">
          &copy; {currentYear} Yash Otwal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
