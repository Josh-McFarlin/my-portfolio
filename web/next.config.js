const { withPlausibleProxy } = require('next-plausible')
const path = require('path')

module.exports = withPlausibleProxy()({
  outputFileTracingRoot: path.join(__dirname, '..'),
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
  sassOptions: {
    silenceDeprecations: ["legacy-js-api", "import"],
  },
});
