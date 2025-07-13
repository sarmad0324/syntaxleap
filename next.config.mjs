/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // SEO and performance optimizations
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/syntaxleap.info/:path*',
        destination: 'https://www.syntaxleap.info/:path*',
        permanent: true,
      },
    ]
  },
  // Compress responses
  compress: true,
  // Generate static exports for better performance
  trailingSlash: false,
  // Power page optimization
  poweredByHeader: false,
}

export default nextConfig
