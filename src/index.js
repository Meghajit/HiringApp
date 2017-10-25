import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import LandingPage from './components/LandingPage';
import Navibar from './components/Navibar';
import LandingPageCard from './components/LandingPageCard';
import PendingApprovals from './components/PendingApprovals';
import registerServiceWorker from './registerServiceWorker';
import Main from './components/Main'
import MySidebar from './components/MySidebar';

import {BrowserRouter, 
    Route} from "react-router-dom"
    
import LoginAuth from "./components/LoginAuth"

const Root = ()=>{
return(
    <BrowserRouter>
    <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/login" component={LoginAuth}/>
    </div>
    </BrowserRouter>
)
}

render(<MySidebar />, document.querySelector('#root'))