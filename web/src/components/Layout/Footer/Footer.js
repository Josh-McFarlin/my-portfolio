import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import BlockContent from "../../cms/BlockContent";
import urls from "../../../utils/urls";
import styles from "./Footer.module.scss";

const Footer = ({ navItems, text }) => {
  const router = useRouter();

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
                    href={urls.pages.sanityPage(item.slug.current)}
                    data-is-active={isActive ? "true" : "false"}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
      <div className={styles.text}>
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
