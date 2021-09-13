import React from "react";
import PropTypes from "prop-types";
import PlausibleProvider from "next-plausible";
import "focus-visible/dist/focus-visible.min.js";
import "normalize.css";
import "../styles/App.scss";

const MyApp = ({ Component, pageProps }) => (
  <PlausibleProvider
    domain="mcfarl.in"
    trackOutboundLinks
    scriptProps={{
      src: "/plaus/js/plaus.outbound-links.js",
      "data-api": "/plaus/api/event",
    }}
    selfHosted
  >
    <Component {...pageProps} />
  </PlausibleProvider>
);

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
