import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { withRouter } from "next/router";

import styles from "./Footer.module.css";
import SimpleBlockContent from "../SimpleBlockContent";

const Footer = ({ navItems, text, router }) => {
  if (navItems.length === 0 && text == null) {
    return null;
  }

  return (
    <div className={styles.root}>
      <nav>
        <ul className={styles.items}>
          {navItems &&
            navItems.map((item) => {
              const isActive =
                router.pathname === "/LandingPage" &&
                router.query.slug === item.slug.current;

              return (
                <li key={item._id} className={styles.item}>
                  <Link
                    href={{
                      pathname: "/LandingPage",
                      query: { slug: item.slug.current },
                    }}
                    as={`/${item.slug.current}`}
                  >
                    <a data-is-active={isActive ? "true" : "false"}>
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
      <div className={styles.text}>
        <SimpleBlockContent blocks={text} />
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
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
};

Footer.defaultProps = {
  navItems: [],
  text: null,
};

export default withRouter(Footer);
