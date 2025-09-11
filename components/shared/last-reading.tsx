import { dummyReading } from "@/data/dummyReading";
import Image from "next/image";

export default function LastReading() {
    const percentage = ((dummyReading.currentPage / dummyReading.totalPages) * 100).toFixed(2);

    return (
        <div className="flex flex-col rounded-xl pt-2 pb-4 px-8 gap-4 group">
            <h3 className="font-semibold">Last Reading <span className="text-sm text-black/60">{`(${percentage}%)`}</span></h3>
            <a
                href={dummyReading.readUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium flex items-start gap-8"
            >
                <div className="relative w-15 h-20">
                    <Image
                        src={dummyReading.coverUrl}
                        alt={dummyReading.title}
                        fill
                        className="object-cover shadow-sm shadow-black transform transition-transform duration-300 group-hover:scale-103"
                    />
                </div>
                <div className="flex flex-col gap-3 h-full justify-between">
                    <div>
                        <h4 className="font-semibold group-hover:underline">{dummyReading.title}</h4>
                        <p className="text-sm">{dummyReading.author}</p>
                    </div>
                    <p className="font-semibold text-xs italic self-end">Page {dummyReading.currentPage} of {dummyReading.totalPages}</p>
                </div>
            </a>
        </div>
    )
}