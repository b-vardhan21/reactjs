
import './App.css';
import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

class App extends Component{
  render(){
    return(
      <div className="App">
        <NameList/>
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/>
      <FunctionClick/>
      <Counter/>
      <Greet name="vardhan Barishetti" heroName="Batman">
        <p>children</p>
      </Greet>
      <Welcome name="Barishetti" heroName="Superman"/>
      <Hello/>
      <Message/> */}
    </div>
    );
  }
}


export default App;
