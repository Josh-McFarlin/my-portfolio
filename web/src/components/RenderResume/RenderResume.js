import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";

import client from "../../../client";
import styles from "./RenderResume.module.css";

const Loader = () => <div className={styles.loading}>Loading Resume...</div>;

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

class RenderResume extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      pdfLink: null,
      imageLink: null,
      isLoading: true,
      showWhich: props.first,
    };
  }

  async componentDidMount() {
    const { image, pdf } = this.props;

    if (pdf != null) {
      const response = await client.fetch(`*[_id == "${pdf.asset._ref}"][0]`);

      this.setState({
        pdfLink: response.url,
      });
    }

    if (image != null) {
      const imageLink = await urlFor(image).height(3000).auto("format").url();

      this.setState({
        imageLink,
      });
    }
  }

  onLoaded = () => {
    this.setState({
      isLoading: false,
    });
  };

  onRenderFail = () => {
    const { first, second } = this.props;

    this.setState((prevState) => {
      let next = null;

      if (prevState.showWhich === first && first !== second) {
        next = second;
      } else if (prevState.showWhich === second) {
        ["link", "pdf", "image"].forEach((item) => {
          if (first !== item && second !== item) {
            next = item;
          }
        });
      }

      return {
        showWhich: next,
        isLoading: true,
      };
    });
  };

  render() {
    const { link } = this.props;
    const { pdfLink, imageLink, isLoading, showWhich } = this.state;

    return (
      <div className={styles.root}>
        {(link || pdfLink) && (
          <a
            className={styles.link}
            href={showWhich === "link" ? link : pdfLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
        )}
        <div className={styles.resumeContainer}>
          {isLoading && <Loader />}
          {(showWhich === "link" || showWhich === "pdf") && (
            <iframe
              className={styles.resume}
              src={`https://docs.google.com/gview?url=${
                showWhich === "link" ? link : pdfLink
              }&embedded=true`}
              frameBorder="0"
              title="My Resume"
              onLoad={this.onLoaded}
              onError={this.onRenderFail}
            />
          )}
          {showWhich === "image" && (
            <div className={styles.imageContainer}>
              <img
                className={styles.resumeImage}
                src={imageLink}
                alt="Resume"
                onLoad={this.onLoaded}
                onError={this.onRenderFail}
              />
            </div>
          )}
          {showWhich == null && (
            <div className={styles.loading}>
              Could not load resume at this time, please try again later!
            </div>
          )}
        </div>
      </div>
    );
  }
}

RenderResume.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
  image: PropTypes.shape({
    asset: {
      _ref: PropTypes.string,
      _type: PropTypes.string,
    },
    _type: PropTypes.string,
  }),
  link: PropTypes.string,
  pdf: PropTypes.shape({
    _type: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string,
      _type: PropTypes.string,
    }),
  }),
};

RenderResume.defaultProps = {
  first: "link",
  second: "pdf",
  image: null,
  link: null,
  pdf: null,
};

export default RenderResume;
