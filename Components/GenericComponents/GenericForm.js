import React from 'react'


//This is a generic form wrapper.
//Its used to render various forms across the app.
class GenericForm extends React.Component {

    constructor(props)
    {
        super(props)
    }

    render(){


        return (
            <form className={this.props.FormClassName || "placeholder"}>
                    {this.props.children}
            </form>);
    }
}

export default GenericForm;