import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectsSection.module.css';
import Project from './Project';


function ProjectsSection(props) {
    const { heading, projects } = props;

    return (
        <div className={styles.root}>
            <section className={styles.section}>
                {(heading) && (
                    <h1 className={styles.heading}>{heading}</h1>
                )}
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
    heading: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.object)
};

ProjectsSection.defaultProps = {
    heading: null,
    projects: []
};

ProjectsSection.defaultProps = {
    heading: null
};

export default ProjectsSection;
