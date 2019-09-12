const sanityClient = require('@sanity/client');


const client = sanityClient({
    projectId: 'ai1hbij4',
    dataset: 'production',
    token: '',
    useCdn: true
});

module.exports = client;
