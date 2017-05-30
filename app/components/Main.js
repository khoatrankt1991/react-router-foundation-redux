import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Nav from 'Nav';
import Home from 'Home';
import Page1 from 'Page1';
import Login from 'Login';
<<<<<<< HEAD
import Account from 'account/Account';
=======
import SignIn from 'SignIn';
>>>>>>> try to change

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
<<<<<<< HEAD
        pathname: '/account',
=======
        pathname: '/signIn',
>>>>>>> try to change
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class Main extends React.Component {
    render() {
        return (<Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
<<<<<<< HEAD
                            <li><Link to="/account">Account</Link></li>
=======
                            <li><Link to="/signIn">Login</Link></li>
>>>>>>> try to change
                            <li><Link to="/page1">Page1</Link></li>
                        </ul>
                        <Route exact path="/" component={Home}/>
                        <PrivateRoute path="/page1" component={Page1}/>
<<<<<<< HEAD
                        <Route path="/account" component={Account}/>
=======
                        <Route path="/signIn" component={SignIn}/>
>>>>>>> try to change
                    </div>
                </Router>);
    }
}
module.exports = Main;
