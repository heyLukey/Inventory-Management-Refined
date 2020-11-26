import React from "react";

import "./OrderTodo.css";

const OrderTodo = ({ orderObject, todoTarget }) => {
  return (
    <React.Fragment>
      <div className="order-todo">
        <label className="order-todo-label">
          {todoTarget.charAt(0).toUpperCase() + todoTarget.slice(1) + ":"}
        </label>
        {orderObject.todo[todoTarget] ? (
          <i className="fas fa-check"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </div>
    </React.Fragment>
  );
};

export default OrderTodo;
