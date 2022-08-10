/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "dummyimage.com",
      "api.lorem.space",
      "placeimg.com",
      "flowbite.com",
      "www.tailwind-kit.com",
    ], //Domain of image host
  },
};

module.exports = nextConfig;
