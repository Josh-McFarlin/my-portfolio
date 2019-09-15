import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import styles from './Sidebar.module.css';


const variants = {
    open: {
        rotate: 90,
        transition: {
            duration: 0.5
        }
    },
    closed: {
        rotate: 0,
        transition: {
            duration: 0.5
        }
    }
};

const Path = (props) => (
    <motion.path
        fill='transparent'
        strokeWidth='3'
        stroke='hsl(0, 0%, 18%)'
        strokeLinecap='round'
        {...props}
    />
);

const MenuToggle = ({ toggle }) => (
    <button
        className={styles.button}
        onClick={toggle}
        type='button'
    >
        <motion.svg
            width='23'
            height='23'
            viewBox='0 0 23 23'
            variants={variants}
        >
            <Path
                variants={{
                    closed: {
                        d: 'M 2 2.5 L 20 2.5'
                    },
                    open: {
                        d: 'M 3 16.5 L 17 2.5'
                    }
                }}
                transition={{
                    duration: 0.5
                }}
                stroke='white'
            />
            <Path
                d='M 2 9.423 L 20 9.423'
                variants={{
                    closed: {
                        opacity: 1
                    },
                    open: {
                        opacity: 0
                    }
                }}
                transition={{
                    duration: 0.1
                }}
                stroke='white'
            />
            <Path
                variants={{
                    closed: {
                        d: 'M 2 16.346 L 20 16.346'
                    },
                    open: {
                        d: 'M 3 2.5 L 17 16.346'
                    }
                }}
                transition={{
                    duration: 0.5
                }}
                stroke='white'
            />
        </motion.svg>
    </button>
);

MenuToggle.propTypes = {
    toggle: PropTypes.func.isRequired
};

export default MenuToggle;
