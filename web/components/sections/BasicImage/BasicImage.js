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
            src: null,
            loaded: false,
            error: false
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

    onLoad = () => {
        this.setState({
            loaded: true
        });
    };

    onError = () => {
        this.setState({
            error: true
        });
    };

    render() {
        const { image, circular, width, maxWidth, height, maxHeight } = this.props;
        const { src, loaded, error } = this.state;

        if (image == null || error) {
            return null;
        }

        const contStyle = {
            maxWidth: maxWidth ? `${maxWidth}vw` : 'none',
            maxHeight: maxHeight ? `${maxHeight}vh` : 'none'
        };

        const imgStyle = {
            borderRadius: circular ? '50%' : '0',
            maxWidth: width,
            maxHeight: height
        };

        if (!loaded) {
            imgStyle.width = `${width}px`;
            imgStyle.height = `${height}px`;
        }

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
                            onLoad={this.onLoad}
                            onError={this.onError}
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
