import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";

import client from "../../client";
import "../styles/layout.css";

faConfig.autoAddCss = false;

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
    pageProps,
  };
};

export default MyApp;