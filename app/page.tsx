import HeroSection from "@/app/_components/hero-section";
import PhotosSection from "@/app/_components/photos-section";
import ProjectsSection from "@/app/_components/projects-section";
import TechStackSection from "@/app/_components/tech-stack-section";
import BlogSection from "./_components/blog-section";

export default function Home() {
  return (
    <main className="max-w-3xl min-w-sm mx-auto mt-1 pt-23 flex flex-col gap-10 pb-10 px-5 text-foreground">
      <HeroSection />

      <TechStackSection />

      <ProjectsSection />

      <BlogSection />

      <PhotosSection />
    </main>
  );
}
