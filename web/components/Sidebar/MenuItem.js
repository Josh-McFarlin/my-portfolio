import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

import styles from './Sidebar.module.css';


const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000
            }
        }
    }
};

const MenuItem = ({ item, router, toggle }) => {
    const { slug, title } = item;
    const isActive = router.pathname === '/LandingPage' && router.query.slug === slug.current;

    return (
        <motion.div
            className={styles.link}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggle}
        >
            <Link
                href={{
                    pathname: '/LandingPage',
                    query: { slug: slug.current }
                }}
                as={`/${slug.current !== '/' ? slug.current : ''}`}
                prefetch
            >
                <div
                    className={styles.linkText}
                    data-is-active={isActive ? 'true' : 'false'}
                >
                    {title}
                </div>
            </Link>
        </motion.div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired
};

export default withRouter(MenuItem);
