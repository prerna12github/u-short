import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  experimental: {
    serverActions: {
      allowedOrigins: [
        "http://localhost:8000",
        "https://u-shortner.vercel.app",
      ],
    },
  },
};

export default nextConfig;
