import React from 'react';
import {connect} from 'react-redux';

class AccountInfo extends React.Component {
    render() {
        return <h1>Welcome {this.props.username}</h1>;
    }
}
module.exports = connect(function(state){
    return {username: state.username};
})(AccountInfo);
