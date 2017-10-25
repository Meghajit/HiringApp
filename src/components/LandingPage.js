import React from "react"
import LandingPageCard from "./LandingPageCard";
import axios from 'axios';

class LandingPage extends React.Component {
    constructor() {
        super();
        this.handlePendingApprovals = this.handlePendingApprovals.bind(this);
        this.navNewRequest = this.navNewRequest.bind(this)
        this.state = {
            pa: []
        };

    }

    handlePendingApprovals(e) {
        const self = this;
        axios.get('http://localhost:5000/api/pending', {
            params: {
                userID: 'b64bfe4d-9886-4282-9eea-dc2f2ad5d9b5'
            }
        })
            .then(function (response) {

                console.log(response.data.info);

                if (response.data.responseCode == "1") {
                    const pa = { ...self.state.pa }
                    self.setState({ pa: response.data.info });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    /* new request navigation */
    navNewRequest(){
        this.props.history.push("/newRequest")
    }

 render(){
     return (
        <div className="container">
            <div className="row">
                <LandingPageCard func = {this.handlePendingApprovals} headername="Pending Approvals" cardtitle="Pending Approvals" cardtext="Pending Approvals" buttontext="Pending Approvals" />
                <LandingPageCard 
                    headername="Pending Requests" cardtitle="Pending Requests" 
                        cardtext="Pending Request" buttontext="Pending Request"/>
            </div>
            <br /><br />
            <div className="row">
                <LandingPageCard headername="My Approvals" cardtitle="My Approvals" cardtext="My Approvals" buttontext="My Approvals" />
                <LandingPageCard headername="My Requests" cardtitle="My Requests" 
                    cardtext="My Request" buttontext="My Request" navNewRequest={this.navNewRequest} />
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