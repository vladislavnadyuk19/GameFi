import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/button/Button";

function Wrapper({ moreActive = "" }) {
  return (
    <div className="header__wrapper">
      <Link className="header__gafi" to="#">
        <span className="header__gafi-value">GAFI 2.0</span>
        <div className="header__gafi-icon">
          <svg width={12} height={12}>
            <use xlinkHref="./image/icons.svg#gafi-arrow"></use>
          </svg>
        </div>
      </Link>
      <div className="header__more-wrapper">
        <button className="header__button">
          <svg width={17} height={16}>
            <use xlinkHref="./image/icons.svg#gf"></use>
          </svg>
          <span>BUY MORE GAFI</span>
          <svg className="header__arrow" width={17} height={16} fill="none">
            <use xlinkHref="./image/icons.svg#arrow-bottom-2"></use>
          </svg>
        </button>
        <div
          className={`header__more ${moreActive ? "header__more--show" : ""}`}
        >
          <Link className="header__more-link">
            <img
              className="header__more-icon"
              src="./image/header/kucoin.webp"
              alt="icon"
            />
            <span>KuCoin</span>
          </Link>
          <Link className="header__more-link">
            <img
              className="header__more-icon"
              src="./image/header/gate.webp"
              alt="icon"
            />
            <span>Gate.io</span>
          </Link>
          <Link className="header__more-link">
            <img
              className="header__more-icon"
              src="./image/header/pancake.webp"
              alt="icon"
            />
            <span>PancakeSwap</span>
          </Link>
        </div>
      </div>

      <Button className="header__sign">
        <svg width={16} height={16}>
          <use xlinkHref="./image/icons.svg#sign"></use>
        </svg>
        <span>LOGIN</span>
      </Button>
    </div>
  );
}

export default Wrapper;
