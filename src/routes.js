/// routes.js
/// https://medium.com/@thejasonfile/basic-intro-to-react-router-v4-a08ae1ba5c42

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Title from './Title';
import Tab from './tabs/Tab';
import Tabs from './tabs/Tabs';
import HeadlineBlock from './HeadlineBlock';
import Home from './Home';
import SearchResult from "./SearchResult";

//  I have the <Router> component with a child div since that component can only have one child.
const routes = (
    <Router>

        <div>
            <Route path="*" component={Home} />

            <Route exact path="/" component={HeadlineBlock}/>
            <Route path="/search" component={SearchResult}/>
        </div>
    </Router>
);

export default routes;