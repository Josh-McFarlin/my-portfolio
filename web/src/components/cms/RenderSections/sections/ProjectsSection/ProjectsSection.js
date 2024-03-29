import React from "react";
import PropTypes from "prop-types";
import Project from "./Project";
import styles from "./ProjectsSection.module.scss";

const ProjectsSection = ({ heading, projects }) => (
  <div className={styles.root}>
    <section className={styles.section}>
      {heading != null && <h1 className={styles.title}>{heading}</h1>}
      <div className={styles.projectList}>
        {projects.map((data) => (
          <Project key={data.name} {...data} />
        ))}
      </div>
    </section>
  </div>
);

ProjectsSection.propTypes = {
  heading: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ProjectsSection.defaultProps = {
  heading: null,
};

export default ProjectsSection;
