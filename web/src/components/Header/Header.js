import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { withRouter } from "next/router";

import styles from "./Header.module.css";

const Header = ({ name = "Missing name", navItems, router }) => (
  <div className={styles.root}>
    <h1 className={styles.branding}>
      <Link
        href={{
          pathname: "/LandingPage",
          query: {
            slug: "/",
          },
        }}
        as="/"
      >
        <a title={name}>
          <h1 className={styles.title}>{name}</h1>
        </a>
      </Link>
    </h1>
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        {navItems &&
          navItems.map((item) => {
            const { slug, title, link, _id } = item;

            let isActive = false;
            if (slug != null) {
              isActive =
                router.pathname === "/LandingPage" &&
                router.query.slug === slug.current;
            }

            return (
              <li key={_id} className={styles.navItem}>
                {slug != null ? (
                  <Link
                    href={{
                      pathname: "/LandingPage",
                      query: { slug: slug.current },
                    }}
                    as={`/${slug.current !== "/" ? slug.current : ""}`}
                  >
                    <a data-is-active={isActive ? "true" : "false"}>{title}</a>
                  </Link>
                ) : (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  </div>
);

Header.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
    events: PropTypes.any,
  }).isRequired,
  name: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.shape({
        current: PropTypes.string,
      }),
    })
  ),
};

Header.defaultProps = {
  navItems: [],
};

export default withRouter(Header);
