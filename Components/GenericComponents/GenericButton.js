
import React from 'react';
import "./GenericStyles.css"
//This is a generic button that will be configured by a parent component.
// The parent should supply the onClick method and the button text. 
//Optionally, the parent should also supply the tex
function GenericButton(props){

    return (
    <button onClick={(e) => props.onClick(e)}  className={props.className || "generic-button-style"}>
        {props.value}
    </button>);
}

export default GenericButton;