const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
  generateBuildId: () => "build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  sass: {
    silenceDeprecations: ["legacy-js-api", "import"],
  },
});
