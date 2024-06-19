import React from "react";
import Button from "../UI/button/Button";

function Wrapper() {
  return (
    <div className="footer__wrapper">
      <h3 className="footer__title">
        Looking to get your <span> token listed</span> smoothly? Count on us to
        have <span>your</span> back!{" "}
        <img className="footer__star" src="./image/star.svg" />
      </h3>

      <Button className="footer__button">
        <svg width={16} height={16}>
          <use xlinkHref="./image/icons.svg#sign"></use>
        </svg>
        <span>APPLY FOR IDO</span>
      </Button>
      <div className="footer__wrapper-items">
        <svg className="footer__wrapper-item">
          <use xlinkHref="./image/icons.svg#eth"></use>
        </svg>
        <svg className="footer__wrapper-item">
          <use xlinkHref="./image/icons.svg#bnb"></use>
        </svg>
        <img
          className="footer__wrapper-item"
          src="./image/footer/polygon.png"
        />

        <img
          className="footer__wrapper-item"
          src="./image/footer/arbitrum.png"
        />
        <img className="footer__wrapper-item" src="./image/footer/sei.png" />
        <img className="footer__wrapper-item" src="./image/footer/ton.png" />
        <svg className="footer__wrapper-item">
          <use xlinkHref="./image/icons.svg#missions"></use>
        </svg>
        <img
          className="footer__wrapper-item footer__dots"
          src="./image/footer/dots.png"
        />
      </div>
    </div>
  );
}

export default Wrapper;
