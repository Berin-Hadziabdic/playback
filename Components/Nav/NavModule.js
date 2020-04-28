import "./NavModuleStyles.css";
import React from 'react';
import {BrowserRouter as Router,
        Switch,
        Route,
        Link }from "react-router-dom";
import CompletedJobs from "../CompletedJobs/CompletedJobs";
import InProgressJobs from "../InProgressJobs/InProgressJobs.js";
import ConfigurePlayBackSession from '../ConfigurePlayBackSession/ConfigurePlayBackSession';
import Body from '../Body/BodyModule';


//This component returns rendered contents for a contracted nav-drawer.

function NavButton(props){

    return (<div className={props.buttonClass} onClick={(e) => props.navDrawerButtonClick(e)}> </div>)
}

function RetractedNavContents(props){
    return (
    <React.Fragment>
        <NavButton buttonClass={props.buttonClass} navDrawerButtonClick={props.navDrawerButtonClick}/>
    <span className="light-red">App={"{--Playback--}"}</span>
        <div className="white">. . .</div>
    </React.Fragment>);
}
//This component returns rendered contents for an extended nav-drawer.
function ExtendedNavContents(props){
 var colorPicker = 0;
  
const linkArray = props.links.map((link) => <li className="nav-link link"><Link to="/inprogressjobs"> 
<span className="white">{"{"}</span> <span className="yellow">{link.title}</span> <span className="white">{"};"}</span>
</Link></li>)

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

   
    

    render (){
      //This line determines what to render in the Nav body based upon the states extended boolean value.
      
      var nav_contents = this.props.extended ? <ExtendedNavContents  links={this.props.links} buttonClass={"nav-button"} navDrawerButtonClick = {this.props.navDrawerButtonClick} /> : <RetractedNavContents buttonClass="nav-button" navDrawerButtonClick={this.props.navDrawerButtonClick}/>
      
      return (
          <Router>
            <nav className={"navbar navbar-expand-xl fixed-top nav-bar-custom "}>
                {nav_contents}
            </nav>
            <Switch>
                <Route path='/completedjobs'>
                  <Body>
                    <CompletedJobs />
                  </Body>
                </Route>
                <Route path="/inprogressjobs">
                  <Body>
                    <InProgressJobs />
                  </Body>
                </Route>
                <Route path="/configuresession">
                  <Body>
                    <ConfigurePlayBackSession />
                  </Body>
                </Route>

            </Switch>
          </Router>
        );
    }


}


export default NavDrawer;