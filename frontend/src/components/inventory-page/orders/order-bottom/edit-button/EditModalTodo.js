import React from "react";

import "./EditModalTodo.css";

const EditModalTodo = ({ target, value, setValue }) => {
  const toggleTodo = () => {
    setValue(!value);
  };

  return (
    <React.Fragment>
      <div className="edit-order-todo">
        <label className="edit-todo-label">
          {target.charAt(0).toUpperCase() + target.slice(1) + ":"}
        </label>
        {/* {orderObject.todo[editTarget] ? } */}
        {value ? (
          <button onClick={toggleTodo} className="edit-todo-toggle">
            <i className="fas fa-check"></i>
          </button>
        ) : (
          <button onClick={toggleTodo} className="edit-todo-toggle">
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default EditModalTodo;
