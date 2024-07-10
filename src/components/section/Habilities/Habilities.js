import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../common/LanguageContext/LanguageContext";
import habilities from "../../../assets/images/habilities.png"
import Image from "../../common/Image/Image";
import * as icons from "../../../assets/icons/icons.js"
import "./Habilities.css"
import SectionFooter from "../../common/SectionFooter/SectionFooter";

function Habilities({ id }) {
  const { language, data, changeLanguage } = useContext(LanguageContext);

  const listOfSkills = [
    { frontEnd: ["React", "NextJS"] },
    { backEnd: ["DotNet", "NodeJS"] },
    { dataBase: ["MongoDB", "PostgreSQL"] },
    { languages: ["JavaScript", "CSharp", "Python"] }
  ]

  return (
    <section className="section" id={id} >
      <div className="habilities">
        <div className="habilitiesTitleContainer" >
          <h1 className="sectionTitle">{data.secciones[0].toUpperCase()}</h1>
          <Image image={habilities} width={"100%"} />
        </div>
        <div className="habilitiesContainer">
          {
            listOfSkills && listOfSkills.map((skill, index) => {
              let key;
              let value;
              Object.entries(skill).forEach(([subKey, subValue]) => {
                key = subKey;
                value = subValue;
              });
              return (
                <div className="subHabilitiesContainer" key={index}>
                  <h2 className="habilitiesTitle">{key.toUpperCase()}</h2>
                  <div className="subHabilitiesImagesContainer" >
                  {value && value.map(subItem => (
                    <div className="logo-container">
                      <div className="particles" id={`particles${subItem}`} style={{'--content': `url(${icons[subItem]})`}}>
                        {console.log(icons[subItem])}
                        <Image style="Logo" image={icons[subItem]} content={subItem} width={"100%"} height={"100%"} link="http://google.com" />
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <SectionFooter content={data.frases[1]} />
    </section >
  );
}

export default Habilities;
