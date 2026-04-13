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
      { title: "Anjali | Game Designer & Developer Portfolio" },
      { name: "description", content: "Portfolio of Yeroju Anjali — Game Designer specializing in Unity3D, 3D/2D game development, and interactive experiences." },
      { property: "og:title", content: "Anjali | Game Designer & Developer" },
      { property: "og:description", content: "Explore Anjali's game design portfolio featuring 3D RPGs, arcade shooters, and creative 2D games." },
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
