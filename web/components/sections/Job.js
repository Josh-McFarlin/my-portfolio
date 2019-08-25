import React from 'react';
import PropTypes from 'prop-types';

import SimpleBlockContent from '../SimpleBlockContent';
import styles from './TextSection.module.css';


function Job(props) {
    const { company, position, location, startMonth, startYear, endMonth, endYear, description } = props;

    return (
        <div className={styles.root}>
            <section className={styles.article}>
                <div className={styles.label}>{company}</div>
                <h2 className={styles.heading}>{position}</h2>
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
