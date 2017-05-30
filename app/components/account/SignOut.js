import React from 'react';
import {connect} from 'react-redux';
class SignOut extends React.Component {
    handleSignOut() {
        var {dispatch} = this.props;
        dispatch({type: "LOG_OUT"});
    }
    render() {
        return <button onClick={this.handleSignOut.bind(this)}>Sign out</button>
    }
}
module.exports = connect()(SignOut);
