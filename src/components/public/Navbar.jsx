"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Section scroll spy
      const sections = ["home", "projects", "client-projects", "skills", "about", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Works", href: "#projects", id: "projects" },
    { name: "Experience", href: "#client-projects", id: "client-projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "About", href: "#about", id: "about" },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/85 px-2 py-1.5 transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-black/25 border-white/20 bg-surface/95" : ""
        }`}
      >
        {/* 1. Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          aria-label="Home"
          className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full p-[1.5px] accent-gradient transition-transform duration-300 hover:scale-110 flex items-center justify-center group cursor-pointer"
        >
          <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-xs sm:text-[13px] text-text-primary tracking-tighter">
              YO
            </span>
          </div>
        </a>

        {/* 2. Divider */}
        <div className="w-px h-5 bg-stroke mx-1.5 hidden sm:block" />

        {/* 3. Nav Links */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`text-xs sm:text-sm rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-text-primary bg-stroke/60 font-medium"
                    : "text-muted hover:text-text-primary hover:bg-stroke/40"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-stroke mx-1.5" />

        {/* 5. "Say hi" button */}
        <a
          href="#contact"
          onClick={(e) => handleScrollTo(e, "#contact")}
          className="relative group text-xs sm:text-sm rounded-full cursor-pointer inline-flex items-center"
        >
          {/* Animated gradient ring behind on hover */}
          <span className="absolute -inset-0.5 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          <span className="bg-surface rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary font-medium flex items-center gap-1 transition-colors duration-200 group-hover:bg-bg">
            <span>Say hi</span>
            <span className="text-[11px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </span>
        </a>
      </nav>
    </header>
  );
}
