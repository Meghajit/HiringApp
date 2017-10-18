import React from "react"
import LandingPageCard from "./LandingPageCard";

class LandingPage extends React.Component {
    constructor(props) {
   super(props);
  
 }

 render(){
     return (
        <div class="container">
            <br /><br />
            <div class="row">
                <LandingPageCard headername="Pending Approvals" cardtitle="Pending Approvals" cardtext="Pending Approvals" buttontext="Pending Approvals" />
                <LandingPageCard headername="Pending Requests" cardtitle="Pending Requests" cardtext="Pending Request" buttontext="Pending Request" />
            </div>
            <br /><br />
            <div class="row">
                <LandingPageCard headername="My Approvals" cardtitle="My Approvals" cardtext="My Approvals" buttontext="My Approvals" />
                <LandingPageCard headername="My Requests" cardtitle="My Requests" cardtext="My Request" buttontext="My Request" />
            </div>
            <br /><br />
            <div class="row">
                <LandingPageCard headername="History" cardtitle="History" cardtext="History" buttontext="History" />
            </div>
        </div>
     )
 }
}

export default LandingPage;