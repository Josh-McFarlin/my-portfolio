import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SanityImage from "../../../SanityImage";

const BasicImage = (props) => {
  if (props.image.image == null) {
    return null;
  }

  const contStyle = {
    borderRadius: props.circular ? "50%" : 0,
    width: `${props.width}vw`,
    height: `${props.height}vh`,
    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight,
  };

  return (
    <div className="pb-8">
      <section className="w-full max-w-narrow mx-auto px-6 box-border flex justify-center">
        <div className="relative overflow-hidden border border-black" style={contStyle}>
          <SanityImage
            className={clsx(
              "w-full h-full bg-white mx-auto object-cover",
              props.circular && "rounded-full"
            )}
            src={props.image}
            sizes={`${
              props.maxWidth ? `(max-width: ${props.maxWidth}px) ` : ""
            }${props.width}vw`}
            priority
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
