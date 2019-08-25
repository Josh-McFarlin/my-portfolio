export default {
    type: 'object',
    name: 'job',
    title: 'Job',
    fields: [
        {
            name: 'company',
            type: 'string',
            title: 'Company'
        },
        {
            name: 'position',
            type: 'string',
            title: 'Position'
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location'
        },
        {
            name: 'startMonth',
            type: 'string',
            title: 'Start Month'
        },
        {
            name: 'startYear',
            type: 'string',
            title: 'Start Year'
        },
        {
            name: 'endMonth',
            type: 'string',
            title: 'End Month'
        },
        {
            name: 'endYear',
            type: 'string',
            title: 'End Year'
        },
        {
            name: 'description',
            type: 'simplePortableText',
            title: 'Description'
        }
    ],
    preview: {
        select: {
            title: 'company',
            subtitle: 'position'
        },
        prepare({ title, subtitle }) {
            return {
                title,
                subtitle
            };
        }
    }
};
