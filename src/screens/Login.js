import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Login.css';

class LoginForm extends Component {

    state = {
      isError: false,
      errorsList: [],
      loginDetails: {
        username: '',
        password: ''
      }
    };

    handleSubmit = (e) => {
      e.preventDefault();
      this.validateCredentials()
    }

    updateState(e) {
      let newLoginDetails = Object.assign({}, this.state.loginDetails)
      newLoginDetails[e.target.name] = e.target.value
      this.setState(Object.assign({}, this.state, { loginDetails : newLoginDetails }))
    }

    validateCredentials() {
      let { loginDetails } = this.state
      let errorsList = [];

      this.setState({ errorsList });

      if (!loginDetails.username ) errorsList.push('Please provide a username!')
      if (!loginDetails.password ) errorsList.push('Please provide a password!')
      if ( errorsList.length ) this.setState({ errorsList })
    }

    render() {
        return <div className='login-form'>
            <h2>Login</h2>

            {this.state.errorsList.map(
              (error, index) => <span key={index} className="error">{error}</span>
            )}

            <form onSubmit={this.handleSubmit}>
              <TextField name="username" floatingLabelText="Username" onChange={this.updateState.bind(this)} />
              <TextField name="password" floatingLabelText="Password" type="password" defaultValue="" onChange={this.updateState.bind(this)} />
              <br />
              <RaisedButton label="Login" onClick={this.handleSubmit} />
            </form>
        </div>
    }
}

export default LoginForm;
