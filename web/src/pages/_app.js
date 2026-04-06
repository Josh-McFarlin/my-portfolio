import React from "react";
import PropTypes from "prop-types";
import PlausibleProvider from "next-plausible";
import "focus-visible/dist/focus-visible.min.js";
import "normalize.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <PlausibleProvider
    domain="mcfarl.in"
    trackOutboundLinks
  >
    <Component {...pageProps} />
  </PlausibleProvider>
);

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
