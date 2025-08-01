"use client"

import Image from "next/image";
import { useState } from "react";

interface BlurImageProps {
    src: string,
    alt: string,
    width?: number,
    height?: number,
}

export default function BlurImage({ src, alt, width, height }: BlurImageProps) {
    const [isLoading, setLoading] = useState(true)

    return (
        <div
            className="overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`rounded-lg duration-1000 ease-in-out transform transition-[filter,transform]`}
                priority
                onLoadingComplete={() => setLoading(false)}
                style={{ filter: isLoading ? 'grayscale(100%) blur(20px)' : 'grayscale(0%) blur(0px)', transform: isLoading ? 'scale(1.1)' : 'scale(1)' }}
            />
        </div>
    )
}