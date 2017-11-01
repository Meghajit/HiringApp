import React from "react"
import LandingPageCard from "./LandingPageCard";
//=======Newly ADDED for Session Management
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loadLoginstatusFromCookie} from './../Actions.jsx'
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
                        loginstatus:"",
                        loginData:{name:"",email:"",job_role:""}
                    }
}

 //Before the component is loaded
 componentWillMount() 
 {    
     const loadLoginstatus = this.props.loadLoginstatus;
     this.state.loginData=this.props.loginData;
     alert(this.props.loginData.email);
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
            <div class="row">
                    <div className="jumbotron" style={(this.props.loginstatus!=="Authenticated")?{display:"none"}:{display:""}}>
                    <h3>LoginStatus : {this.props.loginstatus}</h3>
                    <h3>Name : {this.props.loginData.name}</h3>
                    <h3>E-mail : {this.props.loginData.email}</h3>
                    <h3>Job Role : {this.props.loginData.job_role}</h3>
            </div>
            </div>
            <br /><br />
            <div class="row">
                <LandingPageCard  link = "/pendingApprovals"  headername="Pending Approvals" cardtitle="Pending Approvals" cardtext="Pending Approvals" buttontext="Pending Approvals" />
                <LandingPageCard link = "/pendingRequest" headername="Pending Requests" cardtitle="Pending Requests" cardtext="Pending Request" buttontext="Pending Request" />
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