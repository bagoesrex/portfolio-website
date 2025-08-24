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
