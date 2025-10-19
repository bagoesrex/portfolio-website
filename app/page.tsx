import BlogsSection from "@/components/home/blogs-section";
import HeroSection from "@/components/home/hero-section";
import PhotosSection from "@/components/home/photos-section";
import ProjectsSection from "@/components/home/projects-section";
import TechStackSection from "@/components/home/tech-stack-section";

export default function Home() {
  return (
    <main className="max-w-3xl min-w-sm mx-auto mt-1 pt-23 flex flex-col gap-10 pb-10 px-5 text-foreground">
      <HeroSection />

      <TechStackSection />

      <ProjectsSection />

      <BlogsSection />

      <PhotosSection />
    </main>
  );
}
