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
        var inputUsername = this.state.username;
        var inputPassword = this.state.password;

        // dummy data
        var users = [];
        var john = {
            "username": "johndoe",
            "password": "123"
        };
        var jane = {
            "username": "janedoe",
            "password": "456"
        };
        users.push(john);
        users.push(jane);
        console.log(users);

        

        var index;
        for (index = 0; index < users.length; index++) {
            console.log('for loop');
            if (users[index].username === inputUsername && users[index].password === inputPassword) {
                console.log('Login successful');
                var uploadScreen = [];
                uploadScreen.push(<UploadScreen appContext = {this.props.appContext} />);
                this.props.appContext.setState({loginPage: [], uploadScreen:uploadScreen});
                break;
            }
            else if (index === users.length - 1) {
                console.log('Username and password do not match');
                alert('Username and password do not match');
                break;
            }
        }
    }
}

const appbarStyle = {
    backgroundColor: "#980606",
}

const buttonStyle = {
    margin: 15,
};

export default Login;