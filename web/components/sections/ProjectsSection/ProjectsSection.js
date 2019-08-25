import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectsSection.module.css';
import Project from './Project';


function ProjectsSection(props) {
    const { heading, projects } = props;

    return (
        <div className={styles.root}>
            <section className={styles.article}>
                <h1 className={styles.title}>{heading}</h1>
                <div>
                    {projects.map((data) => (
                        <Project
                            key={data.name}
                            {...data}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

ProjectsSection.propTypes = {
    heading: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProjectsSection;
