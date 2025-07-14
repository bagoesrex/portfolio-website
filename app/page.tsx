import HeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/projects-section";
import TechStackSection from "@/components/home/tech-stack-section";

export default function Home() {
  return (
    <main className="max-w-3xl h-[150vh] mx-auto mt-1 pt-23 flex flex-col gap-10 *:mx-5">
      <HeroSection />

      <TechStackSection />

      <ProjectsSection />
    </main>
  );
}
