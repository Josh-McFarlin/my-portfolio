import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import Icon from "../../../cms/RenderSections/sections/Icon";
import urls from "../../../../utils/urls";
import styles from "./MenuItem.module.scss";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    display: "block",
    transition: {
      x: {
        stiffness: 5,
        velocity: -100,
      },
    },
  },
  closed: {
    x: 100,
    opacity: 0,
    display: "none",
    transition: {
      x: {
        stiffness: 5,
      },
      display: {
        delay: 0.3,
      },
    },
  },
};

const conditionalJoin = (slug) => {
  if (slug === undefined) return undefined;

  return typeof slug === "string" ? slug : slug.join("/");
};

const MenuItem = ({ item, router, toggle }) => {
  const { slug, title, link, icon } = item;

  let isActive = false;
  if ("slug" in item && item.slug != null) {
    isActive =
      (router.pathname === urls.pages.sanityPage() &&
        conditionalJoin(router.query.slug) === item.slug.current) ||
      router.asPath === item.slug.current;
  }

  return (
    <motion.div className={styles.root} variants={variants} onClick={toggle}>
      {slug != null ? (
        <Link href={urls.pages.sanityPage(slug.current)}>
          <div className={clsx(styles.container, isActive && styles.active)}>
            <Icon type={icon} className={styles.icon} />
            <p className={styles.text}>{title}</p>
          </div>
        </Link>
      ) : (
        <a
          className={clsx(styles.container, isActive && styles.active)}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.container}>
            <Icon type={icon} className={styles.icon} />
            <p className={styles.text}>{title}</p>
          </div>
        </a>
      )}
    </motion.div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default withRouter(MenuItem);
