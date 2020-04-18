import "./NavModuleStyles.css";
import React from 'react';

//This component returns rendered contents for a contracted nav-drawer.
function RetractedNavContents(props){
    return (<p>placeholder</p>);
}
//This component returns rendered contents for an extended nav-drawer.
function ExtendedNavContents(props){
    const linkArray = props.links.map((link) => <li className="nav-link"> {link.title} </li>)

    return (<ul>{linkArray}</ul>);

}


//This class returns the navbar component.

class NavDrawer extends React.Component {
    
    constructor(props){
        super(props)
        //extended in state is to communicate whether or not the nav drawer is extended (set to true),
        // retracted (set to false)!
        this.state = {extended: true, links: props.links}
    }

    render (){
      //This line determines what to render in the Nav body based upon the states extended boolean value.
      var nav_contents = this.state.extended ? <ExtendedNavContents links={this.state.links}/> : <RetractedNavContents/>
    
      return (
            <nav className="nav-bar">
                {nav_contents}
            </nav>
        );
    }
}


export default NavDrawer;