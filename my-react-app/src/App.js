
import './App.css';
import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component{
  render(){
    return(
      <div className="App">
      <Greet name="vardhan Barishetti" heroName="Batman">
        <p>children</p>
      </Greet>
      <Welcome name="Barishetti" heroName="Superman"/>
      <Hello/>
    </div>
    );
  }
}


export default App;
