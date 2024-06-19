import React from "react";
import { Link } from "react-router-dom";

function Menu({menuActive}) {
  return (
    <div className="header__menu-wrapper">
      <button className={`header__menu-button ${menuActive ? 'header__menu-button--active' : ''}`} >
        <svg width={24} height={10}>
          <use xlinkHref="./image/icons.svg#menu-button"></use>
        </svg>
      </button>

      <div className={`header__menu ${menuActive ? 'header__menu--show' : ''}`}>
        <Link className="header__menu-link" to={'#'}>GAFI 0.2</Link>
        <Link className="header__menu-link" to={'#'}>Launchpad</Link>
        <Link className="header__menu-link" to={'#'}>Game World</Link>
        <Link className="header__menu-link" to={'#'}>Staking</Link>
      </div>
    </div>
  );
}

export default Menu;
