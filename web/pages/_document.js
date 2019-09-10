import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import client from '../client';


export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        const lang = await client.fetch('*[_id == "global-config"] {lang}.lang[0]');

        return {
            ...initialProps,
            lang
        };
    }

    render() {
        const { lang } = this.props;

        return (
            <Html lang={lang || 'en'}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
