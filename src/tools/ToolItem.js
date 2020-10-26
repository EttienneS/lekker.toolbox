import React from "react";

const ToolItem = ({ tool, onFavouritePressed }) => (
  <div>
    <h3>
      {tool.name}
      <button className="favourite-button" onClick={() => onFavouritePressed(tool.name)}>
        {tool.favourite === false ? "Favourite!" : "Unfavourite"}
      </button>
    </h3>
    <p>{tool.description}</p>
    <a className="App-link" href={tool.link}>
      Download
    </a>
    <p></p>
  </div>
);

export default ToolItem;
