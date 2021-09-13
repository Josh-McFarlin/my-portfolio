const withOffline = require("next-offline");

const isProd = process.env.NODE_ENV === "production";

const config = {
  generateBuildId: () => "build",
  images: {
    domains: ["cdn.sanity.io"],
  },
  scope: "/",
  workboxOpts: {
    swDest: "service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/test456",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
};

module.exports = isProd ? withOffline(config) : config;
