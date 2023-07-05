import React from "react";
import PropTypes from "prop-types";
import { PortableText } from "@portabletext/react";
import InternalLink from "./InternalLink";
import EmbedHTML from "./EmbedHTML";
import Figure from "./Figure";

const BlockContent = ({ blocks, className, ...rest }) => {
  if (!blocks) {
    // console.error('Missing blocks');
    return null;
  }

  const components = {
    block: blocks,
    marks: {
      internalLink: InternalLink,
    },
    types: {
      embedHTML: EmbedHTML,
      figure: Figure,
    },
  };

  return (
    <div className={className} {...rest}>
      <PortableText components={components} value={blocks} />
    </div>
  );
};

BlockContent.propTypes = {
  blocks: PropTypes.any,
  className: PropTypes.string,
};

export default BlockContent;
