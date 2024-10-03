module.exports = {
  // output: "export",
  // distDir: "_static",
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
