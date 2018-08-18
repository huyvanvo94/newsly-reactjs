/// routes.js
/// https://medium.com/@thejasonfile/basic-intro-to-react-router-v4-a08ae1ba5c42

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';

//  I have the <Router> component with a child div since that component can only have one child.
const routes = (
    <Router>

        <div>
            <Route exact path="/" component={Home} />
        </div>
    </Router>
);

export default routes;