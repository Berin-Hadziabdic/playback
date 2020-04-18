import "./NavModuleStyles.css";
import React from 'react';

function RetractedNavContents(props){
    return (<p>placeholder</p>);
}
//This component renders nav links in the  extended nav drawer.
function ExtendedNavContents(props){
    const linkArray = props.links.map((link) => <li className="nav-link"> {link.title} </li>)

    return (<ul>{linkArray}</ul>);
}
//This function returns the navbar component.

class NavDrawer extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {extended: true, links: props.links}
    }

    
    
    render (){
      var nav_contents = this.state.extended ? <ExtendedNavContents links={this.state.links}/> : <RetractedNavContents/>
    
      return (
            <nav className="nav-bar">
                {nav_contents}
            </nav>
        );
    }
}


export default NavDrawer;