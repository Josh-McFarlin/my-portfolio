const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
  generateBuildId: () => "build",
  images: {
    domains: ["cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
  },
});
