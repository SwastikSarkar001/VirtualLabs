import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

export default nextConfig;
