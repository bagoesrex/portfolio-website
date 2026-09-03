import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import QuotesSection from "@/components/home/QuotesSection";
import PageTransition from "@/components/layout/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <QuotesSection />
      </main>
    </PageTransition>
  );
}
