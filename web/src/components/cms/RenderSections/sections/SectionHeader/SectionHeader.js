import React from "react";
import PropTypes from "prop-types";

const headerSizeClasses = {
  sm: "text-title3 leading-[1.429] my-[0.25em]",
  md: "text-title2 leading-[1.375] my-[0.25em]",
  lg: "text-title1 leading-[1.163] my-[0.25em]",
};

const SectionHeader = ({ header, align, size }) => (
  <div>
    <section className="w-full max-w-narrow mx-auto px-6 box-border">
      <h1 className={headerSizeClasses[size] ?? headerSizeClasses.md} align={align}>
        {header}
      </h1>
    </section>
  </div>
);

SectionHeader.propTypes = {
  header: PropTypes.string.isRequired,
  align: PropTypes.string,
  size: PropTypes.string,
};

SectionHeader.defaultProps = {
  align: "left",
  size: "md",
};

export default SectionHeader;
