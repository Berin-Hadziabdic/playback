import "./NavModuleStyles.css";
import React from 'react';

//This component returns rendered contents for a contracted nav-drawer.

function NavButton(props){

    return (<div className={props.buttonClass} onClick={(e) => props.navDrawerButtonClick(e)}> </div>)
}
function RetractedNavContents(props){
    return (<NavButton buttonClass={props.buttonClass} navDrawerButtonClick={props.navDrawerButtonClick}/>);
}
//This component returns rendered contents for an extended nav-drawer.
function ExtendedNavContents(props){
    const linkArray = props.links.map((link) => <li className="nav-link"> {link.title} </li>)

    return (
            <React.Fragment>
                <NavButton buttonClass={props.buttonClass} navDrawerButtonClick={props.navDrawerButtonClick}/>
                <ul>{linkArray}</ul>
            </React.Fragment>);

}


//This class returns the navbar component.

class NavDrawer extends React.Component {
    
    constructor(props){
        super(props)
        //extended in state is to communicate whether or not the nav drawer is extended (set to true),
        // retracted (set to false)!
        console.log(props.navDrawerButtonClick)
        
    }

   
    getNavStyles = ( ) => {
        const navStyle = this.props.extended ? "nav-bar nav-bar-extended" : "nav-bar";
        return navStyle;
    } 

    render (){
      //This line determines what to render in the Nav body based upon the states extended boolean value.
      
      var nav_contents = this.props.extended ? <ExtendedNavContents  links={this.props.links} buttonClass={"nav-button"} navDrawerButtonClick = {this.props.navDrawerButtonClick} /> : <RetractedNavContents buttonClass="nav-button" navDrawerButtonClick={this.props.navDrawerButtonClick}/>
      
      return (
            <nav className={this.getNavStyles()}>
                {nav_contents}
            </nav>
        );
    }


}


export default NavDrawer;