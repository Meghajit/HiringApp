import React, {Component} from 'react'
import { Button, FormGroup, FormControl, ControlLabel, Image, Form } from "react-bootstrap";
import {Redirect} from "react-router-dom"
import {browserHistory} from "react-router";
import axios from 'axios';
import telstra from '../images/telstra-title.png';

class Login extends Component {
  constructor() {
    super();

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      res:""
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
    debugger;
    console.log("heeheh");
    console.log(this);
    event.preventDefault();
    var self=this;
   

    axios.post('http://localhost:5000/api/auth', {
      "email":self.state.email,
      "pass":self.state.password,
    })
    .then(function (response) {
 
        console.log(response);
        if(response.data.responseCode=="1")
          self.props.history.push("/dashboard")
      
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  render() {
    return (
      <div >
         <Image src={telstra} width="1400px"/>
        <br/><br/>
      <Form inline align="center" >
      <FormGroup controlId="email">
        <ControlLabel>User Name</ControlLabel>
        {' '}
        <FormControl type="text" placeholder="User Name" value={this.state.email} onChange={this.handleEmailChange}/>
      </FormGroup>
      {' '}
      <FormGroup controlId="password">
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
      
    )
  }
}

export default Login;