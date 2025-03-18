/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/webPortfolio',
  trailingSlash: true,
  reactStrictMode: false,
}

module.exports = nextConfig 