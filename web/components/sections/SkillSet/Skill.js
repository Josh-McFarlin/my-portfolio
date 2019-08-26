import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';

import styles from './Skill.module.css';
import client from '../../../client';


function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

function Skill(props) {
    const { name, image } = props;

    const lowUrl = urlFor(image)
        .width(20)
        .auto('format')
        .url();

    const highUrl = urlFor(image)
        .width(200)
        .auto('format')
        .url();

    return (
        <figure
            style={{
                backgroundImage: `url(${lowUrl})`,
                // paddingTop: `calc(100% / ${image.metadata.dimensions.aspectRatio})`
            }}
        >
            <img src={`${highUrl}`} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
};

export default Skill;
