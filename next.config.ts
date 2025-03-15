import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "raw.githubusercontent.com",
      port: "",
      pathname: "/**",
    }]
  }
};

export default nextConfig;
