const prod = process.env.NODE_ENV === "production";

const fixSlug = (slug) => slug?.replace(/^\//, "");

const localWithPort = process.env.PORT
  ? `http://localhost:${process.env.PORT}`
  : "http://localhost:3000";

const urls = {
  baseUrl: prod ? process.env.BASE_URL ?? localWithPort : localWithPort,
  pages: {
    index: () => `/`,
    sanityPage: (slug) => `/${fixSlug(slug) ?? "[...slug]"}`,
  },
  api: {},
};

export default urls;
