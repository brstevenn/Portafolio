import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../common/LanguageContext/LanguageContext";
import Image from "../../common/Image/Image";
import about from "../../../assets/images/about.png"
import TextAnimation from "./TextAnimation"
import "./About.css"
import SectionFooter from "../../common/SectionFooter/SectionFooter";

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
        <p className="desciption">Soy un programador Full Stack con experiencia en JavaScript, React, Node, PostgreSQL, MongoDB y varias librerías relacionadas. Mi enfoque es siempre la calidad del código y el rendimiento, me gusta trabajar en equipo y estoy constantemente aprendiendo nuevas habilidades y tecnologías.</p>
      </div>
      <Image image={about} width={"100%"} />
      </div>
      <SectionFooter content={data.frases[0]} />
    </section>
  );
}

export default About;
