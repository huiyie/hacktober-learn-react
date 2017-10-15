import React from 'react';
import { Component } from 'react';
import Link from 'react-router-dom/Link';

export default class Home extends Component {
    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                Navigate to <Link to="/about">About</Link> page.
            </div>
        );
    }
};