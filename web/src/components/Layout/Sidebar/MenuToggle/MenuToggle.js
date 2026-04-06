import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const variants = {
  open: {
    rotate: 90,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button
    className="outline-none border-none select-none cursor-pointer absolute top-5 right-[15px] w-[50px] h-[50px] rounded-full bg-transparent pointer-events-auto m-0 p-0"
    onClick={toggle}
    type="button"
  >
    <motion.svg width="23" height="23" viewBox="0 0 23 23" variants={variants}>
      <Path
        variants={{
          closed: {
            d: "M 2 2.5 L 20 2.5",
          },
          open: {
            d: "M 3 16.5 L 17 2.5",
          },
        }}
        transition={{
          duration: 0.5,
        }}
        stroke="white"
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: {
            opacity: 1,
          },
          open: {
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.1,
        }}
        stroke="white"
      />
      <Path
        variants={{
          closed: {
            d: "M 2 16.346 L 20 16.346",
          },
          open: {
            d: "M 3 2.5 L 17 16.346",
          },
        }}
        transition={{
          duration: 0.5,
        }}
        stroke="white"
      />
    </motion.svg>
  </button>
);

MenuToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default MenuToggle;
