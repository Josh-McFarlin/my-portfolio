import React from "react";
import PropTypes from "prop-types";
import BlockContent from "../../../BlockContent";

const School = ({
  name,
  location,
  startYear,
  endYear,
  description,
  completedCourses=[],
  currentCourses=[],
}) => (
  <div className="[&:not(:last-of-type)]:pb-2">
    <section className="w-full max-w-narrow mx-auto px-6 box-border max-lg:!px-0">
      <h2 className="text-title4 leading-[1.5] mt-[0.25em] mb-0">{name}</h2>
      <div className="text-small leading-[1.5]">
        {`${new Date(startYear).getUTCFullYear()} - ${new Date(
          endYear
        ).getUTCFullYear()} in ${location}`}
      </div>
      {description && <BlockContent blocks={description} />}
      {completedCourses.length > 0 && (
        <div>
          <div className="text-small leading-[1.5]">Completed Courses</div>
          <ul className="m-0">
            {completedCourses.map((course) => (
              <li key={course} className="text-small leading-[1.5] mt-[0.25em]">
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
      {currentCourses.length > 0 && (
        <div>
          <div className="text-small leading-[1.5]">Current Courses</div>
          <ul className="m-0">
            {currentCourses.map((course) => (
              <li key={course} className="text-small leading-[1.5] mt-[0.25em]">
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
