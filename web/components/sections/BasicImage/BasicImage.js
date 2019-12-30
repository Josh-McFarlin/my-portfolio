import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import useComponentSize from '@rehooks/component-size';
import styles from './BasicImage.module.css';
import client from '../../../client';


function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

const BasicImage = (props) => {
    const [src, setSrc] = React.useState(null);
    const [error, setError] = React.useState(false);
    const imageContainer = React.useRef(null);
    const { width, height } = useComponentSize(imageContainer);

    const onError = () => {
        setError(true);
    };

    React.useLayoutEffect(() => {
        const handler = async () => {
            const imageWidth = imageContainer.current.clientWidth || props.maxWidth || 500;
            const imageHeight = imageContainer.current.clientHeight || props.maxHeight || 500;

            try {
                const newSrc = await urlFor(props.image)
                    .width(imageWidth)
                    .height(imageHeight)
                    .dpr(3)
                    .fit('clip')
                    .auto('format')
                    .url();

                setSrc(newSrc);
            } catch (e) {
                onError();
            }
        };

        handler();
    }, []);

    if (props.image.image == null || error) {
        return null;
    }

    const contStyle = {
        width: `${props.width}vw`,
        height: `${props.height}vh`,
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight
    };

    const imgStyle = {
        borderRadius: props.circular ? '50%' : '0'
    };

    const smaller = Math.min(width, height)

    return (
        <div className={styles.root}>
            <section className={styles.section}>
                <div
                    className={styles.imageContainer}
                    style={contStyle}
                    ref={imageContainer}
                >
                    <div
                        style={{
                            ...imgStyle,
                            width: smaller,
                            height: smaller,
                            backgroundImage: `url('${src}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }}
                    />
                </div>
            </section>
        </div>
    );
};


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
