import React from "react";
import PropTypes from "prop-types";
import client from "../../utils/sanity/client";
import SanityImage from "../cms/SanityImage";
import styles from "./RenderResume.module.scss";

const RenderResume = ({ first, second, image, link, pdf }) => {
  const [pdfLink, setPdfLink] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [showWhich, setShowWhich] = React.useState(first);
  const initialized = React.useRef(false);

  const onLoaded = () => setIsLoading(false);

  const onRenderFail = () => {
    setShowWhich((prevWhich) => {
      let next = null;

      if (prevWhich === first && first !== second) {
        next = second;
      } else if (prevWhich === second) {
        ["link", "pdf", "image"].forEach((item) => {
          if (first !== item && second !== item) {
            next = item;
          }
        });
      }

      return next;
    });
    setIsLoading(true);
  };

  React.useEffect(() => {
    if (pdf != null && !initialized.current) {
      client
        .fetch(`*[_id == "${pdf.asset._ref}"][0]`)
        .then(({ url }) => {
          setPdfLink(url);
          initialized.current = true;
        });
    }
  }, [pdf]);

  let content = null;
  if (showWhich === "image") {
    content = (
      <div className={styles.resumeContainer}>
        <div className={styles.imageContainer}>
          <SanityImage
            className={styles.resumeImage}
            src={image}
            alt="Resume"
            onLoad={onLoaded}
            onError={onRenderFail}
          />
        </div>
        {isLoading && (
          <div className={styles.resumeContainer}>
            <div className={styles.loading}>Loading Resume...</div>
          </div>
        )}
      </div>
    );
  } else if (showWhich === "link" || showWhich === "pdf") {
    content = (
      <>
        <iframe
          className={styles.resumeContainer}
          src={`https://docs.google.com/gview?url=${
            showWhich === "link" ? link : pdfLink
          }&embedded=true`}
          frameBorder="0"
          title="My Resume"
          onLoad={onLoaded}
          onError={onRenderFail}
        />
        {isLoading && (
          <div className={styles.resumeContainer}>
            <div className={styles.loading}>Loading Resume...</div>
          </div>
        )}
      </>
    );
  } else if (showWhich == null) {
    content = (
      <div className={styles.resumeContainer}>
        <div className={styles.loading}>
          Could not load resume at this time, please try again later!
        </div>
      </div>
    );
  }

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
      {content}
    </div>
  );
};

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
