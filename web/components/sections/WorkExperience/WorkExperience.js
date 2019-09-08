import React from 'react';
import PropTypes from 'prop-types';

import styles from './WorkExperience.module.css';
import Job from './Job';


function WorkExperience(props) {
    const { heading, jobs } = props;

    return (
        <div className={styles.root}>
            <section className={styles.workExperience}>
                <h1 className={styles.heading}>{heading}</h1>
                <div>
                    {jobs.map((data) => (
                        <Job
                            key={data.company + data.position}
                            {...data}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

WorkExperience.propTypes = {
    heading: PropTypes.string.isRequired,
    jobs: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default WorkExperience;
