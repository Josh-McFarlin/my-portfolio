import React, { useState, useEffect, useCallback } from "react";
import { motion, useCycle } from "framer-motion";
import PropTypes from "prop-types";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

const sidebarVariants = {
  open: {
    background: "rgba(0, 0, 0, 0.3)",
  },
  closed: {
    background: "rgba(0, 0, 0, 0)",
    transition: {
      delay: 0.8,
    },
  },
};

const backgroundVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    boxShadow: "-5px 0px 20px 5px rgba(0, 0, 0, 0.4)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    boxShadow: "-5px 0px 20px 5px rgba(0, 0, 0, 0)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = ({ navItems }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateHeight]);

  return (
    <motion.nav
      className="fixed top-0 right-0 bottom-0 w-screen h-screen pointer-events-none z-[5] md:hidden"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      ref={containerRef}
    >
      <motion.div
        className="bg-accent absolute top-0 right-0 bottom-0 w-[70%] h-full"
        variants={backgroundVariants}
        custom={height}
      >
        <MenuToggle toggle={toggleOpen} />
        <Navigation navItems={navItems} toggle={toggleOpen} />
      </motion.div>
    </motion.nav>
  );
};

Sidebar.propTypes = {
  navItems: PropTypes.array,
};

Sidebar.defaultProps = {
  navItems: [],
};

export default Sidebar;
