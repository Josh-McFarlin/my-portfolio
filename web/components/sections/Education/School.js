import React from 'react';
import PropTypes from 'prop-types';

import SimpleBlockContent from '../../SimpleBlockContent';
import styles from '../TextSection/TextSection.module.css';


function School(props) {
    const { name, location, startYear, endYear, description, completedCourses, currentCourses } = props;

    return (
        <div className={styles.root}>
            <section className={styles.article}>
                <h2 className={styles.heading}>{name}</h2>
                <div className={styles.label}>{location}</div>
                <div className={styles.label}>{startYear} - {endYear}</div>
                {description && (
                    <SimpleBlockContent blocks={description} />
                )}
                {completedCourses && (
                    <div>
                        <div className={styles.label}>Completed Courses</div>
                        <ul>
                            {completedCourses.map((course) => (
                                <li className={styles.label}>{course}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {currentCourses && (
                    <div>
                        <div className={styles.label}>Current Courses</div>
                        <ul>
                            {currentCourses.map((course) => (
                                <li className={styles.label}>{course}</li>
                            ))}
                        </ul>
                    </div>
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
