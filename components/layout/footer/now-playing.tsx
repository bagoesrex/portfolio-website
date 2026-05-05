"use client";

import useSWR from "swr";
import { NowPlayingSong } from "@/types/lastfm";
import { fetcher } from "@/lib/fetcher";
import Image from "next/image";
import { GoDot, GoDotFill } from "react-icons/go";
import { SiSpotify } from "react-icons/si";

export default function NowPlaying() {
  const { data, isLoading, error } = useSWR<NowPlayingSong>("/api/lastfm/now-playing", fetcher, { refreshInterval: 1000 * 30 });

  if (isLoading) return <p className="text-xs text-gray-400">Loading...</p>;
  if (error || !data) return null;

  const { isPlaying, title, artist, albumImageUrl, songUrl } = data;

  const Wrapper = isPlaying ? "a" : "div";

  return (
    <div className="group max-w-90">
      <Wrapper
        {...(isPlaying && {
          href: songUrl,
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        className="flex items-center justify-between gap-4 rounded-[7px] pl-1"
      >
        <div className="flex items-center gap-3.5">
          {isPlaying ? (
            <div className="relative size-6 animate-[spin_4s_linear_infinite] overflow-hidden rounded-full">
              <Image src={albumImageUrl} alt={`${title} Image`} fill priority className="object-cover" />
            </div>
          ) : (
            <div className="relative size-6 overflow-hidden rounded-full text-green-500">
              <SiSpotify className="p-0.1 size-full object-cover" />
            </div>
          )}

          <div>
            <p className={`line-clamp-1 max-w-43 text-xs leading-4 decoration-2 ${isPlaying && "group-hover:underline"}`}>
              {isPlaying ? title : "Not Playing"}
            </p>
            <p className="line-clamp-1 max-w-25 text-[10px] text-gray-600">{isPlaying ? artist : "Spotify"}</p>
          </div>
        </div>
        <div className={`flex size-fit items-center gap-2 px-1 py-0.5 ${isPlaying ? "bg-green-500" : "bg-gray-500"}`}>
          <div className="relative">
            <GoDotFill className="relative size-4 text-white" />
            {isPlaying && <GoDot className="absolute -top-0.5 -left-0.5 size-5 animate-ping text-white" />}
          </div>
          <span className="min-w-fit px-1 py-px text-[10px] text-white">{isPlaying ? "Now Playing" : "Not Playing"}</span>
        </div>
      </Wrapper>
    </div>
  );
}
