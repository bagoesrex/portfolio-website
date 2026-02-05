import Image from "next/image";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import { Button } from "../ui/button";
import Link from "next/link";
import SocialLinks from "../shared/social-links";
import { FaUser } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="space-y-6 pt-30 pb-20 md:space-y-1.5">
        <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center">
          <div className="flex flex-col gap-3.5">
            <h1 className="text-primary text-3xl font-extrabold">Hi, I&apos;m Bagus</h1>
            <p className="font-sans leading-7.5">
              A tech enthusiast with a strong interest in building responsive and interactive web applications. I enjoy experimenting with new
              technologies and creating clean user interfaces.
            </p>
          </div>
          <div className="relative aspect-square size-45 md:size-55">
            <Image src="/images/home/elric.webp" alt="Hero Image" fill priority className="scale-x-[-1] object-contain md:scale-x-100" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
          <Button asChild className="w-full px-4 py-5 md:w-fit">
            <Link href="/about">
              <div className="flex items-center gap-3">
                <FaUser />
                <span>More About Me</span>
              </div>
            </Link>
          </Button>
          <SocialLinks />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
