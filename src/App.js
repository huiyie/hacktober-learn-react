import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import headerBackground from './logo-back.jpg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './components/AppBar';

import Home from './screens/Home';
import About from './screens/About';
import Login from './screens/Login';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div className="App">
            <header className="App-header">
              <div className="Logo-header">
                <img src={headerBackground} className="App-logo-back" alt="logo-back" />
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <h1 className="App-title">Learn React in Hacktoberfest 2017</h1>
            </header>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
            </Switch>

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
