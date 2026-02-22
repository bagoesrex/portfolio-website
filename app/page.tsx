import BlogSection from "@/components/home/blog-section";
import HeroSection from "@/components/home/hero-section";
import ProjectsSection from "@/components/home/projects-section";
import BannerSection from "@/components/home/banner-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BlogSection />
      <ProjectsSection />
      <BannerSection />
    </main>
  );
}
