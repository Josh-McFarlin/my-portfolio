import React from "react";
import PropTypes from "prop-types";
import BlockContent from "../../../BlockContent";
import styles from "./School.module.scss";

const School = ({
  name,
  location,
  startYear,
  endYear,
  description,
  completedCourses=[],
  currentCourses=[],
}) => (
  <div className={styles.root}>
    <section className={styles.school}>
      <h2 className={styles.heading}>{name}</h2>
      <div className={styles.details}>
        {`${new Date(startYear).getUTCFullYear()} - ${new Date(
          endYear
        ).getUTCFullYear()} in ${location}`}
      </div>
      {description && <BlockContent blocks={description} />}
      {completedCourses.length > 0 && (
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
      {currentCourses.length > 0 && (
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
  completedCourses: PropTypes.arrayOf(PropTypes.string),
  currentCourses: PropTypes.arrayOf(PropTypes.string),
};

School.defaultProps = {
  completedCourses: [],
  currentCourses: [],
};

export default School;
