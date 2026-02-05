import { SKILLS } from "@/constants/skills";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import SkillCard from "./skill-card";

export default function SkillsSection() {
  return (
    <section id="skills">
      <MaxWidthWrapper className="space-y-4 pb-10">
        <h2 className="text-primary text-2xl font-extrabold">Skills</h2>
        <div className="flex max-w-135 flex-wrap gap-2.5">
          {SKILLS.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
