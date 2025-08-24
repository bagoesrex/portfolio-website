import { NextResponse } from "next/server";
import { getLastPlayed } from "@/lib/spotify";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const response = await getLastPlayed();

        if (!response.ok) {
            return NextResponse.json(
                { lastPlayed: null, error: "Failed to fetch last played track" },
                { status: response.status }
            );
        }

        const data = await response.json();

        if (!data?.items || data.items.length === 0) {
            return NextResponse.json({ lastPlayed: null }, { status: 200 });
        }

        const trackData = data.items[0];
        const { track, played_at } = trackData;
        console.log(track)

        const { name: title, artists, album, external_urls } = track;
        const artist = artists.map((a: { name: string }) => a.name).join(", ");
        const albumName = album.name;
        const albumImageUrl = album.images?.[0]?.url ?? "";
        const songUrl = external_urls.spotify;

        return NextResponse.json(
            {
                title,
                artist,
                album: albumName,
                albumImageUrl,
                songUrl,
                playedAt: played_at,
            },
            {
                status: 200,
                headers: {
                    "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
                },
            }
        );
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("Failed to fetch last played:", message);

        return NextResponse.json(
            { lastPlayed: null, error: message },
            { status: 500 }
        );
    }
}
