import React from "react";
import PropTypes from "prop-types";
import SanityImage from "../../SanityImage";
import classes from "./Figure.module.scss";

const Figure = ({ node }) => (
  <SanityImage className={classes.root} src={node.asset} alt={node.alt} />
);

Figure.propTypes = {
  node: PropTypes.any,
};

export default Figure;
