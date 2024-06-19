import React, { useEffect, useState,useRef } from "react";
import Logo from "../logo/Logo";
import List from "./List";
import Wrapper from "./Wrapper";
import Menu from "./Menu";

import "./header.css";


function Header() {
  const [moreActive, setMoreActive] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    document.body.addEventListener('click', ({target}) => {
      if(target.classList.contains('header__button')) {
        setMoreActive(!moreActive)
      } else if(moreActive) {
        setMoreActive(false)
      }
      if(target.classList.contains('header__menu-button')) {
        setMenuActive(!menuActive)
      }else if(menuActive) {
        setMenuActive(false)
      }
    })
  })
  return (
    <header className="header">
      <div className="container header__inner">
        <nav className="header__nav">
          <Logo />
          <List />
          <Wrapper  moreActive={moreActive}/>
          <Menu menuActive={menuActive}  />
        </nav>
      </div>
    </header>
  );
}

export default Header;
