import React from "react";
import Title from "../../UI/title/Title";
import AboutItem from "./AboutItem";

import "./about.css";

function About() {
  return (
    <section className="about">
      <div className="container-s">
        <Title>All you need about web3 gaming</Title>
        <ul className="about__list">
          <AboutItem icon="rocket" title={"IDO"} categories={["Lauchpad"]}>
            Access GameFi incubations and other top-tier tokens and NFT projects
            before they reach
          </AboutItem>
          <AboutItem icon="rocket" title={"INO"} categories={["Lauchpad"]}>
            The destination for digital asset trading & management to its
            platform users.
          </AboutItem>
          <AboutItem icon="nft" title={"NFT Market"} categories={["Lauchpad"]}>
            An advanced virtual plaza of web3 digital collectibles
          </AboutItem>
          <AboutItem
            icon="dmission"
            title={"Dmission"}
            categories={["GameWorld", "TaskFi"]}
          >
            An Engage-to-Earn playground, where you conquer captivating missions
          </AboutItem>
          <AboutItem icon="hub" title={"Hub"} categories={["Lauchpad"]}>
            A complete source of information and a place to connect web3 gaming
            world
          </AboutItem>
          <AboutItem
            icon="rating"
            title={"Game Ranking"}
            categories={["GameWorld"]}
          >
            Deepest, widest and most useful data warehouse for all levels of
            users
          </AboutItem>
          <AboutItem
            icon="navi"
            title={"Oasys Navi"}
            categories={["GameWorld"]}
          >
            All about Oasys Chain's gaming universe
          </AboutItem>
          <AboutItem
            icon="social"
            title={"SocialFi"}
            categories={["Coming soon"]}
          >
            Contribute your dynamism and perspective and become our social media
            star
          </AboutItem>
        </ul>
      </div>
    </section>
  );
}

export default About;
