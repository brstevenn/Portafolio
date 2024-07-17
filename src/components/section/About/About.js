import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../common/LanguageContext/LanguageContext";
import Image from "../../common/Image/Image";
import about from "../../../assets/images/about.png"
import TextAnimation from "./TextAnimation"
import "./About.css"
import SectionFooter from "../../common/SectionFooter/SectionFooter";
import * as allIcons from "../../../assets/icons/icons"

function About() {
  const { language, data, changeLanguage } = useContext(LanguageContext);
  const [presentation, setPresentation] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPresentation(prevState => !prevState);
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, [])

  return (
    <section className="section">
      <div className="about">
        <div>
          <p className="greet">{data.saludo.toUpperCase()}</p>
          <TextAnimation textDefault={data.presentacion} texts={data.presentacionDinamica}/>
          <p className="desciption">{data.descripcion}</p>
        </div>
      <div>
        <Image image={about} width={"80%"} />
        <div className="contact" >
          <a href="mailto:brayangaitan81@gmail.com" target="_blank" rel="noreferrer" ><img src={allIcons.Gmail} alt="Gmail" width="50px" /></a>
          <a href="https://www.linkedin.com/in/bryan-gaitan-0ba256119/" alt="LinkedIn" target="_blank" rel="noreferrer" ><img src={allIcons.LinkedIn} alt="LinkedIn" width="50px" /></a>
          <a href="https://github.com/brstevenn" alt="GitHub" target="_blank" rel="noreferrer" ><img src={allIcons.GitHub} alt="GitHub" width="50px" /></a>
        </div>
      </div>
      </div>
      <SectionFooter content={data.frases} interval={12} />
    </section>
  );
}

export default About;
