import { NextResponse } from "next/server";
import { getRecentTracks, getBestImage } from "@/lib/lastfm";
import { LastPlayedSong } from "@/types/lastfm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getRecentTracks();
    const tracks = data.recenttracks.track;

    if (!tracks || tracks.length === 0) {
      return NextResponse.json({ lastPlayed: null });
    }

    const isFirstNowPlaying = tracks[0]["@attr"]?.nowplaying === "true";
    const lastTrack = isFirstNowPlaying ? tracks[1] : tracks[0];

    if (!lastTrack || !lastTrack.date) {
      return NextResponse.json({ lastPlayed: null });
    }

    const payload: LastPlayedSong = {
      title: lastTrack.name,
      artist: lastTrack.artist["#text"],
      album: lastTrack.album["#text"],
      albumImageUrl: getBestImage(lastTrack.image),
      songUrl: lastTrack.url,
      playedAt: new Date(parseInt(lastTrack.date.uts, 10) * 1000).toISOString(),
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch {
    return NextResponse.json({ lastPlayed: null }, { status: 500 });
  }
}
