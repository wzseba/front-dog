import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};
