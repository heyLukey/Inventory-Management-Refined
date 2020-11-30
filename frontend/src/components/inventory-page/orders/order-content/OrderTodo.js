import React from "react";

import "./OrderTodo.css";

const OrderTodo = ({ orderObject, todoTarget }) => {
  return (
    <React.Fragment>
      {orderObject.todo[todoTarget] === undefined ? null : (
        <div className="order-todo">
          <label className="order-todo-label">
            {todoTarget.charAt(0).toUpperCase() + todoTarget.slice(1) + ":"}
          </label>
          {orderObject.todo[todoTarget] === "true" ? (
            <i className="fas fa-check"></i>
          ) : (
            <i className="fas fa-times"></i>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default OrderTodo;
