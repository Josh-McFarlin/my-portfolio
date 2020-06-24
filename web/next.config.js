const withCSS = require("@zeit/next-css");
const withWorkers = require("@zeit/next-workers");
const webpack = require("webpack");
const PacktrackerPlugin = require("@packtracker/webpack-plugin");
const withOffline = require("next-offline");

const client = require("./client");

const isProduction = process.env.NODE_ENV === "production";
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
  const { page = {}, slug = {} } = route;
  const { _createdAt, _updatedAt } = page;
  const { includeInSitemap, disallowRobot } = route;
  const path = route.slug.current === "/" ? "/" : `/${route.slug.current}`;

  obj[path] = {
    query: {
      slug: slug.current,
    },
    includeInSitemap,
    disallowRobot,
    _createdAt,
    _updatedAt,
    page: "/LandingPage",
  };

  return obj;
};

module.exports = withOffline(
  withWorkers(
    withCSS({
      cssModules: true,
      cssLoaderOptions: {
        modules: true,
        import: true,
        importLoaders: 1,
        localIdentName: isProduction
          ? "[hash:base64:5]"
          : "[name]__[local]___[hash:base64:5]",
      },
      exportPathMap() {
        return client.fetch(query).then((res) => {
          const { routes = [] } = res;

          const nextRoutes = {
            // Routes imported from sanity
            ...routes
              .filter(({ slug }) => slug.current)
              .reduce(reduceRoutes, {}),
          };
          return nextRoutes;
        });
      },
      webpack: (config, { defaultLoaders }) => {
        config.plugins.push(
          new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
        );

        if (isProduction) {
          if (defaultLoaders.babel.options.plugins instanceof Array) {
            defaultLoaders.babel.options.plugins.push(
              "transform-react-remove-prop-types"
            );
          } else {
            defaultLoaders.babel.options.plugins = [
              "transform-react-remove-prop-types",
            ];
          }

          config.plugins.push(
            new PacktrackerPlugin({
              project_token: "dc2fe0d9-6d34-4f76-b25b-b6af3f16822f",
              branch: "master",
              upload: true,
            })
          );
        }

        return config;
      },
    })
  )
);
