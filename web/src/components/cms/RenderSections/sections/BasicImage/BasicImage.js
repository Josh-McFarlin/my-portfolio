import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SanityImage from "../../../SanityImage";
import styles from "./BasicImage.module.scss";

const BasicImage = (props) => {
  if (props.image.image == null) {
    return null;
  }

  const contStyle = {
    borderRadius: props.circular ? "50%" : 0,
    width: `${props.width}vw`,
    height: `${props.height}vh`,
    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight,
  };

  return (
    <div className={styles.root}>
      <section className={styles.section}>
        <div className={styles.imageContainer} style={contStyle}>
          <SanityImage
            className={clsx(styles.image, props.circular && styles.circular)}
            src={props.image}
          />
        </div>
      </section>
    </div>
  );
};

BasicImage.propTypes = {
  image: PropTypes.object.isRequired,
  circular: PropTypes.bool,
  width: PropTypes.number,
  maxWidth: PropTypes.number,
  height: PropTypes.number,
  maxHeight: PropTypes.number,
};

BasicImage.defaultProps = {
  circular: false,
  width: null,
  height: null,
  maxWidth: null,
  maxHeight: null,
};

export default BasicImage;
