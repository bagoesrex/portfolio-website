"use client"

import useSWR, { mutate } from "swr";
import Image from "next/image";
import fetcher from "@/lib/fetcher";
import { NowPlayingSong } from "@/lib/types";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { SiSpotify } from "react-icons/si";

export default function NowPlaying() {
    const { data } = useSWR<NowPlayingSong>("/api/spotify/now-playing", fetcher, { refreshInterval: 1000 * 30 });
    const isPlaying = data?.isPlaying;

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="flex flex-row ml-1.5 items-center gap-[13px] w-fit max-w-sm rounded-lg cursor-default">
                    {data?.songUrl ? (
                        <div className="relative w-6 h-6">
                            <Image
                                src={data.albumImageUrl}
                                alt={data.album}
                                fill
                                className={`rounded-full object-cover ${isPlaying ? "animate-[spin_4s_linear_infinite]" : ""}`}
                            />
                        </div>
                    ) : (
                        <div className="h-6 w-6">
                            <SiSpotify color="green" className="w-full h-full" />
                        </div>
                    )}
                    <div className="flex flex-col">
                        {data?.songUrl ? (
                            <a
                                href={data.songUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium"
                            >
                                {data.title}
                            </a>
                        ) : (
                            <p className="text-sm font-medium">
                                Not Playing
                            </p>
                        )}
                        <p className="text-xs">
                            {data?.artist ?? "Spotify"}
                        </p>
                    </div>
                </div>
            </TooltipTrigger>
            <TooltipContent side="top" align="start">
                Song that I&apos;m currently listening to on Spotify
            </TooltipContent>
        </Tooltip>
    );
}
