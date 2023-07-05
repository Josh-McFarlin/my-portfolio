import React from "react";
import PropTypes from "prop-types";
import BlockContent from "../../../../BlockContent";
import SanityImage from "../../../../SanityImage";
import styles from "./Project.module.scss";

const Project = ({ name, tags, description, image, links }) => (
  <div className={styles.root}>
    <div className={styles.content}>
      <h1 className={styles.title}>{name}</h1>
      {description && <BlockContent blocks={description} />}
      {tags.length > 0 && (
        <div className={styles.tagsContainer}>
          {tags.map((tag) => (
            <div key={tag} className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>
      )}
      {links && (
        <div className={styles.linkContainer}>
          {links.map((data) => (
            <a
              key={data.title}
              className={styles.button}
              href={data.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.title}
            </a>
          ))}
        </div>
      )}
    </div>
    <SanityImage className={styles.image} src={image} />
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.array.isRequired,
  image: PropTypes.object.isRequired,
  links: PropTypes.arrayOf(PropTypes.object),
};

Project.defaultProps = {
  links: [],
  tags: [],
};

export default Project;
