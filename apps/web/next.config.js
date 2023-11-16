module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  env: {
    baseUrl: "https://a795-189-57-188-42.ngrok-free.app"
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
