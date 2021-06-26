import React from "react";
import headerLogo from "../images/logo.svg";

function Header() {
  return (
    <div className="header">
      <img src={headerLogo} className="logo" alt="Логотип" />
    </div>
  );
}

export default Header;
