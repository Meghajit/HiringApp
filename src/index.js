import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import LandingPage from './components/LandingPage';
import Navibar from './components/Navibar';
import PendingApprovals from './components/PendingApprovals';
import registerServiceWorker from './registerServiceWorker';
import Main from './components/Main'

import {BrowserRouter, 
    Route, Switch} from "react-router-dom"
 import NewRequest from './components/NewRequest';   
import Login from "./components/Login"

const Root = ()=>{
return(
    <BrowserRouter>
    <div>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={LandingPage}/>
            <Route path="/pendingApprovals" component={PendingApprovals} />
            <Route path = "/newRequests" component={NewRequest} />
            <Route component={render => <p>Not Found</p> } />
        </Switch>
    </div>
    </BrowserRouter>
)
}

render(<Root />, document.querySelector('#root'))