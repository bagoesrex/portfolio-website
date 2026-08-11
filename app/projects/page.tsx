import type { Metadata } from "next";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import ProjectCard from "@/components/projects/project-card";
import { DUMMY_PROJECTS } from "@/constants/projects";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore selected web development projects built by Bagus Rahmawan with modern frontend technologies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: `${siteConfig.url}/projects`,
    title: "Projects | Bagus Rahmawan",
    description: "Explore selected web development projects built with modern frontend technologies.",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <MaxWidthWrapper className="space-y-4 pt-30 pb-18">
        <h1 className="text-primary text-2xl font-extrabold">Projects</h1>
        <div className="space-y-2">
          {DUMMY_PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
