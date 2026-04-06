import React from "react";
import PropTypes from "prop-types";
import School from "./School";

const Education = ({ heading, schools }) => (
  <div className="pb-8">
    <section className="w-full max-w-narrow mx-auto px-6 box-border">
      <h1 className="text-title2 leading-[1.375] my-[0.25em] max-lg:underline">{heading}</h1>
      <div>
        {schools.map((data) => (
          <School key={data.name + data.startYear} {...data} />
        ))}
      </div>
    </section>
  </div>
);

Education.propTypes = {
  heading: PropTypes.string.isRequired,
  schools: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Education;
