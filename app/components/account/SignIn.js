import React from 'react';
<<<<<<< HEAD
import {connect} from 'react-redux';
class SignIn extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        this.refs.username.value == "khoatran"?dispatch({type: "LOG_IN", username: this.refs.username.value}):f=>f
    }
    render() {
        return (<form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="username"/>
                    <input type="text" ref="password"/>
                    <button type="submit">Sign In</button>
                </form>);
    }
}
module.exports = connect()(SignIn);
=======

class SignIn extends React.Component {
    
    handleSubmit(e) {
        e.preventDefault();
        alert(this.refs.username);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="username"/>
                <input type="password" ref="password"/>
                <button type="submit">Sign In</button>
            </form>
        );
    }
}
module.exports = SignIn;
>>>>>>> try to change
