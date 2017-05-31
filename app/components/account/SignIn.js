import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class SignIn extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        axios.post("/signIn", {
            username: this.refs.username.value,
            password: this.refs.password.value
        }).then(res=>{
            var {dispatch} = this.props;
            res.data!="LOGIN_FAIL"?dispatch({type: "LOG_IN", username: res.data}):alert(res.data);
        }).catch(e=>console.log("SignIn : " + e));
    }
    render() {
        return (<form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="username"/>
                    <input type="text" ref="password"/>
                    <button type="submit" className="success button">Sign In</button>
                </form>);
    }
}
module.exports = connect()(SignIn);

