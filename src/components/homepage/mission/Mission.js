import React from "react";
import Button from "../../UI/button/Button";
import Title from "../../UI/title/Title";
import MissionItem from "./MissionItem";
import Marquee from "react-fast-marquee";

import "./mission.css";

function Mission() {
  const items = (
    <>
      <MissionItem
        to="#"
        image={"image1.png"}
        title="OGL Astronauts at $100,000 OGL Life Vanguard"
        imageS={"image1-s.png"}
        price="665,000 OGL"
      />
      <MissionItem
        to="#"
        image={"image2.png"}
        title="Anichess Mini Social Quests"
        imageS={"image2-s.jpg"}
        price="100 USDT"
      />
      <MissionItem
        to="#"
        image={"image3.png"}
        title="Sipher: Play to Airdrop and TGE"
        imageS={"image3-s.jpg"}
        price="200 USDT"
      />
      <MissionItem
        to="#"
        image={"image4.png"}
        title="GamersXP 250,000 $GMXP + $250 USDT Pre-sale Giveaway"
        imageS={"image4-s.png"}
        price="250 USDT"
      />
      <MissionItem
        to="#"
        image={"image5.png"}
        title="Yooldo Mission Fiesta : Social tasks mission"
        imageS={"image5-s.jpg"}
        price="400 USDT"
      />
      <MissionItem
        to="#"
        image={"image6.jpg"}
        title="$1,000 in BattleRise Social Campaign"
        imageS={"image6-s.png"}
        price="100 USDC"
      />
    </>
  );

  return (
    <section className="mission">
      <div className="container-s mission__inner">
        <div className="mission__content">
          <div className="mission__items">{items}</div>
          <div className="mission__descr">
            <Title>DMission</Title>

            <p className="mission__text">
              An engage-to-earn platform, where you immerse yourself in
              captivating missions and earn appealing rewards. Let's discover!
            </p>
            <Button className="mission__button">Discovery Now</Button>
            <img className="mission__image" src="./image/mission/image.png" />
          </div>
        </div>
      </div>
      <div className="mission__content-m">
        <div className="mission__top">
          <Title className="mission__top-title">Game World</Title>
          <p className="mission__top-text">
            GameWorld’s primitive form was a huge database of everything that
            appeared in the web3 gaming world.The most detailed live information
            is recorded, processed and provided to the market with the most
            useful perspective..
          </p>
        </div>
        <Marquee pauseOnHover={true}>{items.props.children}</Marquee>
        <Button className="mission__button">Discovery Now</Button>
      </div>
    </section>
  );
}

export default Mission;
