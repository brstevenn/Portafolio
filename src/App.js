import React from 'react';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Button from './components/SharedComponents/Button/Button';
import profilePhoto from "./assets/images/IMG20221101114758.jpg";
import {
  allImages,
  deploy,
  gitHub,
  description,
  tecnologies} from "./components/SharedComponents/strings"
import * as allIcons from "./assets/icons/icons.js"
import './App.css';

function App() {
  const [actual, setActual] = React.useState(0)
  const [image, setImage] = React.useState(allImages[actual])
  const [actualDeploy, setActualDeploy] = React.useState(deploy[actual])
  const [actualGitHub, setActualGitHub] = React.useState(gitHub[actual])
  const [actualDescription, setActualDescription] = React.useState(description[actual])
  const [actualTecnologies, setActualTecnologies] = React.useState(tecnologies[actual])

  const [gmail, setGmail] = React.useState(false)

  const handleClick = (event) => {
    //event.preventDefault();
    const functionSet = (data) => {
      setImage(allImages[data])
      setActualDeploy(deploy[data])
      setActualGitHub(gitHub[data])
      setActualDescription(description[data])
      setActualTecnologies(tecnologies[data])
    }
    if(event.target.id === "Prev"){
      if(actual === 0) {
        setActual(3)
        functionSet(3)
      }
      if(actual > 0){
        setActual(actual - 1)
        functionSet(actual - 1)
      }
      if(actual < 3 && actual > 0) {
        setActual(actual - 1)
        functionSet(actual - 1)
      }
    }
    if(event.target.id === "Next"){
      if(actual === 0) {
        setActual(1)
        functionSet(1)
      }
      if(actual >= 3) {
        setActual(0)
        functionSet(0)
      }
      if(actual > 0 && actual < 3) {
        setActual(actual + 1)
        functionSet(actual + 1)
      }
    }
  }

  const icons = [
    allIcons.Auth0,
    allIcons.Axios,
    allIcons.Boostrap5,
    allIcons.CSharp,
    allIcons.Cloudinary,
    allIcons.CSS,
    allIcons.DotNet,
    allIcons.Express,
    allIcons.HTML,
    allIcons.JavaScript,
    allIcons.MongoDB,
    allIcons.MUI,
    allIcons.NodeJS,
    allIcons.NodeMailer,
    allIcons.PostgreSQL,
    allIcons.React,
    allIcons.Stripe,
    allIcons.SweetAlert2
  ]

  const clipboardData = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText("brayangaitan81@gmail.com")
    setGmail(true)
  }

  return (
    <div className="App">
        <Header />
        <div className="AboutMe" id="AboutMe" >
          <h3>Sobre mi</h3>
          <div className='Resumen'>
            <span className='Resumnen-p' >
              <h4>Hola mi nombre es Bryan Gaitan.</h4>
              Soy un programador Full Stack con experiencia en JavaScript, 
              React, Node, PostgreSQL, MongoDB y varias librerías relacionadas. 
              Mi enfoque es siempre la calidad del código y el rendimiento, 
              me gusta trabajar en equipo y estoy constantemente aprendiendo nuevas habilidades y tecnologías.
            </span>
            <a href="https://www.linkedin.com/in/bryan-gaitan-0ba256119/" alt="LinkedIn" target="_blank" rel="noreferrer" >
              <img className="LinkedInProfile" src={profilePhoto} alt="ProfilePhoto" />
            </a>
          </div> 
        </div>
        <div className="Proyectos" id="Proyects" >
          <Button id="Prev" class="Prev" onClick={handleClick} content="<" />
          <Carousel component="ul" leftPadding={100} focus={0} actual={image} deploy={actualDeploy} gitHub={actualGitHub} description={actualDescription} tecnologies={actualTecnologies} />
          <Button id="Next" class="Next" onClick={handleClick} content=">" />
        </div>
        <div className="Contact" id="Contact" >
          <h3>Contactos</h3>
          <span onClick={clipboardData} ><img src={allIcons.Gmail} alt="Gmail" width="50px" /> &nbsp; {gmail ? <a className={gmail ? "whitBackground" : "noneBackground"} >El Gmail fue copiado en el portapapeles: brayangaitan81@gmail.com</a> : ""}</span>
          <div>
            <a href="" alt="LinkedIn" target="_blank" rel="noreferrer" ><img src={allIcons.LinkedIn} alt="LinkedIn" width="50px" /></a>
            <a href="" alt="GitHub" target="_blank" rel="noreferrer" ><img src={allIcons.GitHub} alt="GitHub" width="50px" /></a>
          </div>
        </div>
    </div>
  );
}

export default App;
