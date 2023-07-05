import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => (
  <Html lang={"en"}>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
