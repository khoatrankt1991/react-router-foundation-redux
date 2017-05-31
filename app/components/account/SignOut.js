import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class SignOut extends React.Component {
    handleSignOut() {
        var {dispatch} = this.props;
        axios.get("/signOut").then(res=>dispatch({type: "LOG_OUT"})).catch(e=>console.log(e))
    }
    render() {
        return <button className="expanded button" onClick={this.handleSignOut.bind(this)}>Sign out</button>
    }
}
module.exports = connect()(SignOut);
