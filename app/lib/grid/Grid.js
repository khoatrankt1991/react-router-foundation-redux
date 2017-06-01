import React from 'react';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: ["Id", "Brand", "Type", "Created", "Action"],
            cols: [
                { id: "id", css: "small-4 large-2 columns", action: null},
                { id: "brand", css: "small-4 large-2 columns", action: null},
                { id: "type", css: "small-4 large-2 columns", action: null},
                { id: "type", css: "small-4 large-2 columns", action: null},
                { id: "created", css: "small-4 large-2 columns", action: null},
                { id: "remove", css: "small-4 large-2 columns", action: ()=>{
                    return <button className="button expanded alert">Remove</button>
                }}
            ]
            //source: []
        };
    }
    render() {
        if(this.props.source.length == 0) return <div>Loading....</div>;
        return (<div>
            {this.props.source.map( (e, i)=> 
                (<div className="row" key={i}>
                   {this.state.cols.map((e1,i1)=>(<div className={e1.css} key={i+''+i1}>{e1.action==null?e[e1.id]:e1.action()}</div>))}
                </div>)
            )}
            </div>);
    }
}
module.exports = Grid;
