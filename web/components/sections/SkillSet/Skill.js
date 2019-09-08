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
            .width(500)
            .auto('format')
            .url()}")`,
        backgroundSize: 'contain'
    } : {};

    return (
        <div className={styles.root}>
            <div
                style={style}
                className={styles.skill}
            />
            <p className={styles.name}>{name}</p>
        </div>
    );
}

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
};

export default Skill;
