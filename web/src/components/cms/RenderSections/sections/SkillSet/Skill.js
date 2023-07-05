import React from "react";
import PropTypes from "prop-types";
import SanityImage from "../../../SanityImage";
import styles from "./Skill.module.scss";

const Skill = ({ name, image }) => (
  <div className={styles.root}>
    {image && (
      <SanityImage
        className={styles.skillImage}
        src={image}
        width={26}
        height={22}
        placeholder="empty"
      />
    )}
    {name && <p className={styles.skillText}>{name}</p>}
  </div>
);

Skill.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
};

Skill.defaultProps = {
  name: null,
  image: null,
};

export default Skill;
