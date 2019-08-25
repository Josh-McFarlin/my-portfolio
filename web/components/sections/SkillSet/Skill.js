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

    const style = image ? {
        backgroundImage: `url("${urlFor(image)
            .width(60)
            .auto('format')
            .url()}")`
    } : {};

    /*
    return (
        <div className={styles.root} style={style}>
            <div className={styles.content}>
                <h1 className={styles.title}>{name}</h1>
            </div>
        </div>
    );
    */

    // const lowUrl = ;
    const highUrl = urlFor(image)
        .width(60)
        .auto('format')
        .url();

    console.log('image', image)
    console.log('urlFor', urlFor(image))

    return (
        <figure
            style={{
                // backgroundImage: `url(${image.metadata.lqip})`,
                // paddingTop: `calc(100% / ${image.metadata.dimensions.aspectRatio})`
            }}
        >
            <img src={`${highUrl}`} />
        </figure>
    );
}

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
};

export default Skill;
