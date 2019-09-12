import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import imageUrlBuilder from '@sanity/image-url';

import Header from './Header';
import Footer from './Footer';
import client from '../client';
import Sidebar from './Sidebar';


const builder = imageUrlBuilder(client);

class Layout extends React.PureComponent {
    render() {
        const { config, children } = this.props;

        if (!config) {
            console.error('Missing config');

            return <div>Missing config</div>;
        }

        const { name, mainNavigation, footerNavigation, footerText, logo, url, favicon } = config;

        const appleIconUrl = builder
            .image(favicon)
            .width(180)
            .height(180)
            .format('png')
            .url();

        const thirtyIconUrl = builder
            .image(favicon)
            .width(32)
            .height(32)
            .fit('clip')
            .format('png')
            .url();

        const sixIconUrl = builder
            .image(favicon)
            .width(16)
            .height(16)
            .fit('clip')
            .format('png')
            .url();

        return (
            <>
                <Head>
                    <meta
                        name='viewport'
                        content='initial-scale=1.0, width=device-width, viewport-fit=cover'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href={appleIconUrl}
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href={thirtyIconUrl}
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href={sixIconUrl}
                    />
                </Head>
                <div className='container'>
                    <Header
                        name={name}
                        navItems={mainNavigation}
                        logo={logo}
                    />
                    <Sidebar
                        navItems={mainNavigation}
                    />
                    <div className='content'>
                        {children}
                    </div>
                    <Footer
                        navItems={footerNavigation}
                        text={footerText}
                    />
                </div>
            </>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    config: PropTypes.shape({
        name: PropTypes.string,
        mainNavigation: PropTypes.arrayOf(PropTypes.object),
        footerNavigation: PropTypes.arrayOf(PropTypes.object),
        footerText: PropTypes.arrayOf(PropTypes.object),
        logo: PropTypes.shape({
            asset: PropTypes.shape({
                url: PropTypes.string
            })
        }),
        url: PropTypes.string,
        favicon: PropTypes.object
    }).isRequired
};

Layout.defaultProps = {
    isMobile: true
};

export default Layout;
