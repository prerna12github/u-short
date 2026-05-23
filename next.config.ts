import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:8000",
        "u-shortner.vercel.app",
      ],
    },
  },
};

export default nextConfig;
