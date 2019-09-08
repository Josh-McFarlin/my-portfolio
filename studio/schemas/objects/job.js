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
            title: 'Start Date',
            name: 'startDate',
            type: 'date',
            options: {
                dateFormat: 'MMMM, YYYY',
                calendarTodayLabel: 'Today'
            }
        },
        {
            title: 'End Date',
            name: 'endDate',
            type: 'date',
            options: {
                dateFormat: 'MMMM, YYYY',
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
