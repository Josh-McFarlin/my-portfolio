export default {
    name: 'resumePage',
    type: 'document',
    title: 'Resume Page',
    fieldsets: [
        {
            title: 'SEO & metadata',
            name: 'metadata'
        }
    ],
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            type: 'object',
            name: 'resume',
            fields: [
                {
                    name: 'link',
                    type: 'url',
                    title: 'Link'
                },
                {
                    name: 'pdf',
                    type: 'file',
                    title: 'PDF',
                    options: {
                        accept: '.pdf'
                    }
                },
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image'
                },
                {
                    name: 'first',
                    type: 'string',
                    title: 'First Priority',
                    options: {
                        list: [
                            {
                                title: 'Link',
                                value: 'link'
                            },
                            {
                                title: 'PDF',
                                value: 'pdf'
                            },
                            {
                                title: 'Image',
                                value: 'image'
                            }
                        ]
                    }
                },
                {
                    name: 'second',
                    type: 'string',
                    title: 'Second Priority',
                    options: {
                        list: [
                            {
                                title: 'Link',
                                value: 'link'
                            },
                            {
                                title: 'PDF',
                                value: 'pdf'
                            },
                            {
                                title: 'Image',
                                value: 'image'
                            }
                        ]
                    }
                }
            ]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'This description populates meta-tags on the webpage',
            fieldset: 'metadata'
        },
        {
            name: 'openGraphImage',
            type: 'image',
            title: 'Open Graph Image',
            description: 'Image for sharing previews on Facebook, Twitter etc.',
            fieldset: 'metadata'
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'openGraphImage'
        }
    }
};
