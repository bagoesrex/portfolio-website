import SocialMedia from "../shared/social-media";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="px-2">
            <div className="flex flex-col md:flex-wrap justify-between max-w-3xl mx-auto px-3 py-10 h-full border-t-1 border-gray-500">
                <div className="flex-2/4 flex flex-col gap-3">
                    <div className="flex flex-row gap-1 items-center">
                        <Image src="/icons/logo.svg" alt="Logo" width={38} height={38} priority />
                        <h3 className="font-bold text-secondary line-clamp-2">
                            Bagus Rahmawan
                        </h3>
                    </div>
                    <p className="text-sm">
                        A tech enthusiast and web developer from Semarang, Indonesia, passionate about building meaningful digital experiences.
                    </p>
                    <div className="flex flex-col justify-center items-center">
                        <SocialMedia />
                    </div>
                </div>
                <div className="flex-1/4 flex justify-center items-center">Todo Navigate</div>
                <div className="flex-1/4 flex justify-center items-center">Todo Navigate</div>
            </div>
        </footer>
    )
}