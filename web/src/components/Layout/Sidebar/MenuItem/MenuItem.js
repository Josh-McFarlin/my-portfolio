import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Icon from "../../../cms/RenderSections/sections/Icon";
import urls from "../../../../utils/urls";

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

const MenuItem = ({ item, toggle }) => {
  const router = useRouter();
  const { slug, title, link, href, icon } = item;

  let isActive = false;
  if ("slug" in item && item.slug != null) {
    isActive =
      (router.pathname === urls.pages.sanityPage() &&
        conditionalJoin(router.query.slug) === item.slug.current) ||
      router.asPath === item.slug.current;
  }

  const containerClass = clsx(
    "flex flex-row items-center text-white fill-white",
    isActive && "active"
  );

  return (
    <motion.div
      className="mb-[26px] cursor-pointer w-full p-[5px] border-[3px] border-white rounded-[10px] box-border"
      variants={variants}
      onClick={toggle}
    >
      {slug != null ? (
        <Link href={urls.pages.sanityPage(slug.current)}>
          <div className={containerClass}>
            <Icon type={icon} className="text-[30px] mx-2 p-[6px] text-inherit fill-current align-middle" />
            <p className="text-title3 text-inherit no-underline m-0">{title}</p>
          </div>
        </Link>
      ) : (
        <a
          className={containerClass}
          href={link ?? href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={containerClass}>
            <Icon type={icon} className="text-[30px] mx-2 p-[6px] text-inherit fill-current align-middle" />
            <p className="text-title3 text-inherit no-underline m-0">{title}</p>
          </div>
        </a>
      )}
    </motion.div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default MenuItem;
