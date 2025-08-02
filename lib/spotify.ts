const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

if (!client_id) throw new Error("Missing SPOTIFY_CLIENT_ID in .env.local");
if (!client_secret) throw new Error("Missing SPOTIFY_CLIENT_SECRET in .env.local");
if (!refresh_token) throw new Error("Missing SPOTIFY_REFRESH_TOKEN in .env.local");

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const getAccessToken = async () => {
    console.log("Get Token...")
    console.log(refresh_token)

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
        const errorText = await response.text();
        console.error("Failed Get Token", errorText);
        throw new Error("Failed to refresh Spotify token");
    }

    const data = await response.json();
    console.log(data)
    return data.access_token;
};