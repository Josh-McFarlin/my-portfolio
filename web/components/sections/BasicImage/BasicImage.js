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

        this.imageRef = React.createRef();

        this.state = {
            src: null,
            error: false
        };
    }

    async componentDidMount() {
        const { image, width, height, maxWidth, maxHeight } = this.props;

        const imageWidth = this.imageRef.current.clientWidth || maxWidth || width * 5 || 500;
        const imageHeight = this.imageRef.current.clientHeight || maxHeight || height * 5 || 500;

        try {
            const src = await urlFor(image)
                .width(imageWidth)
                .height(imageHeight)
                .dpr(3)
                .fit('clip')
                .auto('format')
                .url();

            this.setState({
                src
            });
        } catch (e) {
            this.onError();
        }
    }

    onError = () => {
        this.setState({
            error: true
        });
    };

    render() {
        const { image, circular, width, maxWidth, height, maxHeight } = this.props;
        const { src, error } = this.state;

        if (image.image == null || error) {
            return null;
        }

        const contStyle = {
            width: `${width}vw`,
            height: `${height}vh`,
            maxWidth: maxWidth != null ? maxWidth : 'none',
            maxHeight: maxHeight != null ? maxHeight : 'none'
        };

        const imgStyle = {
            borderRadius: circular ? '50%' : '0'
        };

        return (
            <div className={styles.root}>
                <section className={styles.section}>
                    <div
                        className={styles.imageContainer}
                        style={contStyle}
                    >
                        <img
                            ref={this.imageRef}
                            src={src}
                            className={styles.image}
                            style={imgStyle}
                            alt={image.alt}
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
