/**
 * https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
 * 
 */

import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        );
    };
};