"use client";

import { fetcher } from "@/lib/fetcher";
import { LastPlayedSong } from "@/types/spotify";
import Image from "next/image";
import useSWR from "swr";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

dayjs.extend(relativeTime);

export default function MusicActivity() {
  const { data } = useSWR<LastPlayedSong>("/api/spotify/last-played", fetcher);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  if (!data || !data.title) {
    return (
      <div className="flex items-center gap-4 rounded-[7px] p-3.5">
        <div className="flex h-13 min-w-13 items-center justify-center bg-gray-200 text-xs text-gray-500">N/A</div>
        <div className="w-full space-y-3">
          <div className="flex justify-between">
            <h3 className="text-sm font-[380] text-gray-700">LAST PLAYED</h3>
            <p className="w-fit bg-gray-300 px-1 py-px text-xs">No data</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">No recently played track</p>
            <p className="text-xs text-gray-400">Play something on Spotify</p>
          </div>
        </div>
      </div>
    );
  }

  const { title, artist, album, albumImageUrl, playedAt, songUrl } = data;

  const lastPlayed = dayjs(playedAt).from(now);

  return (
    <div className="group">
      <a href={songUrl} target="_blank" rel="noopener noreferrer" className="flex gap-4 rounded-[7px] p-3.5 transition">
        <div className="relative h-13 min-w-13">
          <Image src={albumImageUrl} alt={`${title} Image`} fill priority className="object-cover transition-transform group-hover:scale-104" />
        </div>
        <div className="w-full space-y-3">
          <div className="flex justify-between">
            <h3 className="text-sm font-[380] text-gray-700">LAST PLAYED</h3>
            <p className="w-fit bg-gray-300 px-1 py-px text-xs">{lastPlayed}</p>
          </div>
          <div className="space-y-1">
            <p className="line-clamp-2 text-sm leading-4 decoration-2 group-hover:underline">{album}</p>
            <p className="line-clamp-1 max-w-40 text-xs text-gray-600">{artist}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
