import React from 'react';
import PropTypes from 'prop-types';

import SimpleBlockContent from '../../SimpleBlockContent';
import styles from './Job.module.css';


function Job(props) {
    const { company, position, location, startMonth, startYear, endMonth, endYear, description } = props;

    return (
        <div className={styles.root}>
            <section className={styles.article}>
                <h2 className={styles.heading}>{company}</h2>
                <h2 className={styles.heading}>{position}</h2>
                <div className={styles.label}>{startMonth}, {startYear} - {endMonth}, {endYear}</div>
                <div className={styles.label}>{location}</div>
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
    startMonth: PropTypes.string.isRequired,
    startYear: PropTypes.string.isRequired,
    endMonth: PropTypes.string.isRequired,
    endYear: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Job;
