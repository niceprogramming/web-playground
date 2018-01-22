import * as React from "react";
import { Component } from "react";

import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <p className="hello">test</p>
      </div>
    );
  }
}

export default App;
