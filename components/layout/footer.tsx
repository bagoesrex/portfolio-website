import SocialMedia from "../shared/social-media";
import Image from "next/image";
import FooterNavbar from "./footer-navbar";

export default function Footer() {
    return (
        <footer className="px-2 min-w-sw w-full">
            <div className="flex flex-col max-w-3xl mx-auto px-3 pt-5 py-8 h-full border-t-1 border-gray-500">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-3 max-w-sm">
                        <div className="flex flex-row gap-1 items-center">
                            <Image src="/icons/logo.svg" alt="Logo" width={38} height={38} priority />
                            <h3 className="font-bold text-secondary line-clamp-2">
                                Bagus Rahmawan
                            </h3>
                        </div>
                        <p className="text-sm leading-relaxed">
                            A tech enthusiast and web developer from Semarang, Indonesia, passionate about building meaningful digital experiences.
                        </p>
                        <div className="flex flex-col md:justify-center items-start md:items-center">
                            <SocialMedia />
                        </div>
                    </div>
                    <div className="flex flex-row px-0 md:px-10 gap-15 md:gap-10 w-full justify-start md:justify-around items-start md:items-center">
                        <div className="flex flex-col justify-start gap-3">
                            <h3 className="font-bold text-secondary">
                                Navigate
                            </h3>
                            <FooterNavbar />
                        </div>
                        <div className="flex flex-col justify-start gap-3">
                            <h3 className="font-bold text-secondary">
                                Todo MISC
                            </h3>
                            <FooterNavbar />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}