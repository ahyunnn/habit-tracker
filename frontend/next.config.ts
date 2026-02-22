import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export", // static export
  basePath: "/habit-tracker",
  assetPrefix: "/habit-tracker/",
};

export default nextConfig;
