import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Nav from 'Nav';
import Home from 'Home';
import Page1 from 'Page1';
import Login from 'Login';
import Account from 'account/Account';
import store from 'store';
import axios from 'axios';
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
     store.getState().username!=null? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/account',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class Main extends React.Component {
    componentDidMount() {
      var {dispatch} = this.props;
      axios.get("/getInfo").then(res=>res.data!="SESSION_OUT"?dispatch({type: "LOG_IN", username: res.data}):f=>f).catch(e=>console.log(e))
    }
    render() {
        return (
                  <Router>
                    <div>
                      <div className="top-bar">
                        <div className="top-bar-left">
                          <ul className="dropdown menu" data-dropdown-menu>
                            <li className="menu-text">Site Title</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/account">Account</Link></li>
                            <li><Link to="/page1">Page1</Link></li>
                            <li>
                              <a href="#">One</a>
                              <ul class="menu vertical">
                                <li><a href="#">One</a></li>
                                <li><a href="#">Two</a></li>
                                <li><a href="#">Three</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div className="top-bar-right">
                          <ul className="menu">
                            <li><input type="search" placeholder="Search"/></li>
                            <li><button type="button" className="button">Search</button></li>
                          </ul>
                        </div>
                      </div>

                      <div className="row demo-toggle-title">
                        <div className="columns">
                          <Route exact path="/" component={Home}/>
                          <PrivateRoute path="/page1" component={Page1}/>
                          <Route path="/account" component={Account}/>
                        </div>
                      </div>
                    </div>
                  </Router>
                );
    }
}
module.exports = connect()(Main);
