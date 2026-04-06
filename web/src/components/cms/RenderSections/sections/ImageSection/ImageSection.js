import React from "react";
import PropTypes from "prop-types";
import BlockContent from "../../../BlockContent";
import Cta from "../../../../Cta";
import SanityImage from "../../../SanityImage";

const ImageSection = ({ heading, label, text, image, cta }) => {
  if (image == null) {
    return null;
  }

  return (
    <div className="relative py-8">
      <figure className="relative mx-6 max-w-wide">
        <SanityImage src={image} className="block w-full" alt={heading} />
        <figcaption>
          <div className="w-full mx-auto box-border">
            <div className="bg-primary-bg border border-dark-text p-6">
              <div className="text-micro leading-[1.2] tracking-[0.5px] uppercase mt-[1em]">{label}</div>
              <h2 className="text-title3 leading-[1.429] [.label+&]:mt-[0.2em]">{heading}</h2>
              {text && <BlockContent blocks={text} />}
              {cta && cta.route && <Cta {...cta} />}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

ImageSection.propTypes = {
  heading: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }).isRequired,
  backgroundImage: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  cta: PropTypes.object.isRequired,
};

export default ImageSection;
