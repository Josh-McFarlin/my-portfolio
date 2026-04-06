import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import urls from "../../utils/urls";

const buttonClass =
  "text-inherit block rounded-none border border-current bg-transparent px-[1.5em] py-[1em] no-underline font-semibold max-w-fit transition-transform duration-[50ms] ease-in-out scale-100 hover:scale-105 active:scale-95";

const cta = ({ title, route, link }) => {
  if (route && route.slug && route.slug.current) {
    return (
      <Link href={urls.pages.sanityPage(route.slug.current)} className={buttonClass}>
        {title}
      </Link>
    );
  }

  if (link) {
    return (
      <a className={buttonClass} href={link}>
        {title}
      </a>
    );
  }

  return <a className={buttonClass}>{title}</a>;
};

cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
  }),
  link: PropTypes.string,
};

cta.defaultProps = {
  route: null,
  link: null,
};

export default cta;
