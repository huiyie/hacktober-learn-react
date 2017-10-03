import React, { Component } from 'react';
import logo from './logo.svg';
import headerBackground from './logo-back.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Logo-header">
            <img src={headerBackground} className="App-logo-back" alt="logo-back" />
            <img src={logo} className="App-logo" alt="logo" />
	  </div>
          <h1 className="App-title">Learn React in Hacktoberfest 2017 </h1>
        </header>
        <p className="App-intro">
          To get started, open <code>CONTRIBUTING.md</code>.
        </p>
      </div>
    );
  }
}

export default App;
