/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    NEXT_PUBLIC_AUTH_DOMAIN: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MONGO_URL: process.env.MONGO_URL,
  },
  swcMinify: true,
  images: {
    domains: [
      "dummyimage.com",
      "api.lorem.space",
      "placeimg.com",
      "flowbite.com",
      "www.tailwind-kit.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "firebasestorage.googleapis.com",
    ], //Domain of image host
  },
};

module.exports = nextConfig;
