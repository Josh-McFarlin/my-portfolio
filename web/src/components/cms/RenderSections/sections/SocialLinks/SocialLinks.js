import React from "react";
import PropTypes from "prop-types";
import { Icon as IconifyIcon } from "@iconify/react";

const TextSection = ({ linkedIn, gitHub, twitter, instagram }) => (
  <div className="pb-8">
    <section className="w-full max-w-narrow mx-auto px-6 box-border flex justify-center">
      {linkedIn && (
        <a
          className="mx-2 flex justify-center items-center"
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconifyIcon
            className="text-inherit fill-current"
            icon="ion:logo-linkedin"
            fontSize="30px"
          />
        </a>
      )}
      {gitHub && (
        <a
          className="mx-2 flex justify-center items-center"
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconifyIcon
            className="text-inherit fill-current"
            icon="ion:logo-github"
            fontSize="30px"
          />
        </a>
      )}
      {twitter && (
        <a
          className="mx-2 flex justify-center items-center"
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconifyIcon
            className="text-inherit fill-current"
            icon="ion:logo-twitter"
            fontSize="30px"
          />
        </a>
      )}
      {instagram && (
        <a
          className="mx-2 flex justify-center items-center"
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconifyIcon
            className="text-inherit fill-current"
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
