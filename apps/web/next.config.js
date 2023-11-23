module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  env: {
    baseUrl: "http://localhost:8000"
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  output: 'standalone'
};
