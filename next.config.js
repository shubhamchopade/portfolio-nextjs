/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pico.techsapien.dev'],
  },
}

module.exports = nextConfig
