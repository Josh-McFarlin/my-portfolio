const sanityClient = require("@sanity/client");
const prod = process.env.NODE_ENV === "production";

const client = sanityClient({
  projectId: "ai1hbij4",
  dataset: "production",
  token: "",
  useCdn: prod,
});

module.exports = client;
