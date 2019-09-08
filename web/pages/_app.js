import React from 'react';
import BaseApp, { Container } from 'next/app';
import MobileDetect from 'mobile-detect';
import 'bootstrap-css-only';
import 'shards-ui/dist/css/shards.min.css';

import client from '../client';
import '../styles/shared.module.css';
import '../styles/layout.css';


const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `;

class App extends BaseApp {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        const md = ctx.req ? new MobileDetect(ctx.req.headers['user-agent']) :
            new MobileDetect(navigator.userAgent);

        // Add site config from sanity
        return client.fetch(siteConfigQuery).then((config) => {
            if (!config) {
                return {
                    pageProps,
                    isMobile: md.mobile() != null
                };
            }

            if (config && pageProps) {
                pageProps.config = config;
            }

            return {
                pageProps,
                isMobile: md.mobile() != null
            };
        });
    }

    render() {
        const { Component, pageProps, isMobile } = this.props;

        return (
            <Container>
                <Component {...pageProps} isMobile={isMobile} />
            </Container>
        );
    }
}

export default App;
