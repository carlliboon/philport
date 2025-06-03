import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { optimizeCss: true },
  eslint: {
    // Allow production builds to successfully complete even if
    // there are ESLint errors (e.g., unused vars in client-only files)
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['nydmrvnsirdvaxmzfbyx.supabase.co'],
  },
};

export default nextConfig;
