import React from 'react';
import GenericFormComponent from '../GenericComponents/GenericForm';
import GenericHeading from '../GenericComponents/GenericHeading';
import GenericButton from '../GenericComponents/GenericButton';
import GenericFormInput from '../GenericComponents/GenericFormInput';

class ConfigurePlayBackSession extends React.Component
 {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <GenericFormComponent className={undefined}>
                <GenericFormInput heading="Test heading" className={undefined}/>
            </GenericFormComponent>
            
        )
    }
}

export default ConfigurePlayBackSession;