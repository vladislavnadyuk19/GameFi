import React from "react";

function List() {
  return (
    <ul className="top__list">
      <li className="top__item">
        <div className="top__item-content">
          <h5 className="top__list-title">80+</h5>
          <span className="top__list-value">Project Launched</span>
        </div>
      </li>
      <li className="top__item">
        <div className="top__item-content">
          <h5 className="top__list-title">42.51X</h5>
          <span className="top__list-value">ATH Avg Roi</span>
        </div>
      </li>
      <li className="top__item">
        <div className="top__item-content">
          <h5 className="top__list-title">$12.8M</h5>
          <span className="top__list-value">Total raised</span>
        </div>
      </li>
      <li className="top__item">
        <div className="top__item-content">
          <h5 className="top__list-title">200K</h5>
          <span className="top__list-value">KYC-ed Users</span>
        </div>
      </li>
    </ul>
  );
}

export default List;
