// Based on the Medium tutorial
// https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import UploadScreen from './UploadScreen';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Login" style={appbarStyle} />
                        <TextField
                            hintText="Enter your username"
                            floatingLabelText="Username"
                            onChange= {(event, newValue) => this.setState({ username: newValue })}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your password"
                            floatingLabelText="Password"
                            onChange= {(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br/>
                        <RaisedButton label="Submit" style={buttonStyle} backgroundColor="#980606" labelColor="white" onClick={(event) => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }

    handleClick(event) {
        // stub
    }
}

const appbarStyle = {
    backgroundColor: "#980606",
}

const buttonStyle = {
    margin: 15,
};

export default Login;