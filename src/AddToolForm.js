import React, { useState } from "react";

const AddToolForm = () => {
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
      <button className="add-tool-button" type="text">
        Add Tool
      </button>
    </div>
  );
};

export default AddToolForm;
