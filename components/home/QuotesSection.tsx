import Image from "next/image";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { LAYOUT } from "@/config/layout";
import { cn } from "@/lib/utils";

export default function QuotesSection() {
  return (
    <section id="quotes">
      <MaxWidthWrapper className="space-y-6 pt-5 pb-10">
        <div className="pointer-events-none flex items-center justify-center select-none">
          <Image
            src={"/images/about/edward.webp"}
            alt={"Exuivalent Exchange Image"}
            width={500}
            height={500}
            draggable={false}
          />
        </div>
      </MaxWidthWrapper>
      <hr
        className={cn(
          "mx-auto w-[93%] border-t-2 border-dotted border-gray-200",
          LAYOUT.container,
        )}
      />
    </section>
  );
}
