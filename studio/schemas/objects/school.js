export default {
    type: 'object',
    name: 'school',
    title: 'School',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location'
        },
        {
            name: 'startYear',
            type: 'string',
            title: 'Start Year'
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
        },
        {
            name: 'completedCourses',
            type: 'array',
            title: 'Completed Courses',
            of: [{
                type: 'string'
            }]
        },
        {
            name: 'currentCourses',
            type: 'array',
            title: 'Current Courses',
            of: [{
                type: 'string'
            }]
        }
    ],
    preview: {
        select: {
            title: 'name'
        },
        prepare({ title }) {
            return {
                title
            };
        }
    }
};
