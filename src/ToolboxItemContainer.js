import React, { Component } from "react";
import {ToolboxItem} from "./ToolboxItem"

export class ToolboxItemContainer extends Component {
  render() {
    
    return (
      <div>
        {this.props.toolboxItems.map((i) => (
          <ToolboxItem
            key={i.id}
            name={i.name}
            description={i.description}
            url={i.link}
          ></ToolboxItem>
        ))}
      </div>
    );
  }
}
