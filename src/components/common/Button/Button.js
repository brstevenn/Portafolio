import React from 'react';
import "./Button.css"

function Button({id, style, onClick, content}) {

  const click = (event) => {
    event.preventDefault();
    onClick()
  }

  return (
    <button id={id} className={`button-${style}`} onClick={click} >{content}</button>
  );
}

export default Button;
