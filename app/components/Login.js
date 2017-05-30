import React from 'react';

class Login extends React.Component {
    login() {
        alert(this.refs.username.value);
    }
    render() {
        return (
            <form onSubmit={e=>e.preventDefault()}>
                <input type="text" ref="username"/>
                <input type="password" ref="password"/>
                <button onClick={this.login.bind(this)}>Sign In</button>
            </form>
        );
    }
}
module.exports = Login;
