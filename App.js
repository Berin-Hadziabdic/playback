import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavDrawer from './Components/Nav/NavModule';

function App() {

  const LINKS = [{reference:"",title:"Completed Jobs"}, {reference: "",title:"In Progress Jobs"}]
  return (
    <div className="App">
      <NavDrawer links= {LINKS}/>
    </div>
  );
}

export default App;
