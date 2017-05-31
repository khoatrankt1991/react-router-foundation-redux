import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
class Page1 extends React.Component {
    componentDidMount() {
        axios.get("/page1").then(res=>{
            console.log(res.data);
            var {dispatch} = this.props;
            dispatch({type: "LIST_PRODUCT", listproduct: res.data});
        }).catch(e=>console.log(e))
    }
    render() {
        console.log("PAGE 1 RENDER");
        if(this.props.listproduct.length == 0) return <div>Loading....</div>;
        return (<div>
            {this.props.listproduct.map( (e, i)=> 
                (<ul key={i}>
                    <li>{e.id}</li>
                    <li>{e.brand}</li>
                    <li>{e.type}</li>
                    <li>{e.created}</li>
                </ul>)
            )}
            </div>);
    }
}
module.exports = connect(function(state){
    return {listproduct: state.listproduct}
})(Page1);
