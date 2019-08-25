import React from 'react';
import PropTypes from 'prop-types';

import styles from './SkillSet.module.css';
import Skill from './Skill';


function SkillSet(props) {
    const { heading, skills } = props;

    return (
        <div className={styles.root}>
            <section className={styles.article}>
                <h1 className={styles.title}>{heading}</h1>
                <div>
                    {skills.map((data) => (
                        <Skill
                            key={data.name}
                            {...data}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

SkillSet.propTypes = {
    heading: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SkillSet;
