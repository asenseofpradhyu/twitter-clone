/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["avatars.githubusercontent.com", "lh3.googleusercontent.com", "twitter-x-clone.s3.ap-south-1.amazonaws.com"],
  },
  env: {
    GRAPHQL_URL: 'http://localhost:8000/graphql',
  },
}

module.exports = nextConfig
