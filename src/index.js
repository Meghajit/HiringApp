import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import LandingPage from './components/LandingPage';
import Navibar from './components/Navibar';
import PendingApprovals from './components/PendingApprovals';
import registerServiceWorker from './registerServiceWorker';
import Main from './components/Main'
import NewRequest from "./components/NewRequest"

import {BrowserRouter, 
    Route, Switch} from "react-router-dom"
    
import Login from "./components/Login"

const Root = ()=>{
return(
    <BrowserRouter>
    <div>
        <Route component={Navibar}/>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={LandingPage}/>
            <Route path="/newRequest" component={NewRequest}/>
            <Route component={render => <p>Not Found</p> } />
        </Switch>
    </div>
    </BrowserRouter>
)
}

render(<Root />, document.querySelector('#root'))