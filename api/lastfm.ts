import "server-only";

import {
  parseLastFmTopTracksResponse,
  parseLastFmTrackInfoArtworkResponse,
} from "./lastfm-response.mts";
import type { LastFmPeriod, LastFmTrack } from "../types/lastfm";

const LASTFM_API_URL = "https://ws.audioscrobbler.com/2.0/";
const LASTFM_CACHE_SECONDS = 60 * 60;
const LASTFM_REQUEST_TIMEOUT_MS = 5_000;

interface GetTopTracksOptions {
  period?: LastFmPeriod;
  limit?: number;
}

function readLastFmConfig() {
  const apiKey = process.env.LASTFM_API_KEY?.trim();
  const username = process.env.LASTFM_USERNAME?.trim();

  if (!apiKey || !username) {
    throw new Error("Last.fm environment variables are not configured");
  }

  return { apiKey, username };
}

async function requestLastFm(
  parameters: Record<string, string>,
  cacheTag: string,
): Promise<unknown> {
  const { apiKey } = readLastFmConfig();
  const searchParams = new URLSearchParams({
    ...parameters,
    api_key: apiKey,
    format: "json",
  });

  const response = await fetch(`${LASTFM_API_URL}?${searchParams}`, {
    headers: { Accept: "application/json" },
    next: {
      revalidate: LASTFM_CACHE_SECONDS,
      tags: [cacheTag],
    },
    signal: AbortSignal.timeout(LASTFM_REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error("Last.fm request failed");
  }

  return response.json();
}

export async function getTopTracks({
  period = "7day",
  limit = 1,
}: GetTopTracksOptions = {}): Promise<LastFmTrack[]> {
  if (!Number.isInteger(limit) || limit < 1 || limit > 50) {
    throw new Error("Last.fm track limit must be between 1 and 50");
  }

  const { username } = readLastFmConfig();
  const payload = await requestLastFm(
    {
      method: "user.gettoptracks",
      user: username,
      period,
      limit: String(limit),
    },
    "lastfm-top-tracks",
  );

  return parseLastFmTopTracksResponse(payload);
}

export async function getTopTrack(
  period: LastFmPeriod = "7day",
): Promise<LastFmTrack | null> {
  const [track] = await getTopTracks({ period, limit: 1 });
  if (!track) {
    return null;
  }

  try {
    const payload = await requestLastFm(
      {
        method: "track.getInfo",
        artist: track.artist,
        track: track.name,
        autocorrect: "1",
      },
      "lastfm-track-info",
    );
    const imageUrl = parseLastFmTrackInfoArtworkResponse(payload);

    return imageUrl ? { ...track, imageUrl } : track;
  } catch {
    return track;
  }
}
