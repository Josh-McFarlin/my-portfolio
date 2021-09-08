import React from "react";
import PropTypes from "prop-types";
import BlockContent from "../../../BlockContent";
import styles from "./TextSection.module.scss";

const TextSection = ({ heading, label, text }) => (
  <div className={styles.root}>
    <section className={styles.section}>
      <div className={styles.label}>{label}</div>
      <h1 className={styles.heading}>{heading}</h1>
      {text && <BlockContent className={styles.textContainer} blocks={text} />}
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
