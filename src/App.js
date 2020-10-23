import React from "react";
import "./App.css";
import { ToolboxItem } from "./ToolboxItem";
import { ToolboxItemService } from "./ToolboxItemService";

class App extends React.Component {
  itemService = new ToolboxItemService();

  render() {
    var items = this.itemService.getItems();

    return (
      <div className="App">
        <header className="App-header">
          <h1>Awe!</h1>
          {items.map((i) => (
            <ToolboxItem
              key={i.name}
              name={i.name}
              value={i.value}
            ></ToolboxItem>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
