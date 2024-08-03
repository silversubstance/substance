/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "odouepjkxheu5esn.public.blob.vercel-storage.com",
        pathname: "/silvercompany/**",
      },
    ],
  },
};

export default nextConfig;

// https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/silver-white-fill-favicon.png
