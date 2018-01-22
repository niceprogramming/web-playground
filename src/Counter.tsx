import * as React from "react";
import { Component } from "react";
import "./Counter.css";

interface ICounterState {
  count: number;
}
class Counter extends React.Component<{}, ICounterState> {
  public state: ICounterState = {
    count: 5
  };
    

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    
    return <h1 onClick={this.incrementCount}>Clicks: {this.state.count}</h1>;
  }
}

export default Counter;
