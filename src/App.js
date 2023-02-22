import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render(){

    var mycustomStyle = {
      fontsize:900,
      fontfamily: 'Courier',
      color: '#003300'
    }
    return (

      /*<div>
          <h1 className = "hello"> {20+25}</h1>
          <h2>Reactjs || and JSX are - Main Agenda For Todays Session </h2>
          <p data-demoAttribute="demo">This is the Sample for JSX - Attribute</p>
        </div>*/
        <div>
          <h1 style={mycustomStyle}>Hi This where the CustomStyle Tag Begins</h1>
          <h2>{2+2}</h2>
        </div>
    );
  }
  
  
}

export default App;
