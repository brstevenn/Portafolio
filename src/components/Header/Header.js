import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import MenuButton from "../MenuButton/MenuButton";
import logo from "../../assets/icons/logo.ico"
import "./Header.css"

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className="HeaderWrapper">
      <h2><img src={logo} width="30px" /> &nbsp; Bryan Gaitan</h2>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </header>
  );
}

export default Header;