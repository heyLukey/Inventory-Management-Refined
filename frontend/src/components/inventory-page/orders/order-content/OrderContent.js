import React from "react";

import "./OrderContent.css";

const OrderContent = ({ orderObject, reRender, setReRender }) => {
  return (
    <React.Fragment>
      <div className="order-content">
        <label>Polishing</label>
        <div>{orderObject.todo.polishing.toString()}</div>
        <label>Sizing</label>
        <div>{orderObject.todo.sizing.toString()}</div>
        <label>Lazer</label>
        <div>{orderObject.todo.lazer.toString()}</div>
        <label>Engraving</label>
        <div>{orderObject.todo.engraving.toString()}</div>
        <label>Plating</label>
        <div>{orderObject.todo.plating.toString()}</div>
        <label>Rhodium</label>
        <div>{orderObject.todo.rhodium.toString()}</div>
        <label>Cleaning</label>
        <div>{orderObject.todo.cleaning.toString()}</div>
        {/* <label>Customer</label>
          <div>{orderObject.customer}</div>
          <label>Description</label>
          <div>{orderObject.description}</div>
          <label>Quantity</label>
          <div>{orderObject.quantity}</div>
          <label>Price</label>
          <div>{orderObject.price}</div>
          <label>Deadline</label>
          <div>{orderObject.deadline}</div>
          <label>Created</label>
          <div>{orderObject.created}</div>
          <label>Notes</label>
          <div>{orderObject.notes ? orderObject.notes : "N/A"}</div> */}
      </div>
    </React.Fragment>
  );
};

export default OrderContent;
