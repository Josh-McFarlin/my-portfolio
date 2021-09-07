import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import useComponentSize from "@rehooks/component-size";
import styles from "./BasicImage.module.scss";
import client from "../../../../../utils/sanity/client";

const BasicImage = (props) => {
  const imageContainer = React.useRef(null);
  const { width, height } = useComponentSize(imageContainer);

  if (props.image.image == null) {
    return null;
  }

  const contStyle = {
    width: `${props.width}vw`,
    height: `${props.height}vh`,
    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight,
  };

  const smaller = Math.min(width, height);

  const imageWidth = width || props.maxWidth || 500;
  const imageHeight = height || props.maxHeight || 500;

  const src = imageUrlBuilder(client)
    .image(props.image)
    .width(imageWidth)
    .height(imageHeight)
    .dpr(3)
    .fit("clip")
    .auto("format")
    .url();

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
              borderRadius: props.circular ? "50%" : "0",
              width: smaller,
              height: smaller,
              backgroundImage: `url('${src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
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
  maxHeight: PropTypes.number,
};

BasicImage.defaultProps = {
  circular: false,
  width: null,
  height: null,
  maxWidth: null,
  maxHeight: null,
};

export default BasicImage;
