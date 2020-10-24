import React from "react";
import AddToolForm from "./AddToolForm";
import ToolItem from "./ToolItem";

import { connect } from "react-redux";

const ToolList = ({ tools }) => {
  return (
    <div>
      <div className="new-item-container">
        <AddToolForm></AddToolForm>
      </div>

      <div className="existing-item-container">
        {tools.map((tool) => (
          <ToolItem key={tool.id} tool={tool}></ToolItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tools: state.tools,
});

export default connect(mapStateToProps)(ToolList);
