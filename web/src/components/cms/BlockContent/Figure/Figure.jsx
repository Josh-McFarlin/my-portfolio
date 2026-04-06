import React from "react";
import PropTypes from "prop-types";
import SanityImage from "../../SanityImage";

const Figure = ({ node }) => (
  <SanityImage className="w-[600px] max-w-full mx-auto" src={node.asset} alt={node.alt} />
);

Figure.propTypes = {
  node: PropTypes.any,
};

export default Figure;
