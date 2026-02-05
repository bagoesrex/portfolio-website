import BlogSection from "@/components/home/blog-section";
import HeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/projects-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BlogSection />
      <ProjectsSection />
    </main>
  );
}
