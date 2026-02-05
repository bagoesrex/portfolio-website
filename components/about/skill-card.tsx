import { Skill } from "@/types/skill";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const { label, icon: Icon, className } = skill;

  return (
    <div
      className={cn(
        "bg-primary/2.5 flex items-center gap-2 rounded-[3.5px] border-[0.5px] border-gray-400 px-2.75 py-[8.5px] transition-colors",
        className,
      )}
    >
      <Icon className="size-3.5" />
      <span className="text-xs font-[460]">{label}</span>
    </div>
  );
}
