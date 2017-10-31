import React from "react"
import { Navbar,Nav,NavbarItems, NavItem,NavbarHeader,NavDropdown, MenuItem } from 'react-bootstrap';
import {Router, Route} from 'react-router';
import LandingPage from './LandingPage';
import NavbarLogo from '../images/telstra-navbar.jpg';
import CardCss from "../customCss/CardCss.css";

class Navibar extends React.Component {


  constructor(props) {
    super(props);
  }

 

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
      <NavItem className="col-xs-4" eventKey={3}  href="/login" >Login</NavItem>
    </Nav>
    </div>
  </Navbar>
    ); 
 }
}

export default Navibar;