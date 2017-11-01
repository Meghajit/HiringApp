import React from "react"
import { Navbar,Nav,NavbarItems, NavItem,NavbarHeader,NavDropdown, MenuItem } from 'react-bootstrap';
import {Router, Route} from 'react-router';
import LandingPage from './LandingPage';
import NavbarLogo from '../images/telstra-navbar.jpg';
import CardCss from "../customCss/CardCss.css";
//=============ADDED For Authentication======
import {userLogOut}  from './../Actions.jsx';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loadLoginstatusFromCookie} from './../Actions.jsx';
//=================================================================
class Navibar extends React.Component {


  constructor(props) 
  {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.state={loginstatus:"",loginData:{name:"",email:"",job_role:""}}
  }

  componentWillMount() 
  {
       const loadLoginstatus = this.props.loadLoginstatus;
       loadLoginstatus();
  }
  
  //WHen we press logout button
  handleLogOut = (event) => {
    this.props.userLogOut();
    this.props.history.push('/');
  };

 

 render(){
   return (
    <Navbar >
     <div class="container">
   
        <Navbar.Header className="row">
               <div className="col-xs-2">
                <Navbar.Brand>
                    <a href="/"><img id="navbar-logo" src={NavbarLogo} /></a>
                </Navbar.Brand>
              </div>
              <div className="col-xs-4">
                <a  href="/"><h4 id="navbar-texting">HPSE Hiring</h4></a>
              </div>
          
    </Navbar.Header>
   
    
    <Nav class="row">
          <NavItem className="col-xs-4" eventKey={1} href="#">About</NavItem>
          <NavItem className="col-xs-4" eventKey={2} href="#">FAQ</NavItem>
          <NavItem className="col-xs-4" eventKey={4} href="/dashboard" 
                              style={(this.props.loginstatus!=="Authenticated")?
                              {display:"none"}:{display:""}}>Dashboard</NavItem>
    </Nav>
	  <Nav pullRight>
          <NavItem className="col-xs-4" eventKey={5} onClick={this.handleLogOut}
                              style={(this.props.loginstatus!=="Authenticated")?
                              {display:"none"}:{display:""}}>Logout</NavItem>
          <NavItem className="col-xs-4" eventKey={6}  href="/login" 
                              style={(this.props.loginstatus=="Authenticated")?
                              {display:"none"}:{display:""}}>Login</NavItem>
    </Nav> 
    </div>
  </Navbar>
    ); 
 }
}
const mapStateToProps = function(state) {
  return {
    loginstatus: state.loginstatus,
    loginData:state.loginData,
    requestData:state.requestData
  }
}
const mapDispatchToProps = function(dispatch) {
  return {
      userLogOut: function() {
          dispatch(userLogOut());
      },
      // getDashboard: function(loginstatus) {
      //     dispatch(getDashboard(loginstatus));
      // },
      loadLoginstatus: () => dispatch(loadLoginstatusFromCookie())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navibar));