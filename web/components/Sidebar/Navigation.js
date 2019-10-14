import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import MenuItem from './MenuItem';
import styles from './Sidebar.module.css';


const variants = {
    open: {
        pointerEvents: 'auto',
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    },
    closed: {
        pointerEvents: 'none',
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

const Navigation = ({ navItems, toggle }) => (
    <motion.div
        className={styles.links}
        variants={variants}
    >
        {navItems.map((item) => (
            <MenuItem
                item={item}
                key={item._id}
                toggle={toggle}
            />
        ))}
    </motion.div>
);

Navigation.propTypes = {
    navItems: PropTypes.array,
    toggle: PropTypes.func.isRequired
};

Navigation.defaultProps = {
    navItems: []
};

export default Navigation;
