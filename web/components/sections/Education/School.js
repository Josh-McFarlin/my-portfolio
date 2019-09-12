import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import SimpleBlockContent from '../../SimpleBlockContent';
import styles from './School.module.css';


function School(props) {
    const { name, location, startYear, endYear, description, completedCourses, currentCourses } = props;

    const startForm = moment(startYear, 'YYYY-MM-DD');
    const endForm = moment(endYear, 'YYYY-MM-DD');

    return (
        <div className={styles.root}>
            <section className={styles.school}>
                <h2 className={styles.heading}>{name}</h2>
                <div className={styles.details}>{startForm.year()} - {endForm.year()} in {location}</div>
                {(description) && (
                    <SimpleBlockContent blocks={description} />
                )}
                {(completedCourses) && (
                    <div>
                        <div className={styles.details}>Completed Courses</div>
                        <ul>
                            {completedCourses.map((course) => (
                                <li
                                    key={course}
                                    className={styles.details}
                                >
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {(currentCourses) && (
                    <div>
                        <div className={styles.details}>Current Courses</div>
                        <ul>
                            {currentCourses.map((course) => (
                                <li
                                    key={course}
                                    className={styles.details}
                                >
                                    {course}
                                </li>
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
