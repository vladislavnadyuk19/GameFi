import React from "react";

import "./button.css";
import { Link } from "react-router-dom";

function Button({ className = "", children = [], to = "" }) {
  if (to.length) {
    return (
      <Link className={`button ${className}`} to={to}>
        {children}
      </Link>
    );
  }
  return <button className={`button ${className}`}>{children}</button>;
}

export default Button;
