import React from "react";
import { Link } from "react-router-dom";

import "./logo.css";

function Logo({ footer = false }) {
  return (
    <Link className="logo" to="/">
      {!footer ? (
        <svg width={210} height={22}>
          <use xlinkHref={`./image/icons.svg#logo`}></use>
        </svg>
      ) : (
        <svg width={335} height={74}>
          <use xlinkHref={`./image/icons.svg#logo-footer`}></use>
        </svg>
      )}
    </Link>
  );
}

export default Logo;
