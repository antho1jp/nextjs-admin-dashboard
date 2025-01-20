/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  productionBrowserSourceMaps: true,
  experimental: {
    outputFileTracingIncludes: {
      '.next/server/**/*.map': [], // Ensure `.map` files are included in tracing
    },
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = 'source-map'; // Enable source maps
    }
    return config;
  },
};

export default nextConfig;
