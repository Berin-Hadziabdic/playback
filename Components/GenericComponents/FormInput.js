import React from 'react';
import GenericHeading from './GenericHeading';
function FormInput(props){

  const element= (
    <section className>
         <GenericHeading value="Testing the form" />
        <input  className={ props.FormInputClassName || "form-input"} type="text"  value = {props.value} onChange = {(e) => props.onChange(e)} />
    </section>);

    return element;
}

export default FormInput;