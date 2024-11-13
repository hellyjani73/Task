import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify
          className="icon"
          style={{ color: "#202427" }}
          onClick={OpenSidebar}
        />
      </div>

      <div className="header-right">
        {/*
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />*/}
      </div>
    </header>
  );
}

export default Header;
