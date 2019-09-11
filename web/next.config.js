const withCSS = require('@zeit/next-css');
const withWorkers = require('@zeit/next-workers');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

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

        config.plugins.push(
            new CopyWebpackPlugin([
                {
                    from: path.join(__dirname, 'node_modules/pdfjs-dist/cmaps/'),
                    to: path.join(__dirname, 'cmaps/')
                },
                {
                    from: path.join(__dirname, 'node_modules/pdfjs-dist/build/pdf.worker.min.js'),
                    to: path.join(__dirname, 'static/')
                }
            ])
        );

        return config;
    }
}));
