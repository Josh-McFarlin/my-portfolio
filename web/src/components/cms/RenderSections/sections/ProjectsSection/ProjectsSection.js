import React from "react";
import PropTypes from "prop-types";
import Project from "./Project";

const ProjectsSection = ({ heading, projects }) => (
  <div className="pb-8">
    <section className="flex flex-col justify-center items-center mx-auto">
      {heading != null && (
        <h1 className="text-title3 leading-[1.429] mt-[0.25em]">{heading}</h1>
      )}
      <div className="w-full max-w-[50em] p-4 box-border">
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
