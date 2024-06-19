import React from "react";

function List({ title, children }) {
  return (
    <div className="footer__list-wrapper">
      <h5 className="footer__list-title">{title}</h5>
      <ul className="footer__list">{children}</ul>
    </div>
  );
}

export default List;
