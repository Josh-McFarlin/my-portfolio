import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Icon as IconifyIcon } from "@iconify/react";

const Icon = ({ type, className, ...rest }) => {
  switch (type) {
    case "Person": {
      return (
        <IconifyIcon
          className={clsx("text-inherit fill-current", className)}
          icon="ion:person"
          {...rest}
        />
      );
    }
    case "Mail": {
      return (
        <IconifyIcon
          className={clsx("text-inherit fill-current", className)}
          icon="ion:mail"
          {...rest}
        />
      );
    }
    case "List": {
      return (
        <IconifyIcon
          className={clsx("text-inherit fill-current", className)}
          icon="ion:list"
          {...rest}
        />
      );
    }
    case "Document": {
      return (
        <IconifyIcon
          className={clsx("text-inherit fill-current", className)}
          icon="ion:document"
          {...rest}
        />
      );
    }
    default: {
      return null;
    }
  }
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
