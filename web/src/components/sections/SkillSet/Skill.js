import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";

import styles from "./Skill.module.css";
import client from "../../../../client";

const urlFor = (source) => imageUrlBuilder(client).image(source);

const Skill = ({ name, image }) => {
  const imageStyle = image
    ? {
        backgroundImage: `url("${urlFor(image)
          .fit("clip")
          .width(26)
          .height(22)
          .dpr(3)
          .auto("format")
          .ignoreImageParams()
          .url()}")`,
        backgroundSize: "contain",
      }
    : {};

  return (
    <div className={styles.root}>
      {image && <div style={imageStyle} className={styles.skillImage} />}
      {name && <p className={styles.skillText}>{name}</p>}
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
};

Skill.defaultProps = {
  name: null,
  image: null,
};

export default Skill;
