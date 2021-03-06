import React from 'react';
import {connect} from 'react-redux';
import SignIn from 'account/SignIn';
import AccountInfo from 'account/AccountInfo';
import SignOut from 'account/SignOut';

class Account extends React.Component {
    render() {
        var {username} = this.props;
        return username === null?<SignIn/>:(
            <div><AccountInfo/>
            <SignOut/></div>
        );
    }
}
module.exports = connect(function(state){
    return { username : state.username};
})(Account);
