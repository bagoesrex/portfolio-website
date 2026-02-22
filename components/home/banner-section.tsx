import MaxWidthWrapper from "../layout/max-width-wrapper";
import Image from "next/image";

export default function BannerSection() {
  return (
    <section id="banner">
      <MaxWidthWrapper className="space-y-4 pb-10">
        <div className="relative h-50 min-w-60 self-center md:h-90">
          <Image src="/images/home/chomusuke.webp" alt="Banner Image" fill className="rounded-md object-cover drop-shadow-2xl md:drop-shadow-xl" />
        </div>
        <p className="text-center text-sm font-light text-gray-600 italic">My Chomusuke Image 😸</p>
      </MaxWidthWrapper>
    </section>
  );
}
