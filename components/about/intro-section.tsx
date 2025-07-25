import { Calendar, MapPinned } from "lucide-react";
import SocialMedia from "../shared/social-media";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export default function IntroSection() {
    return (
        <section id="intro" className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex flex-col flex-4/6 gap-3">
                    <h1 className="text-3xl font-semibold font-sans text-primary">
                        Hey there! I&rsquo;m Bagus Rahmawan, a tech enthusiast from Semarang.
                    </h1>
                    <p className="leading-relaxed">
                        I&apos;m a passionate developer who enjoys exploring new technologies, writing clean and efficient code, and learning something new every day.
                        When I&rsquo;m not coding, you&rsquo;ll likely find me tinkering with design, reading documentation, or debugging something I accidentally broke.
                    </p>
                </div>
                <div className="flex flex-col flex-2/6 justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-55 rounded-xl rounded-b-none overflow-hidden relative">
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
                        <div className="w-full rounded-bl-md bg-primary/20 py-2 px-1.5">
                            <div className="flex flex-row justify-end w-full items-center gap-2 text-secondary">
                                <span className="text-xs uppercase">June 26, 2025</span>
                                <Calendar className="size-3 -mt-0.5" />
                            </div>
                            <div className="flex flex-row justify-end w-full items-center gap-2 text-secondary">
                                <span className="text-xs uppercase">Indomaret Fresh Pemuda</span>
                                <MapPinned className="size-3 -mt-0.5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl font-semibold text-primary">&quot;Reach Me On&quot;</h2>
                <SocialMedia />
            </div>
        </section>
    )
}