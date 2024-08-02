import React, { useEffect, useRef } from "react";
import * as icons from "../../../assets/icons/icons.js";

const HabilitiesCanvas = ({ habilidades }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    habilidades.forEach((skill) => {
      const img = new Image();
      img.src = icons[skill];

      img.onload = () => {
        const x = getRandomInt(0, canvas.width - 100);
        const y = getRandomInt(0, canvas.height - 100);
        ctx.drawImage(img, x, y, 100, 100);
      };
    });
  }, [habilidades]);

  return <canvas ref={canvasRef} />;
};

export default HabilitiesCanvas;
