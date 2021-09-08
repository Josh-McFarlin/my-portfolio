import React from "react";
import PropTypes from "prop-types";
import BlockContentPure from "@sanity/block-content-to-react";
import InternalLink from "./InternalLink";
import EmbedHTML from "./EmbedHTML";
import Figure from "./Figure";
import client from "../../../utils/sanity/client";

const { projectId, dataset } = client.config();

const BlockContent = ({ blocks, className, ...rest }) => {
  if (!blocks) {
    // console.error('Missing blocks');
    return null;
  }

  return (
    <BlockContentPure
      blocks={blocks}
      projectId={projectId}
      dataset={dataset}
      className={className}
      renderContainerOnSingleChild
      serializers={{
        marks: {
          internalLink: InternalLink,
        },
        types: {
          embedHTML: EmbedHTML,
          figure: Figure,
        },
      }}
      {...rest}
    />
  );
};

BlockContent.propTypes = {
  blocks: PropTypes.any,
  className: PropTypes.string,
};

export default BlockContent;
