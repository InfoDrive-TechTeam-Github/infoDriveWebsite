module.exports = {
  // output: "export",
  // distDir: "_static",
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
