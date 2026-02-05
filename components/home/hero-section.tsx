import Image from "next/image";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import { Button } from "../ui/button";
import Link from "next/link";
import SocialLinks from "../shared/social-links";
import { FaUser } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="flex items-center gap-10 pt-30 pb-20">
        <div className="flex flex-col gap-3.5">
          <h1 className="text-primary text-3xl font-extrabold">Hi, I&apos;m Bagus</h1>
          <p className="font-sans leading-7.5">
            A tech enthusiast with a strong interest in building responsive and interactive web applications. I enjoy experimenting with new
            technologies and creating clean user interfaces.
          </p>
          <div className="flex gap-5">
            <Button asChild className="px-4 py-5">
              <Link href="/about">
                <div className="flex items-center gap-3">
                  <FaUser />
                  <span>More About Me</span>
                </div>
              </Link>
            </Button>
            <SocialLinks />
          </div>
        </div>
        <div className="relative">
          <Image src="/images/home/elric.webp" alt="Hero Image" width={400} height={400} priority className="object-cover" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
