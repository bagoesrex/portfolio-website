import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 h-14 px-2">
            <div className="flex flex-row justify-between border-b-1 border-gray-500 bg-background/60 backdrop-blur-md items-center max-w-3xl mx-auto px-5 h-full">
                <Link href={"/"}>
                    <div className="flex flex-row gap-1 justify-center items-center text-primary">
                        <Image src="/icons/logo.svg" alt="Logo" width={38} height={38} priority />
                        <h1 className="font-extrabold">Bagoes Rex</h1>
                    </div>
                </Link>
                <Navbar />
            </div>
        </header>
    );
}

