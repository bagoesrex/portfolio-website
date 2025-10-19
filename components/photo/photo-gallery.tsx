"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import BlurImage from "./blur-image";

const photoItems = [
    {
        id: 1,
        src: "/images/photos/1.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 2,
        src: "/images/photos/2.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 3,
        src: "/images/photos/3.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 4,
        src: "/images/photos/4.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 5,
        src: "/images/photos/5.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 6,
        src: "/images/photos/6.webp",
        width: 800,
        height: 200,
        alt: "temp alt"
    },
    {
        id: 7,
        src: "/images/photos/7.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 8,
        src: "/images/photos/8.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 9,
        src: "/images/photos/9.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 10,
        src: "/images/photos/10.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 11,
        src: "/images/photos/11.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 12,
        src: "/images/photos/12.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 13,
        src: "/images/photos/13.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 14,
        src: "/images/photos/14.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 15,
        src: "/images/photos/15.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 16,
        src: "/images/photos/16.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 17,
        src: "/images/photos/17.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 18,
        src: "/images/photos/18.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 19,
        src: "/images/photos/19.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 20,
        src: "/images/photos/20.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 21,
        src: "/images/photos/21.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 22,
        src: "/images/photos/22.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    },
    {
        id: 23,
        src: "/images/photos/23.webp",
        width: 800,
        height: 600,
        alt: "temp alt"
    }
];

export default function PhotoGallery() {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <div className="columns-1 sm:columns-2 lg:columns-4 gap-2 space-y-2">
                {photoItems.map((photo, i) => (
                    <div
                        key={photo.id}
                        className="overflow-hidden rounded-lg cursor-zoom-in"
                        onClick={() => setIndex(i)}
                    >
                        <BlurImage
                            src={photo.src}
                            alt={photo.alt}
                            width={photo.width}
                            height={photo.height}
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={photoItems.map((img) => ({
                    src: img.src,
                    alt: img.alt,
                }))}
                styles={{
                    container: {
                        backgroundColor: "rgba(0,0,0,0.85)",
                    },
                }}
            />
        </>
    );
}
