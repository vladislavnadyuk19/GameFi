import React from "react";
import { Link } from "react-router-dom";

function AboutItem({ icon = "", title = "", categories = [], children = [] }) {
  const categoriesList = {
    Lauchpad: "green",
    GameWorld: "blue",
    TaskFi: "red",
    "Coming soon": "yellow",
  };
  return (
    <li className="about__item">
      <Link className="about__link" to={"#"}>
        <svg width={52} height={60} fill="#fff">
          <use xlinkHref={`./image/icons.svg#${icon}`}></use>
        </svg>
        <div className="about__top">
          <h5 className="about__title">{title}</h5>
          {categories.map((category, index) => {
            const tag = (
              <span
                className={`about__category about__category--${categoriesList[category]}`}
              >
                {category}
              </span>
            );

            if (index > 0)
              return (
                <div className="about__category-wrapper" key={category}>
                  <span>x</span>
                  {tag}
                </div>
              );

            return <div className="about__category-wrapper" key={category}>{tag}</div>;
          })}
        </div>
        <p className="about__text">{children}</p>
      </Link>
    </li>
  );
}

export default AboutItem;
