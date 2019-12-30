import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

import Icon from '../sections/Icon';
import styles from './MenuItem.module.css';


const variants = {
    open: {
        x: 0,
        opacity: 1,
        display: 'block',
        transition: {
            x: {
                stiffness: 5,
                velocity: -100
            }
        }
    },
    closed: {
        x: 100,
        opacity: 0,
        display: 'none',
        transition: {
            x: {
                stiffness: 5
            },
            display: {
                delay: 0.3
            }
        }
    }
};

const MenuItem = ({ item, router, toggle }) => {
    const { slug, title, link, icon } = item;

    let isActive = false;
    if (slug != null) {
        isActive = router.pathname === '/LandingPage' && router.query.slug === slug.current;
    }

    return (
        <motion.div
            className={styles.root}
            variants={variants}
            onClick={toggle}
        >
            {(slug != null) ? (
                <Link
                    href={{
                        pathname: '/LandingPage',
                        query: { slug: slug.current }
                    }}
                    as={`/${slug.current !== '/' ? slug.current : ''}`}
                    prefetch
                >
                    <div
                        className={styles.container}
                        data-is-active={isActive ? 'true' : 'false'}
                    >
                        <Icon type={icon} className={styles.icon} />
                        <p className={styles.text}>{title}</p>
                    </div>
                </Link>
            ) : (
                <a
                    className={styles.linkText}
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div
                        className={styles.container}
                        data-is-active={isActive ? 'true' : 'false'}
                    >
                        <Icon type={icon} className={styles.icon} />
                        <p className={styles.text}>{title}</p>
                    </div>
                </a>
            )}
        </motion.div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired
};

export default withRouter(MenuItem);
