import React from "react";
import PropTypes from "prop-types";
import BlockContent from "../../../../BlockContent";
import SanityImage from "../../../../SanityImage";

const Project = ({ name, tags = [], description, image, links = [] }) => (
  <div className="relative mb-8 bg-white rounded-2xl shadow-[8px_8px_8px_0_rgba(0,0,0,0.2)] overflow-hidden border border-black/15 sm:min-h-[300px]">
    {/* Image: hidden on mobile, absolute positioned on desktop */}
    <SanityImage
      className="flex-1 w-1/2 h-full bg-white overflow-hidden object-cover absolute left-0 top-0 z-[1] max-md:hidden"
      src={image}
    />
    {/* Content panel */}
    <div className="relative w-1/2 flex-1 p-8 z-[2] flex flex-col justify-start text-black shadow-[-10px_0_40px_50px_white] ml-auto bg-white max-md:w-full max-md:shadow-none sm:min-h-[300px] [&_p_a]:text-inherit">
      <h1 className="relative font-semibold text-title2 leading-[1.375] m-0">{name}</h1>
      {description && <BlockContent blocks={description} />}
      {tags.length > 0 && (
        <div className="flex flex-row items-end justify-end flex-wrap mt-auto">
          {tags.map((tag) => (
            <div
              key={tag}
              className="px-[0.25em] text-center mt-2 mb-2 text-small shadow-[5px_5px_5px_rgba(0,0,0,0.15)] rounded bg-white border border-accent2 text-accent2 [&:not(:last-of-type)]:mr-2"
            >
              {tag}
            </div>
          ))}
        </div>
      )}
      {links && (
        <div className="flex flex-row items-end justify-end flex-wrap mt-auto">
          {links.map((data) => (
            <a
              key={data.title}
              className="no-underline px-[1em] py-[0.5em] text-center mt-2 text-small transition-all duration-500 ease-in-out shadow-[5px_5px_5px_rgba(0,0,0,0.15)] rounded bg-accent border border-black/10 text-white [&:not(:last-of-type)]:mr-2 hover:scale-105"
              href={data.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.title}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.array.isRequired,
  image: PropTypes.object.isRequired,
  links: PropTypes.arrayOf(PropTypes.object),
};


export default Project;
