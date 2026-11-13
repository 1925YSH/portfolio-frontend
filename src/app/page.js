"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/public/LoadingScreen";
import Navbar from "@/components/public/Navbar";
import HomeSection from "@/components/public/HomeSection";
import ProjectsSection from "@/components/public/ProjectsSection";
import ClientProjectsSection from "@/components/public/ClientProjectsSection";
import SkillsSection from "@/components/public/SkillsSection";
import AboutSection from "@/components/public/AboutSection";
import ContactSection from "@/components/public/ContactSection";
import Footer from "@/components/public/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main className="min-h-screen bg-bg text-text-primary font-body selection:bg-[#4E85BF]/30 selection:text-white relative">
        <Navbar />
        <HomeSection />
        <ProjectsSection />
        <ClientProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
