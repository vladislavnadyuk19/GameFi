import React from "react";
import { Link } from "react-router-dom";

function MissionItem({
  image = "",
  title = "",
  imageS = "",
  price = "",
  to = "#",
}) {
  return (
    <div className="mission__item">
      <Link className="mission__link" to={to}>
        <img className="mission__item-image" src={`./image/mission/${image}`} />
        <h5 className="mission__item-title">{title}</h5>
        <div className="mission__bottom">
          <div className="mission__image-wrapper">
            <img className="mission__check" src="./image/mission/check.webp" />
            <img
              className="mission__bottom-image"
              src={`./image/mission/${imageS}`}
            />
          </div>
          <span className="mission__price">{price}</span>
        </div>{" "}
      </Link>
    </div>
  );
}

export default MissionItem;
