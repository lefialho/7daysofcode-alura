/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    loader: "imgix",
    path: "/",
  },
}

module.exports = nextConfig
