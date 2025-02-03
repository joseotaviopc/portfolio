/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '/joseotaviopc.github.io',
  assetPrefix: '/joseotaviopc.github.io/',
};

module.exports = nextConfig;
