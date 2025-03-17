/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    // Add any external domains for images here if needed
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig; 