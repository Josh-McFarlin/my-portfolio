import React from "react";
import PropTypes from "prop-types";

import SimpleBlockContent from "../../SimpleBlockContent";
import styles from "./School.module.css";

const School = ({
  name,
  location,
  startYear,
  endYear,
  description,
  completedCourses,
  currentCourses,
}) => (
  <div className={styles.root}>
    <section className={styles.school}>
      <h2 className={styles.heading}>{name}</h2>
      <div className={styles.details}>
        {`${new Date(startYear).getUTCFullYear()} - ${new Date(
          endYear
        ).getUTCFullYear()} in ${location}`}
      </div>
      {description && <SimpleBlockContent blocks={description} />}
      {completedCourses && (
        <div>
          <div className={styles.details}>Completed Courses</div>
          <ul>
            {completedCourses.map((course) => (
              <li key={course} className={styles.details}>
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
      {currentCourses && (
        <div>
          <div className={styles.details}>Current Courses</div>
          <ul>
            {currentCourses.map((course) => (
              <li key={course} className={styles.details}>
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  </div>
);

School.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  endYear: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.object).isRequired,
  completedCourses: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCourses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default School;
