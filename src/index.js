import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import LandingPage from './components/LandingPage';
import Navibar from './components/Navibar';
import PendingApprovals from './components/PendingApprovals';
import PendingRequest from './components/PendingRequest';
import registerServiceWorker from './registerServiceWorker';
import Main from './components/Main'

import {BrowserRouter, 
Route, Switch} from "react-router-dom"
 import NewRequest from './components/NewRequest';   
import Login from "./components/Login"
//========Redux=============
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducer from './Reducer.jsx';
//creating a redux store
const store = createStore(reducer,applyMiddleware(reduxThunk));
//============================


const Root = ()=>{
return(
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <Route component={Navibar}/>
            <Switch>
                <Route exact path ="/" component={Login} />
                <Route exact path="/main" component={Login}/>
                <Route path="/login" component={Login}/>
                <Route path="/dashboard" component={LandingPage}/>
                <Route path="/pendingApprovals" component={PendingApprovals} />
                <Route path="/pendingRequest" component={PendingRequest} />
                <Route path = "/newRequests" component={NewRequest} />

                <Route component={render => <p>Not Found</p> } />
            </Switch>
        </div>
        </BrowserRouter>
    </Provider>
)
}

render(<Root />, document.querySelector('#app'))