import React, {Component} from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Login extends Component {
  constructor() {
    super();

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  handleLoginSubmit(event) {
  }

  render() {
    return (
      <div>
        <div className="login-container">
          <div className="login">
            <div class="login-header"><h1>Login</h1></div>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleEmailChange} />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl value={this.state.password} onChange={this.handlePasswordChange} type="password" />
            </FormGroup>
            <Button block bsSize="large" bsStyle="info"
              disabled={!this.validateForm()} type="submit" onClick={this.handleLoginSubmit} >Login </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;