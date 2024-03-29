import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Link from "next/link";
import { withRouter } from "next/router";
import urls from "../../../utils/urls";
import styles from "./Header.module.scss";

const conditionalJoin = (slug) => {
  if (slug === undefined) return "";

  return typeof slug === "string" ? slug : slug.join("/");
};

const Header = ({ name = "Missing name", navItems, router }) => {
  const isRouteActive = (item) => {
    if (typeof item === "string") return item === router.asPath;

    let isActive = false;
    if ("slug" in item && item.slug != null) {
      isActive =
        router.pathname === urls.pages.sanityPage() &&
        conditionalJoin(router.query.slug) === item.slug.current;
    }

    return isActive;
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.branding}>
        <Link legacyBehavior href={urls.pages.index()}>
          <a title={name}>
            <h1 className={styles.title}>{name}</h1>
          </a>
        </Link>
      </h1>
      {navItems && (
        <nav className={styles.nav}>
          <ul className={styles.navItems}>
            {navItems.map((item) => {
              const { slug, title, link, href, _id, _key } = item;

              return (
                <li
                  key={_id || _key}
                  className={clsx(
                    styles.navItem,
                    isRouteActive(item) && styles.active
                  )}
                >
                  {slug != null ? (
                    <Link
                      legacyBehavior
                      href={urls.pages.sanityPage(item.slug.current)}
                    >
                      <a>{title}</a>
                    </Link>
                  ) : (
                    <a
                      href={link ?? href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {title}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
};

Header.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.arrayOf(PropTypes.string),
    }),
    asPath: PropTypes.string,
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
