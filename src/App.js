import React, { Component } from 'react';
import AppBar from './components/appBar';
import AppBody from './components/appBody';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <AppBody/>
      </div>
    );
  }
}

export default App;
