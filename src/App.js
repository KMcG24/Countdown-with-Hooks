import React, { Component } from "react";
import Toggle from "./components/Toggle";
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Toggle />
          <Timer />
        </div>
      </>
    );
  }
}

export default App;
