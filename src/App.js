import React, { useEffect, useState } from 'react';
import Header from './components/header/Header/Header';
import About from "./components/section/About/About";
import Button from './components/common/Button/Button';
import profilePhoto from "./assets/images/IMG20221101114758.jpg";
import {
  allImages,
  deploy,
  gitHub,
  description,
  tecnologies
} from "./components/common/strings"
import * as allIcons from "./assets/icons/icons.js"
import './App.css';
import Habilities from './components/section/Habilities/Habilities';
import Projects from './components/section/Projects/Projects.js';
import Main from './components/scene/main/main.js';
import Contact from './components/section/Contact/Contact.js';

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
    if (event.target.id === "Prev") {
      if (actual === 0) {
        setActual(3)
        functionSet(3)
      }
      if (actual > 0) {
        setActual(actual - 1)
        functionSet(actual - 1)
      }
      if (actual < 3 && actual > 0) {
        setActual(actual - 1)
        functionSet(actual - 1)
      }
    }
    if (event.target.id === "Next") {
      if (actual === 0) {
        setActual(1)
        functionSet(1)
      }
      if (actual >= 3) {
        setActual(0)
        functionSet(0)
      }
      if (actual > 0 && actual < 3) {
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

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const screenHeight = window.innerHeight;

  return (
    <div className="App">
      <Header />
      {
      /*
      <Main />
      */
      }
      <About id="About" />
      <Projects id="Projects" />
      <Habilities id="Skills" />
      {
        scrollY > screenHeight - 20 &&
        <Button id="go-to-up" styles={'go-to-up'} content={"Up"} onClick={(event) => window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })} />
      }
      <Contact id="Contact" />
    </div>
  );
}

export default App;
