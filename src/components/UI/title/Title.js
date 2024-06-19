import React from "react";

import "./title.css";

function Title({ children = [], reverse = false, className = "" }) {
  return (
    <h3 className={`title ${className} ${reverse ? "title--reverse" : ""} `}>
      <span>{children}</span>
    </h3>
  );
}

export default Title;
