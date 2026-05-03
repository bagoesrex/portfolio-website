import { NextResponse } from "next/server";
import { getRecentTracks, getBestImage } from "@/lib/lastfm";
import { NowPlayingSong } from "@/types/lastfm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getRecentTracks();
    const tracks = data.recenttracks.track;

    if (!tracks || tracks.length === 0) {
      const payload: NowPlayingSong = { isPlaying: false, title: "", artist: "", album: "", albumImageUrl: "", songUrl: "" };
      return NextResponse.json(payload);
    }

    const current = tracks[0];
    const isPlaying = current["@attr"]?.nowplaying === "true";

    const payload: NowPlayingSong = {
      isPlaying,
      title: current.name,
      artist: current.artist["#text"],
      album: current.album["#text"],
      albumImageUrl: getBestImage(current.image),
      songUrl: current.url,
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
      },
    });
  } catch {
    const payload: NowPlayingSong = { isPlaying: false, title: "", artist: "", album: "", albumImageUrl: "", songUrl: "" };
    return NextResponse.json(payload, { status: 500 });
  }
}
