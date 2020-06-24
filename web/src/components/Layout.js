import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ config, favicons, children }) => {
  if (!config) {
    console.error("Missing config");

    return <div>Missing config</div>;
  }

  const { name, mainNavigation, footerNavigation, footerText, logo } = config;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={favicons.appleIconUrl}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={favicons.thirtyIconUrl}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={favicons.sixIconUrl}
        />
      </Head>
      <>
        <Header name={name} navItems={mainNavigation} logo={logo} />
        <Sidebar navItems={mainNavigation} />
        <div className="content">{children}</div>
        <Footer navItems={footerNavigation} text={footerText} />
      </>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  config: PropTypes.shape({
    name: PropTypes.string,
    mainNavigation: PropTypes.arrayOf(PropTypes.object),
    footerNavigation: PropTypes.arrayOf(PropTypes.object),
    footerText: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    url: PropTypes.string,
    favicon: PropTypes.object,
  }).isRequired,
  favicons: PropTypes.object.isRequired,
};

export default Layout;
