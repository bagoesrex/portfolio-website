import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { LAYOUT } from "@/config/layout";
import RanpoSprite from "./RanpoSprite";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="pt-35 pb-20">
        <div className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:justify-between sm:gap-3">
          <div className="min-w-0 flex-1 space-y-5">
            <div className="space-y-1">
              <h1 className="font-mono text-2xl font-bold">Bagus Rahmawan</h1>
              <p>Tech Enthusiast</p>
            </div>
            <p>
              A tech enthusiast with a strong interest in building responsive
              and interactive web applications. I enjoy experimenting with new
              technologies and creating clean user interfaces.
            </p>
          </div>
          <div className="bg-red-600">
            <RanpoSprite />
          </div>
        </div>
      </MaxWidthWrapper>
      <hr
        className={cn(
          "mx-auto h-0.5 w-full border-0 bg-gray-200",
          LAYOUT.container,
        )}
      />
    </section>
  );
}
