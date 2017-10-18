import React from "react"
import LandingPageCard from "./LandingPageCard";

class LandingPage extends React.Component {
    constructor(props) {
   super(props);
  
 }

 render(){
    return(
        <div>
            <div class="container">
                <br/><br/>
                <div class="row">
                    <div class="col-xs-6">
                        <LandingPageCard headername="Pending Approvals" cardtitle="Pending Approvals" cardtext="Pending Approvals" buttontext="Pending Approvals"/>
                    </div>

                    <div class="col-xs-6">
                        <LandingPageCard headername="Pending Requests" cardtitle="Pending Requests" cardtext="Pending Request" buttontext="Pending Request"/>
                    </div>

                </div>

                <br/><br/>
                <div class="row">
                    <div class="col-xs-6">
                        <LandingPageCard headername="My Approvals" cardtitle="My Approvals" cardtext="My Approvals" buttontext="My Approvals"/>
                    </div>

                    <div class="col-xs-6">
                        <LandingPageCard headername="My Requests" cardtitle="My Requests" cardtext="My Request" buttontext="My Request"/>
                    </div>

                </div>


                <br/><br/>
                <div class="row">
                    <div class="col-xs-offset-5">
                        <LandingPageCard headername="My Approvals" cardtitle="My Approvals" cardtext="My Approvals" buttontext="My Approvals"/>
                    </div>

                </div>




            </div>
        </div>

    )
}
}

export default LandingPage;