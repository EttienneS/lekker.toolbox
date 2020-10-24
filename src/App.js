import React from "react";
import "./App.css";
import ToolList  from "./tools/ToolList";

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Awe!</h1>
          <h2>Available tools:</h2>
          <ToolList></ToolList>
        </header>
      </div>
    );
  }
}

export default App;
