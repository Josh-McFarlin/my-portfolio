import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../../utils/sanity/client";

const SanityImage = ({ src, options = {}, ...rest }) => {
  const imageProps = useNextSanityImage(client, src, {
    ...options,
    ...rest,
  });

  return (
    <Image
      {...imageProps}
      {...rest}
      alt={imageProps?.alt || src?.alt || rest?.alt || ""}
    />
  );
};

SanityImage.propTypes = {
  src: PropTypes.any.isRequired,
  className: PropTypes.string,
  options: PropTypes.shape({
    enableBlurUp: PropTypes.bool,
    blurUpImageQuality: PropTypes.number,
    blurUpImageWidth: PropTypes.number,
    blurUpAmount: PropTypes.number,
  }),
  layout: PropTypes.oneOf(["responsive", "intrinsic", "fixed", "fill"]),
  objectFit: PropTypes.oneOf(["fill", "contain", "cover"]),
  sizes: PropTypes.string,
};

SanityImage.defaultProps = {
  options: undefined,
  layout: undefined,
  sizes: undefined,
};

export default SanityImage;
