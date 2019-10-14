import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';

import styles from './Project.module.css';
import client from '../../../client';
import SimpleBlockContent from '../../SimpleBlockContent';


function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

function Project(props) {
    const { name, tags, description, image, links } = props;

    const projImage = urlFor(image)
        .height(300)
        .dpr(3)
        .auto('format')
        .url();

    const imgStyle = image ? {
        backgroundImage: `url("${projImage}")`,
        backgroundSize: 'cover'
    } : {};

    return (
        <div className={`${styles.root} card`}>
            <div
                style={imgStyle}
                className={styles.image}
            />
            <div className={styles.content}>
                <h1 className={styles.title}>{name}</h1>
                {(description) && (
                    <SimpleBlockContent blocks={description} />
                )}
                {(tags.length > 0) && (
                    <div className={styles.tagsContainer}>
                        {tags.map((tag) => (
                            <div
                                key={tag}
                                className={styles.tag}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                )}
                {(links) && (
                    <div className={styles.linkContainer}>
                        {links.map((data) => (
                            <a
                                key={data.title}
                                className={styles.button}
                                href={data.href}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {data.title}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.array.isRequired,
    image: PropTypes.object.isRequired,
    links: PropTypes.arrayOf(PropTypes.object)
};

Project.defaultProps = {
    links: [],
    tags: []
};

export default Project;
