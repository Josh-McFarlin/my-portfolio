import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';

import styles from './BasicImage.module.css';
import client from '../../../client';


function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

function BasicImage(props) {
    const { image, circular, size } = props;

    const src = urlFor(image)
        .width(600)
        .height(600)
        .fit('clip')
        .auto('format')
        .url();

    const style = {
        borderRadius: circular ? '50%' : '0',
        width: `${size}%`
    };

    return (
        <div className={styles.root}>
            <section className={styles.article}>
                <img
                    className={styles.image}
                    style={style}
                    src={src}
                    alt={image.alt}
                />
            </section>
        </div>
    );
}

BasicImage.propTypes = {
    image: PropTypes.object.isRequired,
    circular: PropTypes.bool.isRequired,
    size: PropTypes.number.isRequired
};

export default BasicImage;
