export default {
    type: 'object',
    name: 'workExperience',
    title: 'Work Experience',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'jobs',
            type: 'array',
            title: 'Jobs',
            of: [{
                type: 'job'
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
                subtitle: 'Work Experience'
            };
        }
    }
};
