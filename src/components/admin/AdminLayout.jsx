"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { FaSignOutAlt, FaTachometerAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && pathname !== "/admin/login") {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  if (!isAuthenticated && pathname !== "/admin/login") return null;

  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">{children}</div>;
  }

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: <FaTachometerAlt /> },
    { name: "Projects", href: "/admin/projects", icon: <FaProjectDiagram /> },
    { name: "Messages", href: "/admin/messages", icon: <FaEnvelope /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col">
        <div className="h-16 flex items-center justify-center border-b border-slate-800">
          <h1 className="text-xl font-bold text-blue-500">Admin Panel</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === item.href ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 text-gray-400 hover:text-red-400 w-full px-4 py-3 rounded-lg transition-colors hover:bg-slate-800"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 md:hidden">
          <h1 className="text-xl font-bold text-blue-500">Admin Panel</h1>
          <button onClick={handleLogout} className="text-gray-400 hover:text-red-400">
            <FaSignOutAlt size={20} />
          </button>
        </header>
        {/* Mobile Nav (simple version) */}
        <div className="flex overflow-x-auto bg-slate-900 p-2 md:hidden border-b border-slate-800 gap-2">
          {navItems.map((item) => (
             <Link 
               key={item.name} 
               href={item.href}
               className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-colors ${
                 pathname === item.href ? "bg-blue-600 text-white" : "text-gray-400"
               }`}
             >
               {item.name}
             </Link>
          ))}
        </div>

        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
