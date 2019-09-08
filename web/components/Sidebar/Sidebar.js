import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';

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
    const containerRef = useRef(null);
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
            <Navigation
                navItems={navItems}
            />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};

export default Sidebar;
