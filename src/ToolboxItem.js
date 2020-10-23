import React, { Component } from "react";

export class ToolboxItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}:{this.props.value}</p>
      </div>
    );
  }
}
