/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.giphy.com', 'media.graphassets.com', 'media.graphcms.com'],
  },
};

module.exports = nextConfig;
