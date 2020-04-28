import React from 'react';


function GenericHeading(props)
{
    
    return(<div className="row justify-content-end"><h1 className={ props.classNameGenericHeading + "col-12 generic-heading yellow"}>{props.value}</h1></div>)
}

export default GenericHeading;