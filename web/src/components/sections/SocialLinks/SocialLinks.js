import React from "react";
import PropTypes from "prop-types";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import classes from "./SocialLinks.module.css";

const TextSection = ({ linkedIn, gitHub, twitter, instagram }) => (
  <div className={classes.root}>
    <section className={classes.section}>
      {linkedIn && (
        <a
          className={classes.link}
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoLinkedin className={classes.logo} fontSize="30px" />
        </a>
      )}
      {gitHub && (
        <a
          className={classes.link}
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoGithub className={classes.logo} fontSize="30px" />
        </a>
      )}
      {twitter && (
        <a
          className={classes.link}
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoTwitter className={classes.logo} fontSize="30px" />
        </a>
      )}
      {instagram && (
        <a
          className={classes.link}
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoInstagram className={classes.logo} fontSize="30px" />
        </a>
      )}
    </section>
  </div>
);

TextSection.propTypes = {
  linkedIn: PropTypes.string,
  gitHub: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
};

TextSection.defaultProps = {
  linkedIn: null,
  gitHub: null,
  twitter: null,
  instagram: null,
};

export default TextSection;
