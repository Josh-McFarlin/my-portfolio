import React from "react";
import PropTypes from "prop-types";

import styles from "./WorkExperience.module.scss";
import Job from "./Job";

const WorkExperience = ({ heading, jobs }) => (
  <div className={styles.root}>
    <section className={styles.workExperience}>
      <h1 className={styles.heading}>{heading}</h1>
      <div>
        {jobs.map((data) => (
          <Job key={data.company + data.position} {...data} />
        ))}
      </div>
    </section>
  </div>
);

WorkExperience.propTypes = {
  heading: PropTypes.string.isRequired,
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WorkExperience;
