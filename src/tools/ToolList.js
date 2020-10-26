import React from "react";
import AddToolForm from "./AddToolForm";
import ToolItem from "./ToolItem";

import { connect } from "react-redux";
import { toggleFavouriteTool } from "./actions";

const ToolList = ({ tools, onFavouritePressed }) => {
  return (
    <div>
      <div className="new-item-container">
        <AddToolForm></AddToolForm>
      </div>

      <div className="existing-item-container">
        {tools.map((tool) => (
          <ToolItem key={tool.id} tool={tool} onFavouritePressed={onFavouritePressed}></ToolItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tools: state.tools,
});

const mapDispatchToProps = (dispatch) => ({
  onFavouritePressed: (name) => dispatch(toggleFavouriteTool(name)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ToolList);
