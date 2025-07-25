import { Calendar, MapPinned } from "lucide-react";
import SocialMedia from "../shared/social-media";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export default function IntroSection() {
    return (
        <section id="intro" className="flex flex-col gap-5">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col flex-4/6 gap-3">
                    <h1 className="text-2xl font-bold font-sans text-primary">
                        Hi, I’m Bagus Rahmawan from Semarang. I love building, breaking, and fixing the web. one line of code at a time.
                    </h1>
                    <p className="leading-relaxed">A passionate developer who loves exploring new technologies, writing clean code, and learning something new every day. When I'm not coding, you’ll find me tinkering with design, reading docs, or fixing bugs I accidentally created.
                    </p>
                </div>
                <div className="flex flex-col flex-2/6 justify-center items-center">
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <div className="w-55 rounded-xl rounded-br-none overflow-hidden relative">
                            <AspectRatio ratio={1}>
                                <Image
                                    src="/images/about/me.webp"
                                    alt="Elric"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </AspectRatio>
                        </div>
                        <div className="flex flex-row justify-end w-full items-center gap-2 text-muted-foreground">
                            <span className="text-xs uppercase">June 26, 2025</span>
                            <Calendar className="size-3 -mt-0.5" />
                        </div>
                        <div className="flex flex-row justify-end w-full items-center gap-2 text-muted-foreground">
                            <span className="text-xs uppercase">Indomaret Fresh Pemuda</span>
                            <MapPinned className="size-3 -mt-0.5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl font-semibold text-primary">"Reach Me On"</h2>
                <SocialMedia />
            </div>
        </section>
    )
}