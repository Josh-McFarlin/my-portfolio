import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const prod = process.env.NODE_ENV === "production";

const options = {
  apiVersion: "2021-08-31",
  projectId: "ai1hbij4",
  dataset: "production",
  token: "",
  useCdn: prod,
};

const previewToken = process.env.SANITY_API_TOKEN;

export const client = createClient(options);

export const imageBuilder = imageUrlBuilder(client);

export const previewClient = createClient({
  ...options,
  useCdn: false,
  token: previewToken,
});

export const getClient = (preview) =>
  preview === true && previewToken != null ? previewClient : client;

export default client;
