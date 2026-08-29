import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPagesBuild && {
    output: "export",
  }),

  images: {
    ...(isGitHubPagesBuild && {
      unoptimized: true,
    }),

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;