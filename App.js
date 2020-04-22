import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavDrawer from './Components/Nav/NavModule';
import Body from './Components/Body/BodyModule';
import JobListings from './Components/GenericComponents/JobListingsModule';
import GenericHeading from './Components/GenericComponents/GenericHeading';


//The App component has two primary functions.
//One, it manages the state for the nav bar.
//Two, it acts as the wrapper for the Body component.
//The body component is used to render the main content of some specific page 
//on the site.
class App extends React.Component {
  
 constructor(props){
   super(props)
   this.state = {extendedNav: false}
 } 
  

  //Any time a user clicks the nav drawer button, the current state is reversed.
    // That is, if a drawer is extended, it is retracted, and if it is retracted it is 
    //extended.
    navDrawerButtonClick = (e) => {
      e.preventDefault();
      this.setState({extendedNav:!this.state.extendedNav})
  }

  
 render() {

  const LINKS = [{reference:"",title:"Completed Jobs"}, {reference: "",title:"In Progress Jobs"},{reference: "",title:"Schedule A Job"}]
  return (
    <div className="App">
      <NavDrawer  links = {LINKS} navDrawerButtonClick={this.navDrawerButtonClick} extended = {this.state.extendedNav} links= {LINKS}/>
      <Body  extended = {this.state.extendedNav}>
        <GenericHeading value="Finished-Jobs"/>
        <JobListings jobs={["X1344fesset","jTytul","144lkonj", "tuPIhnohb69"]}/>
      </Body>
    </div>
  );
}
}

export default App;
