import React from "react";

function InstructionItem({ icon, title, children }) {
  return (
    <li className="instruction__item">
      <svg width={48} height={48} fill="#96F048">
        <use xlinkHref={`./image/icons.svg#${icon}`}></use>
      </svg>
      <h5 className="instruction__title">{title}</h5>
      <p className="instruction__text">{children}</p>
    </li>
  );
}

export default InstructionItem;
