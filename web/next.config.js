const withImages = require("next-images");
const withOffline = require("next-offline");

const isProd = process.env.NODE_ENV === "production";

const config = withImages({
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
});

module.exports = isProd ? withOffline(config) : config;
