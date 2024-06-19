import React from "react";
import Logo from "../logo/Logo";
import List from "../footer/List";
import ListItem from "./ListItem";

function Content() {
  return (
    <div className="footer__nav">
      <Logo to="#" footer={true} />
      <nav className="footer__content">
        <List title="About Us">
          <ListItem to="#">Contact Us</ListItem>
          <ListItem to="#">Press Kit</ListItem>
          <ListItem to="#">Terms Of Use</ListItem>
          <ListItem to="#">Privacy</ListItem>
          <ListItem to="#">Disclaimer</ListItem>
          <ListItem to="#">Help Center</ListItem>
          <ListItem to="#">Tokenomic</ListItem>
        </List>
        <List title="Game">
          <ListItem to="#">Game Hub</ListItem>
          <ListItem to="#">Ranking</ListItem>
          <ListItem to="#">Game For You</ListItem>
        </List>
        <List title="Gamification">
          <ListItem to="#">Insight</ListItem>
          <ListItem to="#">Guilds</ListItem>
        </List>
        <List title="Launchpad">
          <ListItem to="#">IGO Launchpad</ListItem>
          <ListItem to="#">INO Launchpad</ListItem>
          <ListItem to="#">Staking</ListItem>
        </List>
        <List title="Services">
          <ListItem to="#">DMission</ListItem>
          <ListItem to="#">TaskFi</ListItem>
        </List>
        <List
          title="Events
"
        >
          <ListItem to="#">Catventure</ListItem>
          <ListItem to="#">Year End Party</ListItem>
          <ListItem to="#">Path Of Wisdom</ListItem>
          <ListItem to="#">Race For Glory</ListItem>
        </List>
      </nav>
    </div>
  );
}

export default Content;
