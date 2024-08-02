import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../common/LanguageContext/LanguageContext";
import projects from "../../../assets/images/projects.png"
import "./Projects.css";
import SectionFooter from "../../common/SectionFooter/SectionFooter";
import Image from "../../common/Image/Image";
import CURRENTS_PROJECTS from "../../../assets/images/projects/projects";

function Projects({ id }) {
  const { language, data, changeLanguage } = useContext(LanguageContext);

  const [showProject, setShowProject] = useState(false);
  const [projectInformation, setProjectInformation] = useState(null);

  function showProjects(event, key, value, close = false) {
    event.preventDefault();

    if(key && close === false) {
      setShowProject(true)
      setProjectInformation({key, value})
    }
    else if(key && close) {
      setShowProject(false)
      setProjectInformation(null)
    }
  }

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
              <h1 className="sectionTitle sectionProjectsTitle">{data.proyectos_recientes.titulo.toUpperCase()}</h1>
              <p>{data.proyectos_recientes.label}</p>
              {
                data.proyectos_recientes && data.proyectos_recientes.content &&
                <div className="projectsContainer" >
                {Object.entries(data.proyectos_recientes.content).map(([key, value]) => (
                  <div className="projectsImageContentContainer" >
                    <p className="projectName" >{value.name}</p>
                    <div className="projectsImageContainer" >
                      <div className="imageProjects" onClick={event => showProjects(event, key, value)} >
                        <Image image={CURRENTS_PROJECTS[key]} width={"80%"} />
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              }
              {
                projectInformation && projectInformation.key && projectInformation.value && showProject &&
                <div className="projectDescriptionContainer" >
                  <span className="closeButtonContainer fullWidth" >
                    <button className="closeButton sectionTitle" onClick={event => showProjects(event, projectInformation.key, projectInformation.value, true)} >x</button>
                  </span>
                  <p className="sectionTitle fullWidth projectNameDescription" >{projectInformation.value.name}</p>
                  <div >
                    <Image image={CURRENTS_PROJECTS[projectInformation.key]} width={"80%"} />
                  </div>
                  <div style={{display: showProject ? "flex" : "none"}}  className="descriptionProject" >
                    <span className="textProjects" >
                      <p >{projectInformation.value.description}</p>
                    </span>
                  </div>
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
