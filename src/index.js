import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './routes';

ReactDOM.render(
    routes,
    document.getElementById('root')
);

registerServiceWorker();
