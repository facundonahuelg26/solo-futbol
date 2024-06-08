/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com'
      },
      {
        protocol: 'https',
        hostname: process.env.API_IMAGES
      }
    ]
  }
}

export default nextConfig
