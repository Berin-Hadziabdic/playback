import React from 'react';


function GenericHeading(props)
{
    
    return(<h1 className={ props.classNameGenericHeading||"generic-heading"}>{props.value}</h1>)
}

export default GenericHeading;