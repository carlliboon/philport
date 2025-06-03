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
  async redirects() {
    return [
      // Redirect bare domain (philport.com) to canonical https://www.philport.com
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'philport.com',
          },
        ],
        destination: 'https://www.philport.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
