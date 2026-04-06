import React from "react";
import PropTypes from "prop-types";
import client from "../../utils/sanity/client";
import SanityImage from "../cms/SanityImage";

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
      client.fetch(`*[_id == "${pdf.asset._ref}"][0]`).then(({ url }) => {
        setPdfLink(url);
        initialized.current = true;
      });
    }
  }, [pdf]);

  let content = null;
  if (showWhich === "image") {
    content = (
      <div className="relative flex-1 m-8 h-0 max-w-[calc(100%-64px)] w-[600px] border border-black shadow-[10px_10px_2px_1px_rgba(0,0,255,0.2)] bg-white">
        <div className="w-full h-full overflow-auto">
          <SanityImage
            className="w-auto min-w-full max-w-[125%]"
            src={image}
            alt="Resume"
            onLoad={onLoaded}
            onError={onRenderFail}
          />
        </div>
        {isLoading && (
          <div className="w-full h-full text-center flex flex-col justify-center items-center bg-white absolute top-0 left-0">
            Loading Resume...
          </div>
        )}
      </div>
    );
  } else if (showWhich === "link" || showWhich === "pdf") {
    let iframeUrl;
    if (showWhich === "link") {
      iframeUrl =
        "https://docs.google.com/document/d/e/2PACX-1vT8qSwaATh5uddVSEyBxqhW4xNFMG0kLEr2n0Kx9q31GWPggXX7MjdJM2bhn4IbfQ/pub?embedded=true";
    } else {
      iframeUrl = `https://docs.google.com/gview?url=${pdfLink}&embedded=true`;
    }

    content = (
      <iframe
        className="relative flex-1 m-8 h-0 max-w-[calc(100%-64px)] w-[600px] border border-black shadow-[10px_10px_2px_1px_rgba(0,0,255,0.2)] bg-white"
        src={iframeUrl}
        title="My Resume"
        onLoad={onLoaded}
        onError={onRenderFail}
      />
    );
  } else if (showWhich == null) {
    content = (
      <div className="relative flex-1 m-8 h-0 max-w-[calc(100%-64px)] w-[600px] border border-black shadow-[10px_10px_2px_1px_rgba(0,0,255,0.2)] bg-white">
        <div className="w-full h-full text-center flex flex-col justify-center items-center bg-white absolute top-0 left-0">
          Could not load resume at this time, please try again later!
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex-1 flex flex-col justify-center items-center">
      {(link || pdfLink) && (
        <a
          className="flex justify-center items-center mx-[3px] mb-[3px] p-2 border border-black cursor-default bg-white shadow-[3px_4px_2px_0_rgba(0,0,255,0.2)]"
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
