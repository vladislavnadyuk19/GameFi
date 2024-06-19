import React from "react";
import List from "./List";
import Button from "../../UI/button/Button";
import { Link } from "react-router-dom";
import Backed from "./Backed";

import "./top.css";


function Top() {
  return (
    <section className="top">
      <div className="container top__inner">


        <video className="top__background"  autoPlay muted loop>
          <source src="./video/meowGF.mp4" type="video/mp4" />
        </video>

        <div className="top__content">
          <img className="top__image" src="./image/homepage/image.png" />
          <h1 className="top__title">
            Create Your <br />
            Web3 Investment Legacy
          </h1>
          <List />
          <div className="top__buttons">
            <Button className="top__button" to="#">
              Launchpad
            </Button>

            <Link className="top__button top__button--border">
              Find The Gems
            </Link>
          </div>
          <Backed />
        </div>
      </div>
    </section>
  );
}

export default Top;
