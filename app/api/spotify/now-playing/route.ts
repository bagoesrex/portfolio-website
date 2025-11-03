import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/spotify";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const response = await getNowPlaying();

        if (!response.ok || response.status === 204) {
            return NextResponse.json({ isPlaying: false }, { status: 200 });
        }

        const song = await response.json();

        if (!song?.item) {
            return NextResponse.json({ isPlaying: false }, { status: 200 });
        }

        const { name: title, artists, album, external_urls } = song.item;

        const artist = artists.map((a: { name: string }) => a.name).join(", ");
        const albumName = album.name;
        const albumImageUrl = album.images?.[0]?.url ?? "";
        const songUrl = external_urls.spotify;

        return NextResponse.json(
            {
                isPlaying: song.is_playing,
                title,
                artist,
                album: albumName,
                albumImageUrl,
                songUrl,
            },
            {
                status: 200,
                headers: {
                    "cache-control": "public, s-maxage=20, stale-while-revalidate=30",
                },
            }
        );
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("Failed to fetch now playing:", message);

        return NextResponse.json(
            { isPlaying: false, error: message },
            { status: 500 }
        );
    }
}
