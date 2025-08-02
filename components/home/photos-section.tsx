import BlurImage from "../photo/blur-image";
import CustomButton from "../shared/custom-button";

const photoItems = [
    {
        id: 1,
        src: "/images/photos/1.webp",
        width: 500,
        height: 500,
        alt: "temp alt"
    },
    {
        id: 2,
        src: "/images/photos/6.webp",
        width: 500,
        height: 500,
        alt: "temp alt"
    },
    {
        id: 3,
        src: "/images/photos/3.webp",
        width: 500,
        height: 500,
        alt: "temp alt"
    },
    {
        id: 4,
        src: "/images/photos/12.webp",
        width: 500,
        height: 500,
        alt: "temp alt"
    },
]

export default function PhotosSection() {
    return (
        <section id="photos">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-extrabold text-primary">
                        Photos
                    </h2>
                    <p className="leading-relaxed">These photos aren&apos;t curated or perfect - just small glimpses of me during the rare times I&apos;m on the other side of the lens!</p>
                </div>
                <div className="columns-4 gap-2">
                    {photoItems.map((photo) => (
                        <div key={photo.id} className="overflow-hidden rounded-lg">
                            <BlurImage
                                src={photo.src}
                                alt={photo.alt}
                                width={photo.width}
                                height={photo.height}
                            />
                        </div>
                    ))}
                </div>
                <CustomButton link="/photos" className="w-full md:w-[90px]">See All</CustomButton>
            </div>
        </section>
    )
}