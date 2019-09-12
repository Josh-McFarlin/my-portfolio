import React from 'react';
import PropTypes from 'prop-types';

import styles from './Education.module.css';
import School from './School';


function Education(props) {
    const { heading, schools } = props;

    return (
        <div className={styles.root}>
            <section className={styles.education}>
                <h1 className={styles.heading}>{heading}</h1>
                <div>
                    {schools.map((data) => (
                        <School
                            key={data.name + data.startYear}
                            {...data}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

Education.propTypes = {
    heading: PropTypes.string.isRequired,
    schools: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Education;
