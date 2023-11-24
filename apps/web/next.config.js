module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
    ],
  },
  env: {
    baseUrl: "http://localhost:8000"
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  output: 'standalone'
};
