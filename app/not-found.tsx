"use client"

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import NotFoundAnimation from "@/public/lotties/404.json";
import CustomButton from "@/components/shared/custom-button";

export default function NotFoundPage() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <section className="max-w-3xl min-w-sw mx-auto mt-1 pt-20 flex flex-col justify-center items-center gap-1.5 pb-10 px-5 text-foreground">
            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                {hasMounted && (
                    <Lottie animationData={NotFoundAnimation} loop={true} />
                )}
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold">Page Not Found</h1>
            <p className="leading-relaxed">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
            <CustomButton link="/" className="w-[60%] md:w-[150px]">Back To Home</CustomButton>
        </section>
    );
}
