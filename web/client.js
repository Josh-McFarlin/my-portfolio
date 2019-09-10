const sanityClient = require('@sanity/client');


const isProd = process.env.NODE_ENV === 'production';

const client = sanityClient({
    projectId: 'ai1hbij4',
    dataset: 'production',
    token: '', // or leave blank to be anonymous user
    useCdn: isProd // `false` if you want to ensure fresh data
});

module.exports = client;
