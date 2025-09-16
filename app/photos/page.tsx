import PhotoGallery from "@/components/photo/photo-gallery";

export default function PhotosPage() {
    return (
        <section className="max-w-3xl flex-1 min-w-sm mx-auto mt-1 pt-20 flex flex-col gap-5 pb-10 px-5 text-foreground">

            <h1 className="text-3xl font-extrabold text-primary">
                Photo Gallery
            </h1>
            <p className="leading-relaxed">
                A collection of random images from my gallery.
            </p>

            <PhotoGallery />
        </section>
    )
}