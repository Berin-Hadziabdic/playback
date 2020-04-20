
import React from 'react';
import  './BodyModuleStyle.css';

class Body extends React.Component {

    constructor(props)
    {
        super(props)
        this.getStyles.bind(this)
    }

    render()
    {
        return (
        <div className={"body-wrapper " + this.getStyles()}>
            <div className="body">
                {this.props.children}
            </div>
        </div>)
    }

    getStyles () {
        
        return (this.props.extended ? "extended-nav" : "not-extended-nav")
    }
}

export default Body;