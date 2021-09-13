const withOffline = require("next-offline");
const { withPlausibleProxy } = require("next-plausible");

const isProd = process.env.NODE_ENV === "production";

const config = withPlausibleProxy({
  subdirectory: "plaus",
  scriptName: "plaus",
  customDomain: "https://mcfarl.in",
})({
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
});

module.exports = isProd ? withOffline(config) : config;
