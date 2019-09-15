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
            title: 'Image',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'width',
            type: 'number',
            title: 'Width (px)',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'height',
            type: 'number',
            title: 'Height (px)',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'maxWidth',
            type: 'number',
            title: 'Max Width (Percent)',
            validation: (Rule) => Rule.integer().min(1).max(100)
        },
        {
            name: 'maxHeight',
            type: 'number',
            title: 'Max Height (Percent)',
            validation: (Rule) => Rule.integer().min(1).max(100)
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
