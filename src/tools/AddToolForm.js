import React, { useState } from "react";
import { connect } from "react-redux";
import { createTool } from "./actions";

const AddToolForm = ({ tools, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="add-tool-form">
      <input
        className="add-tool-input"
        type="text"
        value={inputValue}
        placeholder="New tool name here"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDupe = tools.some((tool) => tool.name === inputValue);

          if (!isDupe) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="add-tool-button"
        type="text"
      >
        Add Tool
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tools: state.tools,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTool(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToolForm);
