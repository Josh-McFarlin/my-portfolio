import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';

import styles from './BasicImage.module.css';
import client from '../../../client';


function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

class BasicImage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            src: null
        };
    }

    async componentDidMount() {
        const { image, width, height } = this.props;

        const src = await urlFor(image)
            .width(width)
            .height(height)
            .dpr(2)
            .fit('clip')
            .auto('format')
            .url();

        this.setState({
            src
        });
    }

    render() {
        const { image, circular, width, maxWidth, height, maxHeight } = this.props;
        const { src } = this.state;

        const contStyle = {
            maxWidth: maxWidth ? `${maxWidth}vw` : undefined,
            maxHeight: maxHeight ? `${maxHeight}vh` : undefined
        };

        const imgStyle = {
            borderRadius: circular ? '50%' : '0',
            maxWidth: width,
            maxHeight: height,
            width,
            height
        };

        return (
            <div className={styles.root}>
                <section className={styles.section}>
                    <div
                        style={contStyle}
                        className={styles.imageContainer}
                    >
                        <img
                            src={src}
                            className={styles.image}
                            style={imgStyle}
                            alt={image.alt}
                        />
                    </div>
                </section>
            </div>
        );
    }
}

BasicImage.propTypes = {
    image: PropTypes.object.isRequired,
    circular: PropTypes.bool,
    width: PropTypes.number,
    maxWidth: PropTypes.number,
    height: PropTypes.number,
    maxHeight: PropTypes.number
};

BasicImage.defaultProps = {
    circular: false,
    width: null,
    height: null,
    maxWidth: null,
    maxHeight: null
};

export default BasicImage;
