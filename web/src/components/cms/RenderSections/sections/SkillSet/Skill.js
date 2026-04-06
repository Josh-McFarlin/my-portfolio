import React from "react";
import PropTypes from "prop-types";
import SanityImage from "../../../SanityImage";

const Skill = ({ name, image }) => (
  <div className="flex justify-center items-center mx-[3px] mb-[3px] p-2 border border-black cursor-default bg-white shadow-[3px_4px_2px_0_rgba(0,0,255,0.2)]">
    {image && (
      <SanityImage
        className="w-[26px] h-[22px] mr-1 object-contain bg-no-repeat bg-center bg-contain"
        src={image}
        width={26}
        height={22}
        placeholder="empty"
      />
    )}
    {name && <p className="m-0 text-small leading-[1.5]">{name}</p>}
  </div>
);

Skill.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
};

Skill.defaultProps = {
  name: null,
  image: null,
};

export default Skill;
