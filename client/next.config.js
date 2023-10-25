/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "s3-us-west-2.amazonaws.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
