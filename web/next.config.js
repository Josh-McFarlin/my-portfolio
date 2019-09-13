const withCSS = require('@zeit/next-css');
const withWorkers = require('@zeit/next-workers');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PacktrackerPlugin = require('@packtracker/webpack-plugin');

const client = require('./client');


const isProduction = process.env.NODE_ENV === 'production';
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
    const path = route.slug.current === '/' ? '/' : `/${route.slug.current}`;

    obj[path] = {
        query: {
            slug: slug.current
        },
        includeInSitemap,
        disallowRobot,
        _createdAt,
        _updatedAt,
        page: '/LandingPage'
    };

    return obj;
};

module.exports = withWorkers(withCSS({
    cssModules: true,
    cssLoaderOptions: {
        modules: true,
        import: true,
        importLoaders: 1,
        localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]'
    },
    exportPathMap() {
        return client.fetch(query).then((res) => {
            const { routes = [] } = res;

            const nextRoutes = {
                // Routes imported from sanity
                ...routes.filter(({ slug }) => slug.current).reduce(reduceRoutes, {})
            };
            return nextRoutes;
        });
    },
    webpack: (config) => {
        config.plugins.push(
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
        );

        if (isProduction) {
            config.plugins.push(
                new OptimizeCssAssetsPlugin()
            );

            config.plugins.push(
                new PacktrackerPlugin({
                    project_token: 'dc2fe0d9-6d34-4f76-b25b-b6af3f16822f',
                    upload: true
                })
            );
        } else {
            config.plugins.push(
                new BundleAnalyzerPlugin()
            );
        }

        return config;
    }
}));
