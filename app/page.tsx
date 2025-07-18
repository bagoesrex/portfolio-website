import BlogsSection from "@/components/home/blogs-section";
import HeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/projects-section";
import TechStackSection from "@/components/home/tech-stack-section";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto mt-1 pt-23 flex flex-col gap-10 pb-10 *:mx-5 text-gray-700">
      <HeroSection />

      <TechStackSection />

      <ProjectsSection />

      <BlogsSection />
    </main>
  );
}
