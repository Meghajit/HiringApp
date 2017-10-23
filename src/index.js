import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import LandingPage from './components/LandingPage';
import Navibar from './components/Navibar';
import LandingPageCard from './components/LandingPageCard';
import registerServiceWorker from './registerServiceWorker';


render(<LandingPage />, document.querySelector('#root'));
//render(<Navibar />, document.getElementById('root'));
registerServiceWorker();
