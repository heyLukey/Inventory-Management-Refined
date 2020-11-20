// Npm libraries
import React, { useState, useEffect, useRef } from "react";
import OrderDiv from "./OrderDiv";
import NoOrders from "./NoOrders";

// CSS
import "./OrderList.css";

// List of orders [protected]
const OrderList = ({ displayOrders, reRender, setReRender }) => {
  const [ordersExist, setOrdersExist] = useState(true);

  // Dont display NoOrders on first render
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (displayOrders === undefined || displayOrders.length === 0)
        setOrdersExist(false);
      else setOrdersExist(true);
    }
  }, [displayOrders]);

  return (
    <React.Fragment>
      {ordersExist ? (
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
      ) : (
        <NoOrders />
      )}
    </React.Fragment>
  );
};

export default OrderList;
