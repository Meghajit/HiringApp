import React, {Component} from 'react'
import { Button, FormGroup, FormControl, ControlLabel, Image, Form } from "react-bootstrap";
import {Redirect} from "react-router-dom"
import {browserHistory} from "react-router";
import axios from 'axios';
import telstra from '../images/telstra-title.png';
//=============Redux=========================
import {connect} from 'react-redux';
import {loadLoginstatusFromCookie} from './../Actions.jsx'
import {login} from './../Actions.jsx';
import { withRouter } from 'react-router-dom';
//==============================================

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleLoginIdChange = this.handleLoginIdChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.state = {login_id: "",password: "" }
  }


  componentWillMount() 
  {  
      const loadLoginstatus = this.props.loadLoginstatus;
     loadLoginstatus(); };
 

  checkLogin()
  {
    if (this.props.loginstatus==="Authenticated")
    this.handleAlreadyLoggedIn();  }

handleAlreadyLoggedIn() 
{   
    this.props.history.push("/dashboard") };
// After the component is loaded

  handleLoginIdChange(event) {
    this.setState({login_id: event.target.value})
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }
  validateForm() 
  {
    return this.state.login_id.length > 0 && this.state.password.length > 0;
  }
  handleLoginSubmit(event) {
    event.preventDefault();
    return this.props.login(this.state.login_id,this.state.password);
    this.setState({login_id: '', password: ''});
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <div >
         <Image src={telstra} width="1400px" />
        <br/><br/>
      <Form inline align="center" >
      <FormGroup controlId="email">
        <ControlLabel>User Name</ControlLabel>
        {' '}
        <FormControl type="text" placeholder="User Name" value={this.state.login_id} onChange={this.handleLoginIdChange}/>
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

const mapStateToProps = function(state) {
  return {
    loginstatus: state.loginstatus,
    loginData:state.loginData,
    requestData:state.requestData
  }
}
const mapDispatchToProps = function(dispatch) 
{
    return {
              login: function(login_id, password) 
                                {dispatch(login(login_id, password)); },
              loadLoginstatus: () => dispatch(loadLoginstatusFromCookie())
            }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));