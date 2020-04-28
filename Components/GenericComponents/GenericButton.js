
import React from 'react';
import "./GenericStyles.css"
import {Button} from 'react-bootstrap';
//This is a generic button that will be configured by a parent component.
// The parent should supply the onClick method and the button text. 
//Optionally, the parent should also supply the tex
function GenericButton(props){
    return (
    <button onClick={(e) => props.onClick(e)}  className={props.className + " col-5 btn btn-primary btn-sm"}>
        {props.value}
    </button>);
}

export default GenericButton;