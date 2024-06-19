import React from "react";
import { Link } from "react-router-dom";

function GamesItem({ title = "", image = "", to = "#" }) {
  return (
    <div className="games__item">
      <Link className="games__link" to={to}>
        <img className="games__image" src={`image/games/${image}`} />
        <div className="games__title-wrapper">
          <h5 className="games__item-title">{title}</h5>
        </div>
      </Link>
    </div>
  );
}

export default GamesItem;
