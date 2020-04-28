import React from 'react';
import GenericHeading from './GenericHeading';

function GenericFormInput(props){

  const element= (
    <section className>
         <GenericHeading value={props.heading} />
        <input  className={ props.GenericFormInputClassName || "form-input"} type="text"  value = {props.value} onChange = {(e) => props.onChange(e)} />
    </section>);

    return element;
}

export default GenericFormInput;