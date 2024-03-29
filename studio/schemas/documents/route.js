import { MdLink } from "react-icons";

export default {
  name: "route",
  type: "document",
  title: "Route",
  icon: MdLink,
  fields: [
    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      name: "prefetch",
      type: "boolean",
      title: "Prefetch",
      description: "Should the page be loaded automatically",
      initialValue: true,
    },
    {
      name: "page",
      type: "reference",
      description: "Select the page that this route should point to",
      to: [{ type: "page" }, { type: "resumePage" }],
    },
    {
      name: "icon",
      type: "icon",
      title: "Icon",
    },
    {
      name: "includeInSitemap",
      type: "boolean",
      title: "Include page in sitemap",
      description: "For search engines. Will be added to /sitemap.xml",
    },
    {
      name: "disallowRobots",
      type: "boolean",
      title: "Disallow in robots.txt",
      description: "Hide this route for search engines",
    },
  ],
  preview: {
    select: {
      slug: "slug.current",
      pageTitle: "page.title",
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === "/" ? "/" : `/${slug}`,
        subtitle: `Page: ${pageTitle}`,
      };
    },
  },
};
