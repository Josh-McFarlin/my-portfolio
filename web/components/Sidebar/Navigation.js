import React from 'react';
import { motion } from 'framer-motion';

import MenuItem from './MenuItem';
import styles from './Sidebar.module.css';


const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const Navigation = ({ navItems }) => (
    <motion.div
        className={styles.links}
        variants={variants}
    >
        {navItems.map((i) => (
            <MenuItem
                i={i}
                key={i._id}
            />
        ))}
    </motion.div>
);

export default Navigation;
