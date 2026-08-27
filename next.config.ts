import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lastfm.freetls.fastly.net",
        port: "",
        pathname: "/i/u/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "lastfm-img.freetls.fastly.net",
        port: "",
        pathname: "/i/u/**",
        search: "",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
