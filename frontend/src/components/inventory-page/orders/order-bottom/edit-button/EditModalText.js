import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import "./EditModalText.css";

const EditModalText = ({ target, value, setValue }) => {
  const inputText = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="edit-order-text">
        <label className="edit-text-label">
          {target.charAt(0).toUpperCase() + target.slice(1) + ":"}
        </label>
        <TextareaAutosize
          className="edit-text-input"
          type="text"
          defaultValue={value}
          minRows={1}
          maxRows={3}
          onChange={inputText}
        />
      </div>
    </React.Fragment>
  );
};

export default EditModalText;
