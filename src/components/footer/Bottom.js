import React from "react";
import { Link } from "react-router-dom";

function Bottom() {
  return (
    <div className="footer__bottom">
      <p className="footer__copyright">&copy; Icetea Labs, 2021</p>
      <div className="footer__socials">
        <a className="footer__social" href="#">
          <svg width={32} height={33}>
            <use xlinkHref="./image/icons.svg#facebook"></use>
          </svg>
        </a>
        <a className="footer__social" href="#">
          <svg width={32} height={33}>
            <use xlinkHref="./image/icons.svg#twitter"></use>
          </svg>
        </a>
        <a className="footer__social" href="#">
          <svg width={32} height={33}>
            <use xlinkHref="./image/icons.svg#telegram"></use>
          </svg>
        </a>
        <a className="footer__social" href="#">
          <svg width={32} height={33}>
            <use xlinkHref="./image/icons.svg#youtube"></use>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Bottom;
