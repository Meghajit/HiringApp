import React from "react";
import Navibar from "./Navibar";
import { Jumbotron,JumbotronProps,Button } from 'react-bootstrap';
class Main extends React.Component {
    
     
    
     render(){
       return (
           <div>
            <Navibar />
            <Jumbotron>
                <h1>HPSE Automation</h1>
                <p>Automation Tool </p>
            </Jumbotron>

        </div>

       );
    }
    }

    export default Main;