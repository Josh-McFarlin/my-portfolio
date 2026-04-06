import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import urls from "../../../utils/urls";

const conditionalJoin = (slug) => {
  if (slug === undefined) return "";

  return typeof slug === "string" ? slug : slug.join("/");
};

const Header = ({ name = "Missing name", navItems }) => {
  const router = useRouter();

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
    <div className="relative flex flex-row justify-center items-center w-full border-b border-black/40 bg-white box-border py-2 [&_a]:text-inherit [&_a]:no-underline">
      <h1 className="text-inherit font-inherit uppercase m-0 p-0 text-center flex-1">
        <Link
          href={urls.pages.index()}
          title={name}
          className="block py-3 px-2 lg:!py-3 lg:!px-0 text-title2"
        >
          {name}
        </Link>
      </h1>
      {navItems && (
        <nav className="flex-1 hidden md:block">
          <ul className="p-0 m-0 h-full sm:flex sm:justify-center sm:px-4">
            {navItems.map((item) => {
              const { slug, title, link, href, _id, _key } = item;

              return (
                <li
                  key={_id || _key}
                  className={clsx(
                    "flex whitespace-nowrap items-stretch !p-0 sm:ml-2",
                    isRouteActive(item) && "active"
                  )}
                >
                  {slug != null ? (
                    <Link
                      href={urls.pages.sanityPage(item.slug.current)}
                      className="block relative px-3 text-large font-semibold max-lg:px-6 max-lg:py-4 max-lg:w-full max-lg:text-right"
                    >
                      {title}
                    </Link>
                  ) : (
                    <a
                      href={link ?? href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative px-3 text-large font-semibold max-lg:px-6 max-lg:py-4 max-lg:w-full max-lg:text-right"
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

export default Header;
