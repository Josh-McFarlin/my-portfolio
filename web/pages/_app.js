import React from 'react';
import BaseApp, { Container } from 'next/app';
import MobileDetect from 'mobile-detect';
import _ from 'lodash';
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

        const userAgent = ctx.req ? _.get(ctx, ['req', 'headers', 'user-agent']) : navigator.userAgent;
        pageProps.isMobile = false;
        if (userAgent != null) {
            const md = new MobileDetect(userAgent);

            pageProps.isMobile = md.mobile() != null;
        }

        // Add site config from sanity
        return client.fetch(siteConfigQuery).then((config) => {
            if (!config) {
                return {
                    pageProps
                };
            }

            if (config && pageProps) {
                pageProps.config = config;
            }

            return {
                pageProps
            };
        });
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default App;
