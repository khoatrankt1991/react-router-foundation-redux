import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Main from 'Main';
import Nav from 'Nav';
import Home from 'Home';
import Page1 from 'Page1';

ReactDOM.render(
<Router>
    <div>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">Page1</Link></li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/page1" component={Page1}/>
    </div>
</Router>
, document.getElementById("root"));