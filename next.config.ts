import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Galvin-Web',
  assetPrefix: '/Galvin-Web',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Galvin-Web',
  },
};

export default nextConfig;
