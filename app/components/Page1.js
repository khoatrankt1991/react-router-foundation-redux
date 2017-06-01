import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Grid from '../lib/grid/Grid.js';

class Page1 extends React.Component {
    componentDidMount() {
        axios.get("/page1").then(res=>{
            console.log(res.data);
            var {dispatch} = this.props;
            dispatch({type: "LIST_PRODUCT", listproduct: res.data});
        }).catch(e=>console.log(e))
    }
    render() {
        // console.log("PAGE 1 RENDER1");
         if(this.props.listproduct.length == 0) return <div>Loading....</div>;
         return (<Grid source={this.props.listproduct}/>);
    }
}
module.exports = connect(function(state){
    return {listproduct: state.listproduct}
})(Page1);
