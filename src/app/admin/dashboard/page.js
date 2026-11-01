"use client";
import { apiUrl } from "@/lib/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function DashboardPage() {
  const [stats, setStats] = useState({ projects: 0, messages: 0 });

  useEffect(() => {
    // Quick fetch to get counts
    const fetchStats = async () => {
      try {
        const [projRes, msgRes] = await Promise.all([
          fetch(apiUrl("api/projects")),
          fetch(apiUrl("api/contact"))
        ]);
        const projData = await projRes.json();
        const msgData = await msgRes.json();
        setStats({ projects: projData.length || 0, messages: msgData.length || 0 });
      } catch (err) {
        console.error("Failed to fetch stats", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/admin/projects" className="block p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500 transition-colors group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white">Total Projects</h3>
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 text-xl">
              <FaProjectDiagram />
            </div>
          </div>
          <p className="text-4xl font-bold text-white">{stats.projects}</p>
        </Link>

        <Link href="/admin/messages" className="block p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500 transition-colors group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white">Messages Received</h3>
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-500 text-xl">
              <FaEnvelope />
            </div>
          </div>
          <p className="text-4xl font-bold text-white">{stats.messages}</p>
        </Link>
      </div>
    </div>
  );
}
