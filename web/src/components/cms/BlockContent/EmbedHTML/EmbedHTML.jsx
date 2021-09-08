import React from "react";
import PropTypes from "prop-types";

const EmbedHTML = ({ node }) => (
  <div dangerouslySetInnerHTML={{ __html: node.html }} />
);

EmbedHTML.propTypes = {
  node: PropTypes.any,
};

export default EmbedHTML;
