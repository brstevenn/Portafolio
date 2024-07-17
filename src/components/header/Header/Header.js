import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { LanguageContext } from "../../common/LanguageContext/LanguageContext";
import Button from "../../common/Button/Button";
import { Logo } from "../../../assets/icons/icons";
import traslate from "../../../assets/icons/traslate.svg";
import mode from "../../../assets/icons/mode.svg"
import Image from "../../common/Image/Image"
import "./Header.css"

function Header() {
  
  const { language, data, changeLanguage } = useContext(LanguageContext);

  const changeLan = () => {
    changeLanguage(language === "es" ? "en" : "es")
  }

  const changeMod = () => {
    //changeMode(mode ? false : true)
  }

  return (
    <header className="HeaderWrapper">
      <Image image={Logo} width={"40px"} style={"Logo"}/>
      <Navbar />
      <div className="modesButtons" >
        <Button
          onClick={changeLan}
          style={"traslate"}
          content={
            <Image
              image={traslate}
              width={"30px"}
              style={"Logo"}
            />
          }
        />
      </div>
    </header>
  );
}

export default Header;
