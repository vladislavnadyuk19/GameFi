import React from "react";
import Nav from "./Nav";
import Wrapper from "./Wrapper";
import Bottom from "./Bottom";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-s">
        <Wrapper />
        <Nav />
        <Bottom />
      </div>
    </footer>
  );
}

export default Footer;
