import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.206.219.193"],
  images: {
    domains: [
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "cdn.pixabay.com",
      "cdn-icons-png.flaticon.com",
      "i.pravatar.cc",
      "api.dicebear.com",
    ],
  },
};

export default nextConfig;
