import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { withRouter } from 'next/router';

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

const MenuItem = ({ i, router }) => {
    const { slug, title } = i;
    const isActive = router.pathname === '/LandingPage' && router.query.slug === slug.current;

    return (
        <motion.div
            className={styles.link}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
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

export default withRouter(MenuItem);
