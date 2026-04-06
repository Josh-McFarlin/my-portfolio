import React from "react";
import PropTypes from "prop-types";
import BlockContent from "../../../BlockContent";
import Cta from "../../../../Cta";
import SanityImage from "../../../SanityImage";

const Hero = ({ heading, backgroundImage, tagline, ctas }) => (
  <div className="relative flex justify-center items-start text-white bg-cover bg-[#202123] bg-no-repeat bg-center pb-8 sm:pb-16 z-0 before:content-[''] before:absolute before:top-1/2 before:left-0 before:bg-gradient-to-b before:from-[#22222200] before:to-[#222222ee] before:w-full before:h-1/2 before:z-0 [&_p_a]:text-inherit [&_h1]:text-inherit [&_p]:text-inherit">
    <div className="w-full max-w-narrow px-[1.5em] box-border z-[1]">
      <h1 className="relative font-semibold text-title2 sm:text-title1 [text-shadow:0_1px_1px_rgba(0,0,0,0.5)] m-0 p-0 pt-[12.5rem] sm:pt-[15rem]">
        {heading}
      </h1>
      <div className="relative m-0 p-0 mt-[0.5em] mb-4 [text-shadow:0_1px_1px_rgba(0,0,0,0.5)] sm:text-large [&_p]:m-0">
        {tagline && <BlockContent blocks={tagline} />}
      </div>
      {ctas && (
        <div className="mt-12 flex [&>*:not(:first-child)]:ml-4">
          {ctas.map((cta) => (
            <Cta {...cta} key={cta._key} />
          ))}
        </div>
      )}
    </div>
    <div className="absolute top-0 h-full w-full overflow-hidden -z-[1]">
      <SanityImage src={backgroundImage} />
    </div>
  </div>
);

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  backgroundImage: PropTypes.object.isRequired,
  tagline: PropTypes.array.isRequired,
  ctas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Hero;
