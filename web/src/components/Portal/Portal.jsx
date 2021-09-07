import React from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const portalRoot = document.getElementById("portalRoot");

  return createPortal(children, portalRoot);
};

export default Portal;
