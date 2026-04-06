import React from "react";
import PropTypes from "prop-types";
import BlockContent from "../../../BlockContent";

const TextSection = ({ heading, label, text }) => (
  <div className="pb-8">
    <section className="w-full max-w-narrow mx-auto px-6 box-border">
      <div className="text-micro leading-[1.2] uppercase tracking-[0.5px] mt-[1em]">{label}</div>
      <h1 className="text-title2 leading-[1.375] m-0 [.label+&]:mt-[0.25em]">{heading}</h1>
      {text && (
        <div className="[&>*]:m-0">
          <BlockContent blocks={text} />
        </div>
      )}
    </section>
  </div>
);

TextSection.propTypes = {
  heading: PropTypes.string.isRequired,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TextSection.defaultProps = {
  label: "",
};

export default TextSection;
