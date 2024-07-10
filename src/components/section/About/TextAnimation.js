import React, { useState, useEffect } from "react";
import "./TextAnimation.css"

function TextAnimation({textDefault, texts}) {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [pause, setPause] = useState(false);

  //const texts = ["Bryan Gaitan", "Desarrollador Full Stack"]; // Array con los textos que quieres mostrar

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        if (isDeleting) {
          setCurrentText((text) => text.slice(0, -1));
        } else {
          setCurrentText((text) => texts[textIndex].slice(0, text.length + 1));
        }
        if (currentText === texts[textIndex]) {
          setTimeout(() => {
            setIsDeleting(true);
            setSpeed(50);
          }, 1000);
        }
        if (currentText === "" && isDeleting) {
          setTimeout(() => {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
            setSpeed(100);
          }, 1000);
        }
      }
    }, speed);
    return () => clearInterval(interval);
  }, [currentText, isDeleting, pause, speed, textIndex, texts]);

  return (
    <div className="typewriterContainer">
      <p className="typewriter">{textDefault.toUpperCase()}&nbsp;{currentText.toUpperCase()}</p>
      {/*<button onClick={() => setPause((prev) => !prev)}>{pause ? "Continuar" : "Pausar"}</button>*/}
    </div>
  );
}

export default TextAnimation;
