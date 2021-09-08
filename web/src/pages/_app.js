import React from "react";
import PropTypes from "prop-types";
import Script from "next/script";
import "focus-visible/dist/focus-visible.min.js";
import "normalize.css";
import "../styles/App.scss";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Script
      src="https://plausible.io/js/plausible.js"
      data-domain="mcfarl.in"
    />
    <Component {...pageProps} />
    <div id="portalRoot" />
  </>
);

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
