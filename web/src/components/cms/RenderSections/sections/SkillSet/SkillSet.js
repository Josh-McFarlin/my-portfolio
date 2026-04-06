import React from "react";
import PropTypes from "prop-types";
import Skill from "./Skill";

const SkillSet = ({ heading, skills }) => (
  <div className="pb-8 -mt-6">
    <section className="w-full max-w-narrow mx-auto px-6 box-border">
      <h1 className="text-title4 leading-[1.5] my-[0.25em] text-center">{heading}</h1>
      <div className="flex flex-row flex-wrap justify-center">
        {skills.map((data) => (
          <Skill key={data.name} {...data} />
        ))}
      </div>
    </section>
  </div>
);

SkillSet.propTypes = {
  heading: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SkillSet;
