import assert from "node:assert/strict";
import test from "node:test";

import {
  parseLastFmTopTracksResponse,
  parseLastFmTrackInfoArtworkResponse,
} from "./lastfm-response.mts";

test("maps a valid Last.fm top-tracks response", () => {
  const tracks = parseLastFmTopTracksResponse({
    toptracks: {
      track: [
        {
          name: "A Sorrowful Reunion",
          playcount: "12",
          url: "https://www.last.fm/music/Reality+Club/_/A+Sorrowful+Reunion",
          artist: { name: "Reality Club" },
          image: [
            {
              size: "large",
              "#text":
                "https://lastfm-img.freetls.fastly.net/i/u/174s/example.jpg",
            },
          ],
        },
      ],
    },
  });

  assert.deepEqual(tracks, [
    {
      name: "A Sorrowful Reunion",
      artist: "Reality Club",
      url: "https://www.last.fm/music/Reality+Club/_/A+Sorrowful+Reunion",
      playcount: 12,
      imageUrl: "https://lastfm-img.freetls.fastly.net/i/u/174s/example.jpg",
    },
  ]);
});

test("normalizes Last.fm track links to HTTPS", () => {
  const [track] = parseLastFmTopTracksResponse({
    toptracks: {
      track: [
        {
          name: "Learning to Live",
          playcount: "42",
          url: "http://www.last.fm/music/Dream+Theater/_/Learning+to+Live",
          artist: { name: "Dream Theater" },
        },
      ],
    },
  });

  assert.equal(track.url.startsWith("https://"), true);
});

test("returns an empty list for a valid chart without tracks", () => {
  assert.deepEqual(
    parseLastFmTopTracksResponse({ toptracks: { track: [] } }),
    [],
  );
});

test("rejects Last.fm API errors", () => {
  assert.throws(
    () =>
      parseLastFmTopTracksResponse({
        error: 29,
        message: "Rate limit exceeded",
      }),
    /Last\.fm API error/,
  );
});

test("rejects malformed track data", () => {
  assert.throws(
    () =>
      parseLastFmTopTracksResponse({
        toptracks: { track: [{ name: "Incomplete track" }] },
      }),
    /Invalid Last\.fm response/,
  );
});

test("rejects track links outside Last.fm", () => {
  assert.throws(
    () =>
      parseLastFmTopTracksResponse({
        toptracks: {
          track: [
            {
              name: "Unsafe",
              playcount: "1",
              url: "javascript:alert(1)",
              artist: { name: "Unknown" },
            },
          ],
        },
      }),
    /Invalid Last\.fm response/,
  );
});

test("ignores artwork links outside the Last.fm image CDN", () => {
  const [track] = parseLastFmTopTracksResponse({
    toptracks: {
      track: [
        {
          name: "Safe track",
          playcount: "2",
          url: "https://www.last.fm/music/Artist/_/Safe+track",
          artist: { name: "Artist" },
          image: [
            {
              size: "extralarge",
              "#text": "https://example.com/untrusted-artwork.jpg",
            },
          ],
        },
      ],
    },
  });

  assert.equal(track.imageUrl, null);
});

test("ignores Last.fm's default placeholder artwork", () => {
  const [track] = parseLastFmTopTracksResponse({
    toptracks: {
      track: [
        {
          name: "Track without artwork",
          playcount: "3",
          url: "https://www.last.fm/music/Artist/_/Track+without+artwork",
          artist: { name: "Artist" },
          image: [
            {
              size: "large",
              "#text":
                "https://lastfm-img.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            },
          ],
        },
      ],
    },
  });

  assert.equal(track.imageUrl, null);
});

test("prefers available large artwork over the unreliable extralarge variant", () => {
  const [track] = parseLastFmTopTracksResponse({
    toptracks: {
      track: [
        {
          name: "Track with artwork",
          playcount: "4",
          url: "https://www.last.fm/music/Artist/_/Track+with+artwork",
          artist: { name: "Artist" },
          image: [
            {
              size: "extralarge",
              "#text":
                "https://lastfm-img.freetls.fastly.net/i/u/300x300/cover.png",
            },
            {
              size: "large",
              "#text":
                "https://lastfm-img.freetls.fastly.net/i/u/174s/cover.png",
            },
          ],
        },
      ],
    },
  });

  assert.equal(
    track.imageUrl,
    "https://lastfm-img.freetls.fastly.net/i/u/174s/cover.png",
  );
});

test("extracts album artwork from a Last.fm track-info response", () => {
  const imageUrl = parseLastFmTrackInfoArtworkResponse({
    track: {
      album: {
        image: [
          {
            size: "extralarge",
            "#text":
              "https://lastfm-img.freetls.fastly.net/i/u/300x300/album.png",
          },
          {
            size: "large",
            "#text": "https://lastfm-img.freetls.fastly.net/i/u/174s/album.png",
          },
        ],
      },
    },
  });

  assert.equal(
    imageUrl,
    "https://lastfm-img.freetls.fastly.net/i/u/174s/album.png",
  );
});
