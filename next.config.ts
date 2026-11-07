import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  images: { formats: ["image/avif", "image/webp"], deviceSizes: [390, 640, 828, 1080, 1440, 1920] },
  async headers() {
    // Demo build: keep out of search until the client signs. Remove at launch.
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default nextConfig;
