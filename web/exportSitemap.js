const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");
const client = require("./src/utils/sanity/node-client");

const query = `
{
  "routes": *[_type == "route"] {
    ...,
    disallowRobot,
    includeInSitemap,
    page->{
      _id,
      title,
      _createdAt,
      _updatedAt
  }}
}
`;

const reduceRoutes = (obj, route) => {
  const { page = {} } = route;
  const { _createdAt, _updatedAt } = page;
  const { includeInSitemap, disallowRobot } = route;
  const path = route.slug.current === "/" ? "/" : `/${route.slug.current}`;

  obj[path] = {
    includeInSitemap,
    disallowRobot,
    _createdAt,
    _updatedAt,
  };

  return obj;
};

async function run() {
  const config = await client.fetch('*[_id == "global-config"] {url}[0]');
  const res = await client.fetch(query).then((res) => {
    const { routes = [] } = res;

    return {
      ...routes.filter(({ slug }) => slug.current).reduce(reduceRoutes, {}),
    };
  });

  const links = Object.keys(res).reduce((accum, page) => {
    const item = res[page];
    const { includeInSitemap, disallowRobots, _updatedAt } = item;

    if (includeInSitemap && !disallowRobots) {
      accum.push({
        url: page,
        lastmod: new Date(_updatedAt),
      });
    }

    return accum;
  }, []);

  const stream = new SitemapStream({
    hostname: config.url,
    cacheTime: 600000, // 600 sec (10 min) cache purge period
  });

  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));

  if (!fs.existsSync("./out")) {
    fs.mkdirSync("./out");
  }

  fs.writeFileSync("./out/sitemap.xml", sitemap.toString());
}

try {
  run();
  console.log("sitemap.xml updated");
} catch (error) {
  console.error("Failed to update sitemap!");
  console.error(error.message || error);
}

module.exports = {};
