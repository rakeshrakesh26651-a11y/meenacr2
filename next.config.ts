import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  transpilePackages: ["framer-motion", "motion-dom", "lenis", "gsap", "lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
