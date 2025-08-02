import { NextResponse } from "next/server";
import { getAccessToken } from "@/lib/spotify";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const token = await getAccessToken();

        if (!token) {
            return NextResponse.json(
                { error: "Token not received from Spotify" },
                { status: 502 }
            );
        }

        return NextResponse.json({ access_token: token });
    } catch (err: unknown) {
        if (err instanceof Error) {
            return NextResponse.json({ error: err.message }, { status: 500 });
        }
        return NextResponse.json({ error: "Unknown error" }, { status: 500 });
    }
}
