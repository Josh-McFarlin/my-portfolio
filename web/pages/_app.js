import React from 'react';
import BaseApp, { Container } from 'next/app';
import isMobile from 'ismobilejs';
import { get } from 'lodash';

import client from '../client';
import '../styles/shared.module.css';
import '../styles/layout.css';


const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
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

const socialQuery = `
  *[_type == "socialLink"] {
    link,
    service
  }
`;

class App extends BaseApp {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        const userAgent = ctx.req ? get(ctx, ['req', 'headers', 'user-agent']) : navigator.userAgent;
        pageProps.isMobile = false;
        if (userAgent != null) {
            pageProps.isMobile = isMobile(userAgent).any;
        }

        await client.fetch(siteConfigQuery).then((config) => {
            pageProps.config = config;
        });

        await client.fetch(socialQuery).then((socialLinks) => {
            pageProps.socialLinks = socialLinks;
        });

        return {
            pageProps
        };
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
