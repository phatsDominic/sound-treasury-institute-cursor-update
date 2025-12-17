import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Prevent Next.js from "guessing" the root when multiple lockfiles exist elsewhere on disk.
    root: __dirname,
  },
};

export default nextConfig;
