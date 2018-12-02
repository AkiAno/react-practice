import React from 'react';
import './counter.css';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }
  
  changeValue(amount) {
    let newValue = this.state.value + amount;
    this.setState({
      value: newValue
    });
  }

  render() {
    return (
      <div className="counter">
        {this.state.value}
      </div>
    );
  }
}