import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../common/LanguageContext/LanguageContext";
import projects from "../../../assets/images/projects.png"
import "./Projects.css";
import SectionFooter from "../../common/SectionFooter/SectionFooter";
import Image from "../../common/Image/Image";

function Projects({ id }) {
  const { language, data, changeLanguage } = useContext(LanguageContext);

  return (
    <section className="section" id={id} >
      <div className="projects" >
        <div className="projectsTitleContainer" >
          <h1 className="sectionTitle">{data.secciones[1].toUpperCase()}</h1>
          <Image image={projects} width={"100%"} />
        </div>
        <div>
          {
            data && data.proyectos_recientes && <div>
              <h1 className="sectionTitle">{data.proyectos_recientes.titulo.toUpperCase()}</h1>
            </div>
          }
        </div>
      </div>
      <SectionFooter content={data.frases} interval={13} />
    </section >
  );
}

export default Projects;
