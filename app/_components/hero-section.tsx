import Image from "next/image";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Button } from "../../components/ui/button";
import { User } from "lucide-react";
import SocialMedia from "../../components/shared/social-media";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section id="hero" className="flex flex-col items-center">
            <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-6 max-w-4xl w-full">
                <div className="flex-1 text-left">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
                        Hi, I&apos;m Bagus
                    </h1>
                    <h2 className="text-xl font-semibold text-primary">
                        Fullstack Developer
                    </h2>
                    <p className="leading-relaxed">
                        A tech enthusiast with a strong interest in building responsive and interactive web applications. I enjoy experimenting with new technologies and creating clean user interfaces.
                    </p>
                    <div className="flex flex-col md:flex-row mt-2 items-start md:items-center gap-2 md:gap-3">
                        <Link href="/about">
                            <Button asChild className="text-sm">
                                <span>
                                    <User className="mr-2 h-4 w-4" />
                                    More About Me
                                </span>
                            </Button>
                        </Link>
                        <SocialMedia />
                    </div>
                </div>

                <div className="flex justify-start md:justify-center items-center w-60 py-1">
                    <div className="w-50">
                        <AspectRatio ratio={1}>
                            <Image
                                src="/images/home/elric.webp"
                                alt="Elric"
                                fill
                                className="object-contain md:scale-x-100 scale-x-[-1]"
                                priority
                            />
                        </AspectRatio>
                    </div>
                </div>
            </div>
        </section>
    );
}
