/* eslint-disable @typescript-eslint/no-var-requires */

// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ipfs.io", "assets.poap.xyz", "storage.googleapis.com", "prod-metadata.s3.amazonaws.com"],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
