import React from "react";
import "./App.css";
import { ToolboxItemService } from "./ToolboxItemService";
import { ToolboxItemContainer } from "./ToolboxItemContainer";

class App extends React.Component {
  itemService = new ToolboxItemService();

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Awe!</h1>
          <h2>Available tools:</h2>
          <ToolboxItemContainer toolboxItems={this.itemService.getItems()}></ToolboxItemContainer>
        </header>
      </div>
    );
  }
}

export default App;
