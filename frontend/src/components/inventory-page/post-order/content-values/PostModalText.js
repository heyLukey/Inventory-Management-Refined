import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import "./PostModalText.css";

const PostModalText = ({ target, value, setValue }) => {
  const inputText = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="post-order-text">
        <label className="post-text-label">
          {target === "price"
            ? target.charAt(0).toUpperCase() + target.slice(1) + " (£):"
            : target.charAt(0).toUpperCase() + target.slice(1) + ":"}
        </label>
        <TextareaAutosize
          className="post-text-input"
          type="text"
          placeholder={target}
          minRows={1}
          maxRows={3}
          onChange={inputText}
        />
      </div>
    </React.Fragment>
  );
};

export default PostModalText;
