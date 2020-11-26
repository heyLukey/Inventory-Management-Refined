import React from "react";

import "./OrderContent.css";
import OrderText from "./OrderText";
import OrderTodo from "./OrderTodo";

const OrderContent = ({ orderObject, reRender, setReRender }) => {
  return (
    <React.Fragment>
      <div className="order-content">
        <OrderText orderObject={orderObject} textTarget="customer" />
        <OrderText orderObject={orderObject} textTarget="description" />
        <OrderText orderObject={orderObject} textTarget="quantity" />
        <OrderText orderObject={orderObject} textTarget="price" />
        <div className="order-content-todo">
          <OrderTodo orderObject={orderObject} todoTarget="polishing" />
          <OrderTodo orderObject={orderObject} todoTarget="sizing" />
          <OrderTodo orderObject={orderObject} todoTarget="lazer" />
          <OrderTodo orderObject={orderObject} todoTarget="engraving" />
          <OrderTodo orderObject={orderObject} todoTarget="plating" />
          <OrderTodo orderObject={orderObject} todoTarget="rhodium" />
          <OrderTodo orderObject={orderObject} todoTarget="cleaning" />
        </div>
        <OrderText orderObject={orderObject} textTarget="notes" />
        <OrderText orderObject={orderObject} textTarget="deadline" />
        <OrderText orderObject={orderObject} textTarget="created" />
      </div>
    </React.Fragment>
  );
};

export default OrderContent;
