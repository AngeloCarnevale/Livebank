module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  env: {
    baseUrl: "http://localhost:8000"
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
