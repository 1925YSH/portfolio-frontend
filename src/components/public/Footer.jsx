import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 tracking-wider">
          Yash<span className="text-blue-500">Otwal</span>
        </h2>
        
        <div className="flex space-x-6 mb-8">
          <a href="https://github.com/1925YSH" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:text-white hover:-translate-y-1 transition-all duration-300 text-2xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yash-otwal-55137a258" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-gray-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:yashotwal777@gmail.com" className="text-slate-600 dark:text-gray-400 hover:text-red-400 hover:-translate-y-1 transition-all duration-300 text-2xl">
            <FaEnvelope />
          </a>
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Yash Otwal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
