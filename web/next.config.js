const withOffline = require("next-offline");

const isProd = process.env.NODE_ENV === "production";

const config = {
  // swcMinify: true,
  generateBuildId: () => "build",
  images: {
    domains: ["cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
  },
  // experimental: {
  //   concurrentFeatures: true,
  //   serverComponents: true,
  // },
  // scope: "/",
  // workboxOpts: {
  //   swDest: "service-worker.js",
  //   runtimeCaching: [
  //     {
  //       urlPattern: /^https?.*/,
  //       handler: "NetworkFirst",
  //       options: {
  //         cacheName: "offlineCache",
  //         expiration: {
  //           maxEntries: 200,
  //         },
  //       },
  //     },
  //   ],
  // },
};

module.exports = isProd ? withOffline(config) : config;
