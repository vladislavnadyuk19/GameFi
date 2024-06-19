import React from "react";
import Title from "../../UI/title/Title";
import Marquee from "react-fast-marquee";
import GamesItem from "./GamesItem";
import Button from "../../UI/button/Button";

import "./games.css";

function Games() {
  return (
    <section className="games">
      <div className="header__container">
        <div className="games__top">
          <Title className="games__title" reverse={true}>
            Game World
          </Title>
          <p className="games__text">
            GameWorld's primitive form was a huge database of everything that
            appeared in the web3 gaming world. The most detailed live
            information is recorded, processed and provided to the market with
            the most useful perspective
          </p>
        </div>
        <Marquee className="games__content" pauseOnHover={true}>
          <GamesItem to="#" image="image1.png" title="#25 MagicCraft" />
          <GamesItem to="#" image="image2.png" title="#44 The Dustlands" />
          <GamesItem to="#" image="image3.png" title="#22 Aqua Farm" />
          <GamesItem to="#" image="image4.png" title="#6 Thetan Arena" />
          <GamesItem to="#" image="image5.png" title="#14 Polychain Monsters" />
          <GamesItem to="#" image="image6.png" title="#40 Voxies" />
          <GamesItem
            to="#"
            image="image7.png"
            title="#33 Era7: Game of Truth"
          />
          <GamesItem to="#" image="image8.png" title="#24 REVV Motorsport" />
          <GamesItem to="#" image="image9.png" title="#18 Illuvium" />
          <GamesItem to="#" image="image10.png" title="#25 MagicCraft" />
          <GamesItem to="#" image="image11.png" title="#13 Monsterra" />
          <GamesItem to="#" image="image12.png" title="#39 Crypto Unicorns" />
          <GamesItem to="#" image="image13.png" title="#27 Splinterlands" />
          <GamesItem to="#" image="image14.jpg" title="#15 CryptoBlades" />
          <GamesItem to="#" image="image15.png" title="#45 Sinverse" />
          <GamesItem to="#" image="image16.png" title="#26 DeRace" />
          <GamesItem to="#" image="image17.png" title="#48 Drunk Robots" />
          <GamesItem to="#" image="image18.png" title="#19 Pagaxy" />
          <GamesItem to="#" image="image19.png" title="#35 Meta Apes" />
          <GamesItem to="#" image="image20.png" title="#30 Decentral Games" />
          <GamesItem to="#" image="image21.png" title="#36 GensoKishi" />
        </Marquee>
        <Button className="games__button" to="#">
          Join Now
        </Button>
      </div>
    </section>
  );
}

export default Games;
