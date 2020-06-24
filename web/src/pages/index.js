import PropTypes from "prop-types";
import React from "react";

import Layout from "../components/Layout";

class IndexPage extends React.Component {
  render() {
    const { config } = this.props;

    return (
      <Layout config={config}>
        <h1>No route set</h1>
        <h2>
          Setup automatic routes in sanity or custom routes in next.config.js
        </h2>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  config: PropTypes.object.isRequired,
};

export default IndexPage;
