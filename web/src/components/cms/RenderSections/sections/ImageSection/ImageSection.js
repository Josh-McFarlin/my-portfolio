import React from "react";
import PropTypes from "prop-types";
import BlockContent from "../../../BlockContent";
import Cta from "../../../../Cta";
import SanityImage from "../../../SanityImage";
import styles from "./ImageSection.module.scss";

const ImageSection = ({ heading, label, text, image, cta }) => {
  if (image == null) {
    return null;
  }

  return (
    <div className={styles.root}>
      <figure className={styles.content}>
        <SanityImage src={image} className={styles.image} alt={heading} />
        <figcaption>
          <div className={styles.caption}>
            <div className={styles.captionBox}>
              <div className={styles.label}>{label}</div>
              <h2 className={styles.title}>{heading}</h2>
              {text && <BlockContent blocks={text} />}
              {cta && cta.route && <Cta {...cta} />}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

ImageSection.propTypes = {
  heading: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }).isRequired,
  backgroundImage: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  cta: PropTypes.object.isRequired,
};

export default ImageSection;
