export const convertSlug = (slug) => {
  if (slug == null) return undefined;

  return typeof slug === "string" ? slug : slug.join("/");
};
