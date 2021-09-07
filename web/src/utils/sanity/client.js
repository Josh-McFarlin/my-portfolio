import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const prod = process.env.NODE_ENV === "production";

const options = {
  apiVersion: "2021-08-31",
  projectId: "ai1hbij4",
  dataset: "production",
  token: "",
  useCdn: prod,
};

export const client = sanityClient(options);

export const imageBuilder = imageUrlBuilder(client);

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const getClient = (preview) => (preview ? previewClient : client);

export default client;
