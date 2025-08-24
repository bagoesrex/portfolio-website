"use client"

import fetcher from "@/lib/fetcher";
import { LastPlayedSong } from "@/lib/types";
import Image from "next/image";
import useSWR from "swr";

export default function LastPlayed() {
    const { data } = useSWR<LastPlayedSong>("/api/spotify/last-played", fetcher);

    return (
        <div className="flex flex-col hover:bg-muted/20 rounded-xl pt-2 pb-4 px-8 gap-4 group">
            <h3 className="font-semibold">Last Played</h3>
            {data?.songUrl ? (
                <a
                    href={data.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium flex items-center gap-8"
                >
                    <div className="relative w-15 h-15">
                        <Image
                            src={data.albumImageUrl}
                            alt={data.album}
                            fill
                            className="object-cover shadow-sm shadow-black transform transition-transform duration-300 group-hover:scale-103"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold">{data.title}</h4>
                        <div>
                            <p className="text-sm">{data.artist}</p>
                        </div>
                    </div>
                </a>
            ) : (
                <h3>Null</h3>
            )
            }
        </div>
    )
}