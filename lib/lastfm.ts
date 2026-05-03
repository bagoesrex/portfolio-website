import { LastfmRecentTracksResponse, LastfmTrack } from "@/types/lastfm";

const LASTFM_API_BASE = "https://ws.audioscrobbler.com/2.0";
const LASTFM_API_KEY = process.env.LASTFM_API_KEY ?? "";
const LASTFM_USERNAME = process.env.LASTFM_USERNAME ?? "";

function buildUrl(method: string, params: Record<string, string> = {}): string {
  const url = new URL(LASTFM_API_BASE);
  url.searchParams.set("method", method);
  url.searchParams.set("user", LASTFM_USERNAME);
  url.searchParams.set("api_key", LASTFM_API_KEY);
  url.searchParams.set("format", "json");

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  return url.toString();
}

export function getBestImage(images: LastfmTrack["image"]): string {
  const priority: Array<LastfmTrack["image"][number]["size"]> = ["extralarge", "large", "medium", "small"];

  for (const size of priority) {
    const found = images.find((img) => img.size === size);
    if (found?.["#text"]) return found["#text"];
  }

  return "";
}

export async function getRecentTracks(): Promise<LastfmRecentTracksResponse> {
  const url = buildUrl("user.getRecentTracks", { limit: "2" });

  const res = await fetch(url, {
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    throw new Error(`Last.fm API error: ${res.status} ${res.statusText}`);
  }

  const data: LastfmRecentTracksResponse = await res.json();
  return data;
}
