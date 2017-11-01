import React from "react"
import LandingPageCard from "./LandingPageCard";
import axios from 'axios';
import Navibar from "./Navibar"

//=======Newly ADDED for Session Management
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loadLoginstatusFromCookie} from './../Actions.jsx'
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
                        loginstatus:"",
                        loginData:{email:"",account_01_id:"",account_01_oneup_manager_id:""}
                    }
}

 //Before the component is loaded
 componentWillMount() 
 {    
     const loadLoginstatus = this.props.loadLoginstatus;
    loadLoginstatus(); };

handleLoginError() 
{    
    this.props.history.push("/login") };
// After the component is loaded

componentWillMount() 
{  
    if (this.props.loginstatus!=="Authenticated")
        this.handleLoginError();  }



 render(){
     return (
        <div class="container">
            <div class="row" style={(this.props.loginstatus!=="Authenticated")?{display:"none"}:{display:""}}>
    
                    <p>LoginStatus : {this.props.loginstatus}</p>
                    <p>Email: {this.props.loginData.email}</p>
                    <p>account_01_id : {this.props.loginData.account_01_id}</p>
                    <p>account_01_oneup_manager_id : {this.props.loginData.account_01_oneup_manager_id}</p>
                  
            </div>
            <br />
            <div class="row">
                <LandingPageCard  link = "/pendingApprovals"  headername="Pending Approvals" cardtitle="Pending Approvals" cardtext="Pending Approvals" buttontext="Pending Approvals" />
                <LandingPageCard link = "/pendingRequest" headername="Pending Requests" cardtitle="Pending Requests" cardtext="Pending Request" buttontext="Pending Request" />
            </div>
            <br />
            
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

const mapStateToProps = function(state) {
    return {
      loginstatus: state.loginstatus,
      loginData:state.loginData,
      requestData:state.requestData
    }
}
const mapDispatchToProps = function(dispatch) {
    return {loadLoginstatus: () => dispatch(loadLoginstatusFromCookie())  } }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));