import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import SVG from 'react-inlinesvg';
import Sidebar from '../Sidebar';

import styles from './Header.module.css';


class Header extends React.Component {
    renderLogo = (logo) => {
        if (!logo || !logo.asset) {
            return null;
        }

        if (logo.asset.extension === 'svg') {
            return <SVG src={logo.asset.url} className={styles.logo} />;
        }

        return <img src={logo.asset.url} alt={logo.title} className={styles.logo} />;
    };

    render() {
        const { title = 'Missing title', navItems, router, logo, isMobile } = this.props;

        return (
            <div className={styles.root}>
                <h1 className={styles.branding}>
                    <Link
                        href={{
                            pathname: '/LandingPage',
                            query: {
                                slug: '/'
                            }
                        }}
                        as='/'
                        prefetch
                    >
                        <a title={title}>
                            {logo && logo.asset ? (
                                this.renderLogo(logo)
                            ) : (
                                <h1 className={styles.title}>
                                    {title}
                                </h1>
                            )}
                        </a>
                    </Link>
                </h1>
                {(isMobile) ? (
                    <Sidebar
                        navItems={navItems}
                    />
                ) : (
                    <nav className={styles.nav}>
                        <ul className={styles.navItems}>
                            {navItems && navItems.map((item) => {
                                const { slug, title, _id } = item;
                                const isActive = router.pathname === '/LandingPage' && router.query.slug === slug.current;

                                return (
                                    <li key={_id} className={styles.navItem}>
                                        <Link
                                            href={{
                                                pathname: '/LandingPage',
                                                query: { slug: slug.current }
                                            }}
                                            as={`/${slug.current !== '/' ? slug.current : ''}`}
                                            prefetch
                                        >
                                            <a data-is-active={isActive ? 'true' : 'false'}>{title}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                )}
            </div>
        );
    }
}

Header.propTypes = {
    router: PropTypes.shape({
        pathname: PropTypes.string,
        query: PropTypes.shape({
            slug: PropTypes.string
        }),
        events: PropTypes.any
    }).isRequired,
    title: PropTypes.string.isRequired,
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            slug: PropTypes.shape({
                current: PropTypes.string
            }).isRequired
        })
    ).isRequired,
    logo: PropTypes.shape({
        asset: PropTypes.shape({
            url: PropTypes.string
        }),
        logo: PropTypes.string
    }).isRequired,
    isMobile: PropTypes.bool.isRequired
};

export default withRouter(Header);
