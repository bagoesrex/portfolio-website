"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Navbar from "./header-navbar";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 h-14 px-2 ">
            <div className={`flex border-b border-gray-500 bg-background/60 backdrop-blur-md max-w-3xl mx-auto pt-2 px-2 h-full
                ${isOpen ? "min-h-[225px] md:min-h-14" : "h-14"}
                `}>
                <div className="flex flex-col gap-1.5 w-full">
                    <div className="flex flex-row justify-between items-center w-full">
                        <Link href={"/"} onClick={() => setIsOpen(false)}>
                            <div className="flex flex-row gap-1 justify-center items-center text-primary">
                                <Image src="/icons/logo.svg" alt="Logo" width={38} height={38} priority />
                                <h1 className="text-md font-extrabold">Bagoes Rex</h1>
                            </div>
                        </Link>

                        <div className="hidden md:block">
                            <Navbar />
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-primary"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                    {isOpen && (
                        <div className="md:hidden px-5 pb-4 w-full">
                            <Navbar onLinkClick={() => setIsOpen(false)} />
                        </div>
                    )}
                </div>
            </div>

        </header >
    );
}
