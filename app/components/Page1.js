import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Grid from '../lib/grid/Grid.js';
import MyButton from '../lib/grid/MyButton.js';
import MyDatePicker from '../lib/grid/MyDatePicker.js';
class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: ["Id", "Brand", "Type", "Created", "Action"],
            cols: [
                { id: "id", css: "small-4 large-2 columns", action: null},
                { id: "brand", css: "small-4 large-2 columns", action: null},
                { id: "type", css: "small-4 large-2 columns", action: null},
                { id: "type", css: "small-4 large-2 columns", action: null},
                { id: "created", css: "small-4 large-2 columns", action: (e)=>{
                    return <MyDatePicker/>
                }},
                { id: "remove", css: "small-4 large-2 columns", action: (e)=>{
                    return <MyButton data={e} css="button expanded alert" onClickMe={this.remove.bind(this)}>Remove</MyButton>
                }}
            ]
            //source: []
        };
    }
    remove(data) {
        var {dispatch} = this.props;
        dispatch({type: "REMOVE_ITEM", id: data.id});
    }
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
         return (<Grid cols={this.state.cols} source={this.props.listproduct}/>);
    }
}
module.exports = connect(function(state){
    return {listproduct: state.listproduct}
})(Page1);
