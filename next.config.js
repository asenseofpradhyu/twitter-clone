/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["avatars.githubusercontent.com"],
  },
  env: {
    GRAPHQL_URL: 'http://localhost:8000/graphql',
  },
}

module.exports = nextConfig
