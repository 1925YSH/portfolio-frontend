import Navbar from "@/components/public/Navbar";
import HomeSection from "@/components/public/HomeSection";
import AboutSection from "@/components/public/AboutSection";
import SkillsSection from "@/components/public/SkillsSection";
import ProjectsSection from "@/components/public/ProjectsSection";
import ClientProjectsSection from "@/components/public/ClientProjectsSection";
import ContactSection from "@/components/public/ContactSection";
import Footer from "@/components/public/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-blue-500 selection:text-slate-900 dark:text-white">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ClientProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
