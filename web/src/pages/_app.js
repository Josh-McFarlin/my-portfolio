import React from "react";

import client from "../../client";
import "../styles/layout.css";

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

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  const websiteConfig = await client.fetch(siteConfigQuery);

  await client.fetch(socialQuery).then((socialLinks) => {
    pageProps.socialLinks = socialLinks;
  });

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({
      ...ctx,
      websiteConfig,
    });
  }

  pageProps.config = websiteConfig;

  return {
    pageProps,
  };
};

export default MyApp;
