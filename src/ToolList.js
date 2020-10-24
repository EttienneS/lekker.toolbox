import React, { Component } from "react";
import AddToolForm from "./AddToolForm";
import ToolItem from "./ToolItem";

export class ToolList extends Component {
  render() {
    return (
      <div>
        <div className="new-item-container">
          <AddToolForm></AddToolForm>
        </div>

        <div className="existing-item-container">
          {this.props.toolboxItems.map((tool) => (
            <ToolItem key={tool.id} tool={tool}></ToolItem>
          ))}
        </div>
      </div>
    );
  }
}

export default ToolList;
