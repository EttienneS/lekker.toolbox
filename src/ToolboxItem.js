import React, { Component } from "react";

export class ToolboxItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
        <a className="App-link" href={this.props.url}>Download</a>
      </div>
    );
  }
}

export default ToolboxItem;
