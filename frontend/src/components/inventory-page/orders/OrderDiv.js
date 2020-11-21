// Npm libraries
import React, { useState } from "react";
import OrderTop from "./order-top/OrderTop";
import OrderContent from "./order-content/OrderContent";

// CSS
import "./OrderDiv.css";
import OrderBottom from "./order-bottom/OrderBottom";

// Induvidual order div [protected]
const OrderDiv = ({ reRender, setReRender, orderObject }) => {
  // States
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="order-div">
        <OrderTop open={open} setOpen={setOpen} orderObject={orderObject} />
        {open ? (
          <div className="order-open">
            <OrderContent orderObject={orderObject} />
            <OrderBottom
              reRender={reRender}
              setReRender={setReRender}
              orderObject={orderObject}
            />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default OrderDiv;
