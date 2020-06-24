import React from "react";
import PropTypes from "prop-types";
import Person from "react-ionicons/lib/IosPerson";
import Mail from "react-ionicons/lib/IosMail";
import List from "react-ionicons/lib/IosListBox";
import Document from "react-ionicons/lib/IosDocument";

const Icon = ({ type, ...rest }) => {
  switch (type) {
    case "Person": {
      return <Person {...rest} />;
    }
    case "Mail": {
      return <Mail {...rest} />;
    }
    case "List": {
      return <List {...rest} />;
    }
    case "Document": {
      return <Document {...rest} />;
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
