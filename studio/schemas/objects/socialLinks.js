export default {
    type: 'object',
    name: 'socialLinks',
    title: 'Social Links',
    fields: [
        {
            name: 'linkedIn',
            type: 'url',
            title: 'LinkedIn'
        },
        {
            name: 'gitHub',
            type: 'url',
            title: 'GitHub'
        },
        {
            name: 'angelList',
            type: 'url',
            title: 'AngelList'
        },
        {
            name: 'twitter',
            type: 'url',
            title: 'Twitter'
        },
        {
            name: 'instagram',
            type: 'url',
            title: 'Instagram'
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: 'Social Links'
            };
        }
    }
};
