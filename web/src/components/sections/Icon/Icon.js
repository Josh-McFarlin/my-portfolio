import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Person from "react-ionicons/lib/IosPerson";
import Mail from "react-ionicons/lib/IosMail";
import List from "react-ionicons/lib/IosListBox";
import Document from "react-ionicons/lib/IosDocument";
import classes from "./Icon.module.css";

const Icon = ({ type, className, ...rest }) => {
  switch (type) {
    case "Person": {
      return <Person className={clsx(classes.root, className)} {...rest} />;
    }
    case "Mail": {
      return <Mail className={clsx(classes.root, className)} {...rest} />;
    }
    case "List": {
      return <List className={clsx(classes.root, className)} {...rest} />;
    }
    case "Document": {
      return <Document className={clsx(classes.root, className)} {...rest} />;
    }
    default: {
      return null;
    }
  }
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
