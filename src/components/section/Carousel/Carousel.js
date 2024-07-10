import React from 'react';
import Button from '../../common/Button/Button.js';
import * as allImage from "../../../assets/images/images.js"
import './Carousel.css';

function Carousel(props) {

   const thisPrueba = (url, event) => {
    event.preventDefault()
    var win = window.open(url, '_blank');
    win.focus();
   }

  return (
    <div className="containerCarouser" >
        <div className="proyectName" >
            <h2>Nombre del proyecto: {props.actual}</h2>
        </div>
        <div className="containerProyect" >
            <div className="cointainerImage" >
                <img className="imageProyect" src={allImage[props.actual]} alt="img" width="700px" />
            </div>
            <div className="tecnologiesProyect" >
                <p className="descriptionProyect" >{props.description}</p>
            </div>
        </div>
        <div className="containerTecnologies" >
            {props.tecnologies?.map(tec => {
                return <a href={tec.url} target="_blank" rel="noreferrer" ><img src={tec.img} alt="img" width="50px" /></a>
            })}
        </div>
        <div className="proyectButtons" >
            <Button id="Deploy" class="Deploy" onClick={event => thisPrueba(props.deploy, event)} content="Pagina" />
            <Button id="GitHub" class="GitHub" onClick={event => thisPrueba(props.gitHub, event)} content="GitHub" />
        </div>
    </div>
  );
}

export default Carousel;
