import React from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";

import Link from "next/link";
import client from "../../client";

const InternalLink = ({ mark, children }) => {
  const [slug, setSlug] = React.useState(null);

  React.useEffect(() => {
    if (mark != null && mark._ref != null) {
      const ref = mark._ref;
      const refQuery = `*[_id == "${ref}"][0]`;

      client.fetch(refQuery).then((res) => {
        if (res != null && res.slug != null) {
          setSlug(res.slug);
        }
      });
    }
  }, []);

  if (slug != null) {
    return (
      <Link
        href={{
          pathname: "/LandingPage",
          query: { slug: slug.current },
        }}
        as={`/${slug.current !== "/" ? slug.current : ""}`}
      >
        <a>{children}</a>
      </Link>
    );
  }

  return <a>{children}</a>;
};

const { projectId, dataset } = client.config();

const SimpleBlockContent = ({ blocks, className }) => {
  if (!blocks) {
    // console.error('Missing blocks');
    return null;
  }

  return (
    <BlockContent
      blocks={blocks}
      projectId={projectId}
      dataset={dataset}
      className={className}
      renderContainerOnSingleChild
      serializers={{
        marks: {
          internalLink: InternalLink,
        },
      }}
    />
  );
};

SimpleBlockContent.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

SimpleBlockContent.defaultProps = {
  className: "",
};

export default SimpleBlockContent;
