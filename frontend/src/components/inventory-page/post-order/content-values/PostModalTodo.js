import React from "react";

import "./PostModalTodo.css";

const PostModalTodo = ({ target, value, setValue }) => {
  const setFalse = () => {
    setValue("false");
  };

  const setUndefined = () => {
    setValue(undefined);
  };

  return (
    <React.Fragment>
      <div className="post-order-todo">
        <label className="post-todo-label">
          {target.charAt(0).toUpperCase() + target.slice(1) + ":"}
        </label>
        {value === undefined ? (
          <button onClick={setFalse} className="post-todo-undefined"></button>
        ) : (
          <button onClick={setUndefined} className="post-todo-false">
            <div className="dot"></div>
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default PostModalTodo;
