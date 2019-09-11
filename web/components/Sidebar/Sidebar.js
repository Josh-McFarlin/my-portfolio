import React from 'react';
import { motion, useCycle } from 'framer-motion';
import PropTypes from 'prop-types';

import { useDimensions } from './utils';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';
import styles from './Sidebar.module.css';


const variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: 'circle(30px at calc(100% - 40px) 40px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40
        }
    }
};

const Sidebar = ({ navItems }) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = React.useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            className={styles.sidebar}
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
        >
            <motion.div
                className={styles.background}
                variants={variants}
            />
            <MenuToggle toggle={() => toggleOpen()} />
            <Navigation
                navItems={navItems}
                toggle={() => toggleOpen()}
            />
        </motion.nav>
    );
};

Sidebar.propTypes = {
    navItems: PropTypes.array
};

Sidebar.defaultProps = {
    navItems: []
};

export default Sidebar;
