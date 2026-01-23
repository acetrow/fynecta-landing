import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure for static HTML rendering
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
      // Allow server actions without strict CSRF (for static HTML forms)
      allowedOrigins: ["localhost:3000", "127.0.0.1:3000"],
    },
  },
};

export default nextConfig;
