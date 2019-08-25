import React from 'react';
import PropTypes from 'prop-types';

import SimpleBlockContent from '../../SimpleBlockContent';
import styles from '../TextSection/TextSection.module.css';


function School(props) {
    const { name, location, startYear, endYear, description, completedCourses, currentCourses } = props;

    return (
        <div className={styles.root}>
            <section className={styles.article}>
                <div className={styles.label}>{name}</div>
                <h2 className={styles.heading}>{location}</h2>
                {description && (
                    <SimpleBlockContent blocks={description} />
                )}
            </section>
        </div>
    );
}

School.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startYear: PropTypes.string.isRequired,
    endYear: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.object).isRequired,
    completedCourses: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentCourses: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default School;
