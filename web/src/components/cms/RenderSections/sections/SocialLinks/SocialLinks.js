import React from "react";
import PropTypes from "prop-types";
import { Icon as IconifyIcon } from "@iconify/react";
import classes from "./SocialLinks.module.scss";

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
          <IconifyIcon
            className={classes.logo}
            icon="ion:logo-linkedin"
            fontSize="30px"
          />
        </a>
      )}
      {gitHub && (
        <a
          className={classes.link}
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconifyIcon
            className={classes.logo}
            icon="ion:logo-github"
            fontSize="30px"
          />
        </a>
      )}
      {twitter && (
        <a
          className={classes.link}
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconifyIcon
            className={classes.logo}
            icon="ion:logo-twitter"
            fontSize="30px"
          />
        </a>
      )}
      {instagram && (
        <a
          className={classes.link}
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconifyIcon
            className={classes.logo}
            icon="ion:logo-instagram"
            fontSize="30px"
          />
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
