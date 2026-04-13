import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Habeeba Khanam | Game Designer & UI/UX Portfolio" },
      { name: "description", content: "Portfolio of Habeeba Khanam — Game Designer & UI/UX Designer specializing in Unity3D, AI applications, and interactive experiences." },
      { property: "og:title", content: "Habeeba Khanam | Game Designer & UI/UX Developer" },
      { property: "og:description", content: "Explore Habeeba's game design portfolio featuring 3D action games, 2D platformers, and AI-powered apps." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
