import React from "react";
import { motion, useCycle } from "framer-motion";
import PropTypes from "prop-types";
import useComponentSize from "@rehooks/component-size";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import styles from "./Sidebar.module.scss";

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
  const { height } = useComponentSize(containerRef);

  return (
    <motion.nav
      className={styles.root}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      ref={containerRef}
    >
      <motion.div
        className={styles.background}
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
