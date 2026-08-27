export const LASTFM_PERIODS = [
  "overall",
  "7day",
  "1month",
  "3month",
  "6month",
  "12month",
] as const;

export type LastFmPeriod = (typeof LASTFM_PERIODS)[number];

export interface LastFmTrack {
  name: string;
  artist: string;
  url: string;
  playcount: number;
  imageUrl: string | null;
}
