import React from "react";
import { Link } from "react-router-dom";

function List() {
  return (
    <ul className="header__list">
      <li className="header__item">
        <Link to="#" className="header__link">
          <span>Launchpad</span>
          <svg width={24} height={24}>
            <use xlinkHref="./image/icons.svg#arrow-bottom"></use>
          </svg>
        </Link>
        <div className="header__item-wrapper">
          <div className="header__wrapper-content">
            <Link className="header__list-link" to="#">
              IDO
            </Link>
            <Link className="header__list-link" to="#">
              INO
            </Link>
            <Link className="header__list-link" to="#">
              Staking
            </Link>
          </div>
        </div>
      </li>
      <li className="header__item">
        <Link to="#" className="header__link">
          <span>Game World</span>

          <svg width={24} height={24}>
            <use xlinkHref="./image/icons.svg#arrow-bottom"></use>
          </svg>
        </Link>
        <div className="header__item-wrapper">
          <div className="header__wrapper-content">
            <Link className="header__list-link" to="#">
              Hub
            </Link>
            <Link className="header__list-link" to="#">
              Ranking
            </Link>
            <Link className="header__list-link" to="#">
              Game
            </Link>
          </div>
        </div>
      </li>
      <li className="header__item">
        <Link to="#" className="header__link">
          <span>Others</span>

          <svg width={24} height={24}>
            <use xlinkHref="./image/icons.svg#arrow-bottom"></use>
          </svg>
        </Link>
        <div className="header__item-wrapper">
          <div className="header__wrapper-content">
            <Link className="header__list-link" to="#">
              Oasys Navi
            </Link>
            <Link className="header__list-link" to="#">
              Dmission
            </Link>
            <Link className="header__list-link" to="#">
              NFT
            </Link>
            <Link className="header__list-link" to="#">
              Insight
            </Link>
            <Link className="header__list-link" to="#">
              Guild
            </Link>
            <Link className="header__list-link" to="#">
              Earn
            </Link>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default List;
