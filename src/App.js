import React from "react";
import "./App.css";
import { ToolService } from "./ToolService";
import { ToolList } from "./ToolList";

class App extends React.Component {
  itemService = new ToolService();

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Awe!</h1>
          <h2>Available tools:</h2>
          <ToolList toolboxItems={this.itemService.getItems()}></ToolList>
        </header>
      </div>
    );
  }
}

export default App;
