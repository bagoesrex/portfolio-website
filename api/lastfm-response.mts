import type { LastFmTrack } from "../types/lastfm";

const MAX_TEXT_LENGTH = 500;
const MAX_URL_LENGTH = 2_048;
const LASTFM_IMAGE_HOSTS = new Set([
  "lastfm.freetls.fastly.net",
  "lastfm-img.freetls.fastly.net",
]);
const LASTFM_PLACEHOLDER_IMAGE_FILENAMES = new Set([
  "2a96cbd8b46e442fc41c2b86b821562f.png",
]);
const IMAGE_SIZE_PRIORITY = [
  "large",
  "medium",
  "small",
  "extralarge",
  "mega",
] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readText(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const text = value.trim();
  return text.length > 0 && text.length <= MAX_TEXT_LENGTH ? text : null;
}

function readPlaycount(value: unknown): number | null {
  if (typeof value !== "string" || !/^\d+$/.test(value)) {
    return null;
  }

  const playcount = Number(value);
  return Number.isSafeInteger(playcount) ? playcount : null;
}

function readLastFmUrl(value: unknown): string | null {
  if (typeof value !== "string" || value.length > MAX_URL_LENGTH) {
    return null;
  }

  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();
    const isLastFmHost =
      hostname === "last.fm" || hostname.endsWith(".last.fm");

    if (
      !isLastFmHost ||
      (url.protocol !== "http:" && url.protocol !== "https:") ||
      url.username ||
      url.password ||
      url.port
    ) {
      return null;
    }

    url.protocol = "https:";
    return url.toString();
  } catch {
    return null;
  }
}

function readLastFmImageUrl(value: unknown): string | null {
  if (typeof value !== "string" || value.length > MAX_URL_LENGTH) {
    return null;
  }

  try {
    const url = new URL(value);
    const filename = url.pathname.split("/").at(-1)?.toLowerCase();
    if (
      url.protocol !== "https:" ||
      !LASTFM_IMAGE_HOSTS.has(url.hostname) ||
      !filename ||
      LASTFM_PLACEHOLDER_IMAGE_FILENAMES.has(filename) ||
      url.username ||
      url.password ||
      url.port ||
      !url.pathname.startsWith("/i/u/") ||
      url.search ||
      url.hash
    ) {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}

function readTrackImage(value: unknown): string | null {
  if (!Array.isArray(value)) {
    return null;
  }

  for (const size of IMAGE_SIZE_PRIORITY) {
    for (const image of value) {
      if (!isRecord(image) || image.size !== size) {
        continue;
      }

      const imageUrl = readLastFmImageUrl(image["#text"]);
      if (imageUrl) {
        return imageUrl;
      }
    }
  }

  return null;
}

function parseTrack(value: unknown): LastFmTrack | null {
  if (!isRecord(value) || !isRecord(value.artist)) {
    return null;
  }

  const name = readText(value.name);
  const artist = readText(value.artist.name);
  const url = readLastFmUrl(value.url);
  const playcount = readPlaycount(value.playcount);
  const imageUrl = readTrackImage(value.image);

  if (!name || !artist || !url || playcount === null) {
    return null;
  }

  return { name, artist, url, playcount, imageUrl };
}

export function parseLastFmTopTracksResponse(value: unknown): LastFmTrack[] {
  if (!isRecord(value)) {
    throw new Error("Invalid Last.fm response");
  }

  if ("error" in value) {
    throw new Error("Last.fm API error");
  }

  if (!isRecord(value.toptracks) || !Array.isArray(value.toptracks.track)) {
    throw new Error("Invalid Last.fm response");
  }

  const tracks: LastFmTrack[] = [];
  for (const rawTrack of value.toptracks.track) {
    const track = parseTrack(rawTrack);
    if (!track) {
      throw new Error("Invalid Last.fm response");
    }
    tracks.push(track);
  }

  return tracks;
}

export function parseLastFmTrackInfoArtworkResponse(
  value: unknown,
): string | null {
  if (!isRecord(value)) {
    throw new Error("Invalid Last.fm response");
  }

  if ("error" in value) {
    throw new Error("Last.fm API error");
  }

  if (!isRecord(value.track)) {
    throw new Error("Invalid Last.fm response");
  }

  if (value.track.album === undefined) {
    return null;
  }

  if (!isRecord(value.track.album)) {
    throw new Error("Invalid Last.fm response");
  }

  return readTrackImage(value.track.album.image);
}
