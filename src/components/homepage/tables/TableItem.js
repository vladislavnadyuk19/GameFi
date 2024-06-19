import React from "react";
import { useNavigate } from "react-router-dom";

function TableItem({
  image = "",
  high = "",
  imageS = "",
  title = "",
  abbreviation = "",
  lower = "",
  volume = "",
  price = "",
  to = "#",
}) {
  const navigate = useNavigate();
  return (
    <tr onClick={() => navigate(to)}>
      <td>
        <div className="tables__item-left">
          <img className="tables__item-image" src={`./image/tables/${image}`} />
          <div className="tables__item-wrapper">
            <h5 className="tables__item-title"> {title}</h5>
            <div className="tables__item-bottom">
              <img
                className="tables__image-s"
                src={`./image/tables/${imageS}`}
              />
              <span className="tables__item-abbreviation">{abbreviation}</span>
            </div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>
        <div className="tables__proc">
          {high.length ? (
            <>
              <svg width={20} height={20} fill="#96F048">
                <use xlinkHref="./image/icons.svg#high"></use>
              </svg>
              <span className="tables__high">{high}</span>
            </>
          ) : (
            <>
              <svg width={20} height={20} fill="#EB3A3A">
                <use xlinkHref="./image/icons.svg#lower"></use>
              </svg>
              <span className="tables__lower">{lower}</span>
            </>
          )}
        </div>
      </td>
      <td>{volume}</td>
    </tr>
  );
}

export default TableItem;
