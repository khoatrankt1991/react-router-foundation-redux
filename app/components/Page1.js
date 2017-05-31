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
                (<div className="row" key={i}>
                    <div className="small-4 large-2 columns">{e.id}</div>
                    <div className="small-4 large-2 columns">{e.brand}</div>
                    <div className="small-4 large-2 columns">{e.type}</div>
                    <div className="small-4 large-2 columns">{e.type}</div>
                    <div className="small-4 large-2 columns">{e.created}</div>
                    <div className="small-4 large-2 columns"><button>Remove</button></div>
                </div>)
            )}
            </div>);
    }
}
module.exports = connect(function(state){
    return {listproduct: state.listproduct}
})(Page1);
