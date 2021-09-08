import React from "react";
import PropTypes from "prop-types";
import { imageBuilder } from "../../../../utils/sanity/client";
import classes from "./Figure.module.scss";

const Figure = ({ node }) => (
  <img
    className={classes.root}
    src={
      imageBuilder.image(node.asset).auto("format").width(2000).url() ??
      undefined
    }
    alt={node.alt}
  />
);

Figure.propTypes = {
  node: PropTypes.any,
};

export default Figure;
