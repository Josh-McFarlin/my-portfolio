export default {
    type: 'object',
    name: 'education',
    title: 'Education',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'schools',
            type: 'array',
            title: 'Schools',
            of: [{
                type: 'school'
            }]
        }
    ],
    preview: {
        select: {
            heading: 'heading'
        },
        prepare({ heading }) {
            return {
                title: `${heading}`,
                subtitle: 'Education'
            };
        }
    }
};
