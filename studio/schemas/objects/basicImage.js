export default {
    type: 'object',
    name: 'basicImage',
    title: 'Basic Image',
    fields: [
        {
            name: 'circular',
            type: 'boolean',
            title: 'Circular'
        },
        {
            name: 'image',
            type: 'figure',
            title: 'Image'
        },
        {
            name: 'size',
            type: 'number',
            title: 'Size',
            validation: (Rule) => Rule.required().integer().min(1).max(100)
        }
    ],
    preview: {
        select: {
            media: 'image'
        },
        prepare({ media }) {
            return {
                title: 'Image',
                media
            };
        }
    }
};
