import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import SimpleBlockContent from '../../SimpleBlockContent';
import styles from './Job.module.css';


function Job(props) {
    const { company, position, location, startDate, endDate, description } = props;

    const startForm = moment(startDate, 'YYYY-MM-DD');
    const endForm = moment(endDate, 'YYYY-MM-DD');

    const dateString = startForm.year() === endForm.year() ?
        `${startForm.format('MMMM')} - ${endForm.format('MMMM, YYYY')}` :
        `${startForm.format('MMMM, YYYY')} - ${endForm.format('MMMM, YYYY')}`;

    return (
        <div className={styles.root}>
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
