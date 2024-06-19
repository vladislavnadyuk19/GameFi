import React, { useState } from "react";
import { Link } from "react-router-dom";
import Day from "./Day";
import Week from "./Week";
import Month from "./Month";

import "./tables.css";

function Tables() {
  const [index, setIndex] = useState(0);
  return (
    <section className="tables">
      <div className="container-s">
        <div className="tables__top">
          <h3 className="tables__title">TOP GAIN & LOSE</h3>

          <Link className="tables__link" to="#">
            <span>See All</span>
            <svg width={11} height={19} fill="#fff">
              <use xlinkHref="./image/icons.svg#arrow-right"></use>
            </svg>
          </Link>
        </div>
        <div className="tables__top tables__top--mt">
          <p className="tables__text">
            Games with token price that has gained or lost the most in the last
            24 hours.
          </p>
          <div className="tables__controllers">
            <button
              className={`tables__button ${
                index == 0 ? "tables__button--active" : ""
              }`}
              onClick={() => setIndex(0)}
            >
              24h
            </button>
            <button
              className={`tables__button ${
                index == 1 ? "tables__button--active" : ""
              }`}
              onClick={() => setIndex(1)}
            >
              7d
            </button>
            <button
              className={`tables__button ${
                index == 2 ? "tables__button--active" : ""
              }`}
              onClick={() => setIndex(2)}
            >
              30d
            </button>
          </div>
        </div>
        <Day className={index == 0 ? "tables__content--active" : ""} />
        <Week className={index == 1 ? "tables__content--active" : ""} />
        <Month className={index == 2 ? "tables__content--active" : ""} />
      </div>
    </section>
  );
}

export default Tables;
