const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

if (!client_id) throw new Error("Missing SPOTIFY_CLIENT_ID in .env.local");
if (!client_secret) throw new Error("Missing SPOTIFY_CLIENT_SECRET in .env.local");
if (!refresh_token) throw new Error("Missing SPOTIFY_REFRESH_TOKEN in .env.local");

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;

export const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refresh_token,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to refresh Spotify token");
    }

    const data = await response.json();
    return data.access_token;
};

export const getNowPlaying = async () => {
    const access_token = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
};

export const getLastPlayed = async () => {
    const access_token = await getAccessToken();

    return fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};
