export default {
    type: 'object',
    name: 'skillSet',
    title: 'Skill Set',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'skills',
            type: 'array',
            title: 'Skills',
            of: [{
                type: 'skill'
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
                subtitle: 'Skill Set'
            };
        }
    }
};
