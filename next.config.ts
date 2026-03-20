import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portafolio-nextjs",
  assetPrefix: "/portafolio-nextjs/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;