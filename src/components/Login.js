import React, {Component} from 'react'
import { Button, FormGroup, FormControl, ControlLabel, Image, Form } from "react-bootstrap";
import {Redirect} from "react-router-dom"
import telstra from '../images/telstra-title.png';

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
    this.props.history.push("/dashboard")
  }

  render() {
    return (
      <div>
        <Image src={telstra} width="1400px"/>
      {/* <div>
        <Image src={telstra} width="1400px"/>
        <div className="login-container">
          <div className="login">
            <div className="login-header"><h1>Login</h1></div>
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
      <div> */}
      
      <div >
        <br></br>
      <Form inline align="center">
      <FormGroup controlId="formInlineName">
        <ControlLabel>User Name</ControlLabel>
        {' '}
        <FormControl type="text" placeholder="User Name" value={this.state.email} onChange={this.handleEmailChange}/>
      </FormGroup>
      {' '}
      <FormGroup controlId="formInlineEmail">
        <ControlLabel>Password</ControlLabel>
        {' '}
        <FormControl type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />
      </FormGroup>
      {' '}
      <Button type="submit" bsStyle="info"  disabled={!this.validateForm()} onClick={this.handleLoginSubmit}>
        Login
      </Button>
    </Form>
    </div>
    </div>
    )
  }
}

export default Login;