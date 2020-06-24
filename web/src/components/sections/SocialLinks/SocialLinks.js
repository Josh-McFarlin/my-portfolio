import React from "react";
import PropTypes from "prop-types";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";

import styles from "./SocialLinks.module.css";

function TextSection(props) {
  const { linkedIn, gitHub, twitter, instagram } = props;

  return (
    <div className={styles.root}>
      <section className={styles.section}>
        {linkedIn && (
          <a
            className={styles.link}
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoLinkedin fontSize="30px" />
          </a>
        )}
        {gitHub && (
          <a
            className={styles.link}
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoGithub fontSize="30px" />
          </a>
        )}
        {twitter && (
          <a
            className={styles.link}
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoTwitter fontSize="30px" />
          </a>
        )}
        {instagram && (
          <a
            className={styles.link}
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoInstagram fontSize="30px" />
          </a>
        )}
      </section>
    </div>
  );
}

TextSection.propTypes = {
  linkedIn: PropTypes.string,
  gitHub: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
};

TextSection.defaultProps = {
  linkedIn: null,
  gitHub: null,
  angelList: null,
  twitter: null,
  instagram: null,
};

export default TextSection;
