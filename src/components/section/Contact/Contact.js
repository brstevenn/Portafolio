import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../common/LanguageContext/LanguageContext";
import Image from "../../common/Image/Image";
import profile from "../../../assets/images/ProfilePicture.png"
import "./Contact.css"
import SectionFooter from "../../common/SectionFooter/SectionFooter";
import * as allIcons from "../../../assets/icons/icons"
import cv_es from "../../../assets/cvs/Bryan_Gaitan__CV.pdf"

function Contact({ id }) {
  const { language, data, changeLanguage } = useContext(LanguageContext);

  function downloadCv(event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = cv_es;
    link.download = "Bryan_Gaitan__CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function capitalize(word, letter = 1) {
    if(!word) return '';
    const firstLetter = word.substring(0, letter).toUpperCase();
    const restOfText = word.substring(letter).toLowerCase();
    return firstLetter + restOfText;
  }

  return (
    <section className="section" id={id} >
      <div className="contact">
        <h1 className="sectionTitle contactTitle">{data.secciones[3].toUpperCase()}</h1>
        <div className="contactContent">
          <div className="profileInformation" style={{order: 1}} >
            <Image styles="Profile" image={profile} width={"100%"} height={"100%"} />
            <span >
              <button className="downloadCv" onClick={downloadCv} style={{ backgroundImage: `url(${allIcons.DownloadCV})` }}  >{data.adicional[1].toUpperCase()}</button>
            </span>
            <span className="contactIcons" >
              <a href="mailto:brayangaitan81@gmail.com" target="_blank" rel="noreferrer" ><img src={allIcons.Gmail} alt="Gmail" width="50px" /></a>
              <a href="https://www.linkedin.com/in/bryan-gaitan-0ba256119/" alt="LinkedIn" target="_blank" rel="noreferrer" ><img src={allIcons.LinkedIn} alt="LinkedIn" width="50px" /></a>
              <a href="https://github.com/brstevenn" alt="GitHub" target="_blank" rel="noreferrer" ><img src={allIcons.GitHub2} alt="GitHub" width="50px" /></a>
            </span>
          </div>
          <form className="formContact" style={{order: 2}} >
            <label className="sectionTitle formLabel" >
              <p className="labelText" >{capitalize(data.contacto[0].toUpperCase())}</p>
              <input className="inputText" placeholder={`${capitalize(data.contactoPlaceHolder[0].toUpperCase())} ${data.contacto[0].toLowerCase()}`} ></input>
            </label>
            <label className="sectionTitle formLabel" >
              <p className="labelText" >{capitalize(data.contacto[1].toUpperCase())}</p>
              <input className="inputText" placeholder={`${capitalize(data.contactoPlaceHolder[0].toUpperCase())} ${data.contacto[1].toLowerCase()}`}  ></input>
            </label>
            <label className="sectionTitle formLabel email" >
              <p className="labelText" >{capitalize(data.contacto[2].toUpperCase())}</p>
              <input className="inputText" placeholder={`${capitalize(data.contactoPlaceHolder[0].toUpperCase())} ${data.contacto[2].toLowerCase()}`} ></input>
            </label>
            <label className="sectionTitle formLabel formLabelTextarea fullWidth" >
              <p className="labelText" >{capitalize(data.contacto[3].toUpperCase())}</p>
              <textarea className="inputTextarea" placeholder={`${capitalize(data.contactoPlaceHolder[0].toUpperCase())} ${data.contacto[4].toLowerCase()}`} ></textarea>
            </label>
            <span className="fullWidth" >
              <input className="sectionTitle submitInput"  type="submit" value={capitalize(data.adicional[0].toUpperCase())} ></input>
            </span>
            <span className="fullWidth" >
              <p className="sectionTitle warningText" >{capitalize(data.adicional[2].toUpperCase(), 2)} </p>
            </span>
          </form>
        </div>
      </div>
      <SectionFooter content={data.frases} interval={11} />
    </section >
  );
}

export default Contact;
