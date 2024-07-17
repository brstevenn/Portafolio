import React, { useContext } from "react";
import { LanguageContext } from "../../common/LanguageContext/LanguageContext";
import "./Navbar.css"


function Navbar({ open }) {

  const { language, data, changeLanguage } = useContext(LanguageContext);

  return (
    <nav className="NavbarWrapper" open={open} style={{right: `${open ? "0" : "-100%"}`}}>
      <a href="#Projects">{data.secciones[1]}</a>
      <a href="#Skills">{data.secciones[0]}</a>
      <a href="#Contact">{data.secciones[2]}</a>
    </nav>
  );
}

export default Navbar;
