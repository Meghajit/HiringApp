import React from "react"
import LandingPageCard from "./LandingPageCard";
import axios from 'axios';
import Navibar from './Navibar';


class LandingPage extends React.Component {
    constructor(props) {
   super(props);
   this.handlePendingApprovals=this.handlePendingApprovals.bind(this);
   this.state = {
    pa:[]
  };
  
 }

    handlePendingApprovals(e)
    {
        const self = this;
        axios.get('http://localhost:5000/api/pending', {
            params: {
              userID:'b64bfe4d-9886-4282-9eea-dc2f2ad5d9b5'
            }
          })
          .then(function (response) {

            console.log(response.data.info);
            
            if(response.data.responseCode=="1")
            {
                const pa = {...self.state.pa}
                self.setState({pa: response.data.info});


            }

            
          })
          .catch(function (error) {
            console.log(error);
          });
    }


 render(){
     return (
        <div class="container">
            <Navibar />
            <div class="row">
                <LandingPageCard func = {this.handlePendingApprovals} headername="Pending Approvals" cardtitle="Pending Approvals" cardtext="Pending Approvals" buttontext="Pending Approvals" />
                <LandingPageCard headername="Pending Requests" cardtitle="Pending Requests" cardtext="Pending Request" buttontext="Pending Request" />
            </div>
            <br /><br />
            <div class="row">
                <LandingPageCard headername="My Approvals" cardtitle="My Approvals" cardtext="My Approvals" buttontext="My Approvals" />
                <LandingPageCard headername="My Requests" cardtitle="My Requests" cardtext="My Request" buttontext="My Request" />
            </div>
            <br />
            <div class="row">
                <LandingPageCard headername="History" cardtitle="History" cardtext="History" buttontext="History" />
            </div>
            <br/>
        </div>
     )
 }
}

export default LandingPage;