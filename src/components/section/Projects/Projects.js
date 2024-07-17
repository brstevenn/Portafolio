import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../common/LanguageContext/LanguageContext";
import projects from "../../../assets/images/projects.png"
import "./Projects.css";
import SectionFooter from "../../common/SectionFooter/SectionFooter";
import Image from "../../common/Image/Image";
import CURRENTS_PROJECTS from "../../../assets/images/projects/projects";

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
            data && data.proyectos_recientes &&
            <div>
              <h1 className="sectionTitle">{data.proyectos_recientes.titulo.toUpperCase()}</h1>
              <p>{data.proyectos_recientes.label}</p>
              {
                data.proyectos_recientes && data.proyectos_recientes.content &&
                <div>
                {Object.entries(data.proyectos_recientes.content).map(([key, value]) => (
                  <div>
                    {console.log(key)}
                    <Image image={CURRENTS_PROJECTS[key]} width={"100%"} />
                  </div>
                ))}
                </div>
              }
            </div>
          }
        </div>
      </div>
      <SectionFooter content={data.frases} interval={13} />
    </section >
  );
}

export default Projects;
