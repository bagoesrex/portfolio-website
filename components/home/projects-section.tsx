import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import { Button } from "../ui/button";
import { DUMMY_PROJECTS } from "@/constants/projects";
import ProjectCard from "../projects/project-card";

export default function ProjectsSection() {
  const featuredProjects = [...DUMMY_PROJECTS].slice(0, 3);

  return (
    <section id="projects">
      <MaxWidthWrapper className="space-y-4 pb-18">
        <div className="flex w-full flex-col gap-3.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Featured</p>
              <h2 className="text-primary text-2xl font-extrabold">Projects</h2>
            </div>
            <Button asChild className="px-4 py-5">
              <Link href="/projects">
                <div className="flex items-center gap-3">
                  <FaArrowRight />
                  <span>View All</span>
                </div>
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
