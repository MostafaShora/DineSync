import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.206.219.193"],
  images: {
    domains: [
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "cdn.pixabay.com",
    ],
  },
};

export default nextConfig;
