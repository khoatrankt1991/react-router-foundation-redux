import React from 'react';

class MyButton extends React.Component {
    handleClick() {
        var {data , onClickMe} = this.props;
        onClickMe(data);
    }
    render() {
        return <button onClick={this.handleClick.bind(this)} className={this.props.css}>{this.props.children}</button>
    }
}
module.exports = MyButton;
