import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../common/LanguageContext/LanguageContext";
import habilities from "../../../assets/images/habilities.png"
import Image from "../../common/Image/Image";
import * as icons from "../../../assets/icons/icons.js"
import "./Habilities.css"
import SectionFooter from "../../common/SectionFooter/SectionFooter";

function Habilities({ id }) {
  const { language, data, changeLanguage } = useContext(LanguageContext);

  return (
    <section className="section" id={id} >
      <div className="habilities">
        <div className="habilitiesContainer">
          {
            data.tecnologias && data.tecnologias.map((skill, index) => {
              return (
                <div className="subHabilitiesContainer" key={index}>
                  <div className="subHabilitiesImagesContainer" >
                  <div className="logo-container">
                      <div className="particles" id={`particles${skill}`} style={{'--content': `url(${icons[skill]})`}}>
                        <Image styles="Logo" image={icons[skill]} content={skill} width={"100%"} height={"100%"} link="http://google.com" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="habilitiesTitleContainer" >
          <h1 className="sectionTitle">{data.secciones[0].toUpperCase()}</h1>
          <Image image={habilities} width={"100%"} />
        </div>
      </div>
      <SectionFooter content={data.frases} interval={11} />
    </section >
  );
}

export default Habilities;
