import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No Next.js dev-tools bubble in the corner while presenting
  devIndicators: false,
  images: { formats: ["image/avif", "image/webp"] },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
