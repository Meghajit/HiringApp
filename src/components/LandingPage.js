import React from "react"
import LandingPageCard from "./LandingPageCard";
import axios from 'axios';
import Navibar from "./Navibar"

class LandingPage extends React.Component {
    constructor(props) {
   super(props);

  
 }



 render(){
     return (
        <div class="container">
            <div class="row">
                <LandingPageCard  link = "/pendingApprovals"  headername="Pending Approvals" cardtitle="Pending Approvals" cardtext="Pending Approvals" buttontext="Pending Approvals" />
                <LandingPageCard headername="Pending Requests" cardtitle="Pending Requests" cardtext="Pending Request" buttontext="Pending Request" />
            </div>
            <br /><br />
            <div className="row">
                <LandingPageCard headername="My Approvals" cardtitle="My Approvals" cardtext="My Approvals" buttontext="My Approvals" />
                <LandingPageCard link = "/newRequests" headername="My Requests" cardtitle="My Requests" cardtext="My Request" buttontext="My Request" />
            </div>
            <br />
            <div className="row">
                <LandingPageCard headername="History" cardtitle="History" cardtext="History" buttontext="History" />
            </div>
            <br/>
        </div>
     )
 }
}

export default LandingPage;