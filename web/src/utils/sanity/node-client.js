const { createClient } = require("@sanity/client");
const prod = process.env.NODE_ENV === "production";

const options = {
  apiVersion: "2021-08-31",
  projectId: "ai1hbij4",
  dataset: "production",
  token: "",
  useCdn: prod,
};

module.exports = createClient(options);
