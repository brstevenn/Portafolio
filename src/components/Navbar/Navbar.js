import React from "react";
import "./Navbar.css"


function Navbar({ open }) {
  return (
    <nav className="NavbarWrapper" open={open} style={{right: `${open ? "0" : "-100%"}`}}>
      <a href="#AboutMe">Sobre mi</a>
      <a href="#Proyects">Proyectos</a>
      {/*<a href="#Tecnologies">Tecnologias</a>*/}
      <a href="#Contact">Contacto</a>
    </nav>
  );
}

export default Navbar;