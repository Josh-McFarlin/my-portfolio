import React from "react";
import PropTypes from "prop-types";
import BlockContent from "../../../BlockContent";
import Cta from "../../../../Cta";
import SanityImage from "../../../SanityImage";
import styles from "./Hero.module.scss";

const Hero = ({ heading, backgroundImage, tagline, ctas }) => (
  <div className={styles.root}>
    <div className={styles.content}>
      <h1 className={styles.title}>{heading}</h1>
      <div className={styles.tagline}>
        {tagline && <BlockContent blocks={tagline} />}
      </div>
      {ctas && (
        <div className={styles.ctas}>
          {ctas.map((cta) => (
            <Cta {...cta} key={cta._key} />
          ))}
        </div>
      )}
    </div>
    <div className={styles.background}>
      <SanityImage src={backgroundImage} />
    </div>
  </div>
);

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  backgroundImage: PropTypes.object.isRequired,
  tagline: PropTypes.array.isRequired,
  ctas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Hero;
