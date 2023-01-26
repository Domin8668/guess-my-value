import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" alt="" src={logo} />
    </div>
  );
};

export default Header;
