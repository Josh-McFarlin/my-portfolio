import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import client from "../../client";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    const lang = await client.fetch('*[_id == "global-config"] {lang}.lang[0]');

    return {
      ...initialProps,
      lang,
    };
  }

  render() {
    const { lang } = this.props;

    return (
      <Html lang={lang || "en"}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
