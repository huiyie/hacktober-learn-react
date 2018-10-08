import React from 'react';
import { Component } from 'react';
import Link from 'react-router-dom/Link';

export default class About extends Component {
    render() {
        return (
            <div>
                <p>
                    Hacktober Learn React Project
                </p>
                Go back to <Link to="/">Home</Link>
            </div>
        );
    }
};