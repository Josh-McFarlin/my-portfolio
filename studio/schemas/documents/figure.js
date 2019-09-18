export default {
    name: 'figure',
    title: 'Image',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
                metadata: ['lqip']
            }
        },
        {
            title: 'Caption',
            name: 'caption',
            type: 'string',
            options: {
                isHighlighted: true
            }
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessiblity.',
            options: {
                isHighlighted: true
            }
        }
    ],
    preview: {
        select: {
            media: 'image',
            title: 'caption'
        }
    }
};
