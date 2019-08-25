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
            title: 'Start Month',
            name: 'startMonth',
            type: 'date',
            options: {
                dateFormat: 'MMMM',
                calendarTodayLabel: 'Today'
            }
        },
        {
            title: 'Start Year',
            name: 'startYear',
            type: 'date',
            options: {
                dateFormat: 'YYYY',
                calendarTodayLabel: 'Today'
            }
        },
        {
            title: 'End Month',
            name: 'endMonth',
            type: 'date',
            options: {
                dateFormat: 'MMMM',
                calendarTodayLabel: 'Today'
            }
        },
        {
            title: 'End Year',
            name: 'endYear',
            type: 'date',
            options: {
                dateFormat: 'YYYY',
                calendarTodayLabel: 'Today'
            }
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
