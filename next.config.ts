import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@phosphor-icons/react"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
