import React from 'react';
import "./Button.css"

function Button({id, styles, onClick, content}) {

  const click = (event) => {
    event.preventDefault();
    onClick()
  }

  return (
    <button id={id} className={`button-${styles}`} onClick={click} >{content}</button>
  );
}

export default Button;
