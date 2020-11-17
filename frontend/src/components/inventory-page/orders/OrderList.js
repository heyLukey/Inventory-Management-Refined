// Npm libraries
import React from "react";
import OrderDiv from "./OrderDiv";

// CSS
import "./OrderList.css";

// List of orders [protected]
const OrderList = ({ displayOrders, reRender, setReRender }) => {
  return (
    <React.Fragment>
      <div className="order-container">
        <ul className="order-list">
          {displayOrders.map((orderObject) => (
            <OrderDiv
              key={orderObject._id}
              orderObject={orderObject}
              reRender={reRender}
              setReRender={setReRender}
            />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default OrderList;
