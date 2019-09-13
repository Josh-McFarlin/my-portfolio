import React from 'react';
import BaseApp, { Container } from 'next/app';

import client from '../client';
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

const socialQuery = '*[_type == "socialLink"].link';

class App extends BaseApp {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
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
