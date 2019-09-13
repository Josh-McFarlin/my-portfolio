import React from 'react';
import PropTypes from 'prop-types';

import SimpleBlockContent from '../../SimpleBlockContent';
import styles from './Job.module.css';


function Job(props) {
    const { company, position, location, startDate, endDate, description } = props;

    const startForm = new Date(startDate);
    const endForm = new Date(endDate);

    const monYear = {
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    };

    const onlyMonth = {
        month: 'long'
    };

    const endFormatted = new Intl.DateTimeFormat('en-US', monYear).format(endForm);

    const dateString = startForm.getFullYear() === endForm.getFullYear() ?
        `${new Intl.DateTimeFormat('en-US', onlyMonth).format(startForm)} - ${endFormatted}` :
        `${new Intl.DateTimeFormat('en-US', monYear).format(startForm)} - ${endFormatted}`;

    return (
        <div
            className={styles.root}
            id={`work-${company}`}
        >
            <section className={styles.job}>
                <h2 className={styles.heading}>{position} @ {company}</h2>
                <div className={styles.details}>{dateString} in {location}</div>
                {description && (
                    <SimpleBlockContent blocks={description} />
                )}
            </section>
        </div>
    );
}

Job.propTypes = {
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Job;
