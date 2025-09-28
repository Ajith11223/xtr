/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: false, // Ensures Next.js optimizes images
      remotePatterns: [
        {
          protocol: 'https',  // Allows images over HTTPS
          hostname: '**',      // Allows all external domains
        },
      ],
      formats: ['image/avif', 'image/webp'], // Enable modern image formats like AVIF and WebP
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // Cache all static assets for 1 year
            },
            {
              key: 'Access-Control-Allow-Origin',
              value: '*', // Allows images to be accessible from all origins
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;