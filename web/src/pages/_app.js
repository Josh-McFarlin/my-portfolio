import React from "react";
import PropTypes from "prop-types";
import "focus-visible/dist/focus-visible.min.js";
import "normalize.css";
import "../styles/App.scss";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <div id="portalRoot" />
  </>
);

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
