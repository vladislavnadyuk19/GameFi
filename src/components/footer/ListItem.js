import React from "react";
import { Link } from "react-router-dom";

function ListItem({ children, to }) {
  return (
    <li className="footer__item">
      <Link className="footer__link" to={to}>
        {children}
      </Link>
    </li>
  );
}

export default ListItem;
