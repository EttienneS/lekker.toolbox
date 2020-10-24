import React from "react";

const ToolItem = ({ tool }) => (
  <div>
    <h3>{tool.name}</h3>
    <p>{tool.description}</p>
    <a className="App-link" href={tool.link}>
      Download
    </a>
  </div>
);

export default ToolItem;
