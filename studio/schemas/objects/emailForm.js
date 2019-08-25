export default {
    type: 'object',
    name: 'emailForm',
    title: 'Email Form',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subheading'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Destination Email',
            description: 'Email to deliver to.'
        }
    ],
    preview: {
        select: {
            title: 'heading'
        },
        prepare({ title }) {
            return {
                title,
                subtitle: 'Email Form'
            };
        }
    }
};
