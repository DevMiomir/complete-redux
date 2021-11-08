import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Increment, Decrement } from './Action';
import store from './Store';

class Counter extends Component {
  increment = () => {
    //console.log(this);
    this.props.dispatch(Increment(1));
  };

  decrement = () => {
    this.props.dispatch(Decrement(1));
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={this.decrement}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);
