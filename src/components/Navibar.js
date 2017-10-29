import React from "react"
import { Navbar,Nav,NavbarItems, NavItem,NavbarHeader,NavDropdown, MenuItem } from 'react-bootstrap';
import {Router, Route} from 'react-router';
import LandingPage from './LandingPage';

class Navibar extends React.Component {


  constructor(props) {
    super(props);
  }

 

 render(){
   return (
   
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/main">HPSE Hiring</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">About</NavItem>
      <NavItem eventKey={2} href="#">FAQ</NavItem>
      <NavItem eventKey={3}  href="/login" >Login</NavItem>
      <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={4.1}>Developers</MenuItem>
        <MenuItem eventKey={4.2}>Policy</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
    ); 
 }
}

export default Navibar;