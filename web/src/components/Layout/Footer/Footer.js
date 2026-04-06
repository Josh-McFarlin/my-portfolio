import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import BlockContent from "../../cms/BlockContent";
import urls from "../../../utils/urls";

const Footer = ({ navItems, text }) => {
  const router = useRouter();

  if (navItems.length === 0 && text == null) {
    return null;
  }

  return (
    <div className="text-black text-small py-8">
      <nav>
        <ul className="list-none flex justify-center m-0 mb-12 p-0">
          {navItems &&
            navItems.map((item) => {
              const isActive =
                router.pathname === "/LandingPage" &&
                router.query.slug === item.slug.current;

              return (
                <li key={item._id}>
                  <Link
                    href={urls.pages.sanityPage(item.slug.current)}
                    className="block no-underline text-inherit py-6 px-2"
                    data-is-active={isActive ? "true" : "false"}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
      <div className="text-center [&_p]:my-4 [&_a]:text-inherit">
        <BlockContent blocks={text} />
      </div>
    </div>
  );
};

Footer.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string,
      }).isRequired,
    })
  ),
  text: PropTypes.arrayOf(PropTypes.object),
};

Footer.defaultProps = {
  navItems: [],
  text: null,
};

export default Footer;
