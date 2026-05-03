interface LastfmImage {
  "#text": string;
  size: "small" | "medium" | "large" | "extralarge";
}

interface LastfmArtist {
  "#text": string;
  mbid: string;
}

interface LastfmAlbum {
  "#text": string;
  mbid: string;
}

interface LastfmTrackAttr {
  nowplaying: "true";
}

export interface LastfmTrack {
  artist: LastfmArtist;
  name: string;
  album: LastfmAlbum;
  url: string;
  image: LastfmImage[];
  date?: {
    uts: string;
    "#text": string;
  };
  "@attr"?: LastfmTrackAttr;
}

export interface LastfmRecentTracksResponse {
  recenttracks: {
    track: LastfmTrack[];
    "@attr": {
      user: string;
      totalPages: string;
      page: string;
      perPage: string;
      total: string;
    };
  };
}

export interface NowPlayingSong {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

export interface LastPlayedSong {
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  playedAt: string;
}
