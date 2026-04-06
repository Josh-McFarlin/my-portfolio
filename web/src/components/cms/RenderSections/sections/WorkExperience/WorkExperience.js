import React from "react";
import PropTypes from "prop-types";
import Job from "./Job";

const WorkExperience = ({ heading, jobs }) => (
  <div className="pb-8">
    <section className="w-full max-w-narrow mx-auto px-6 box-border">
      <h1 className="text-title2 leading-[1.375] my-[0.25em] max-lg:underline">{heading}</h1>
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
