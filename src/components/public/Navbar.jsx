"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white dark:bg-slate-950 shadow-md border-b border-slate-200 dark:border-slate-800 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-500 tracking-wider">
            Yash<span className="text-slate-900 dark:text-white transition-colors duration-300">Otwal</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors text-sm font-medium uppercase tracking-wide">
                {link.name}
              </Link>
            ))}
            
            {/* Theme Toggle Desktop */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle Mobile */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-slate-600 dark:text-gray-300 hover:text-blue-600 p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            )}
            <button onClick={toggleMenu} className="text-slate-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white focus:outline-none text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 w-full border-t border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
