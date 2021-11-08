import React,{ Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {

    increment = () => {
        //console.log(this);
        this.props.dispatch({type: 'INCREMENT'})
    }

    decrement = () => {
        this.props.dispatch({type: 'DECREMENT'})
    }

    render(){
        return (
            <div>
                <h2>Counter</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter)
