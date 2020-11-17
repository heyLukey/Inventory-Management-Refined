// Npm libraries
import React, { useState } from "react";
import DueCheck from "./DueCheck";
import OrderContent from "./OrderContent";

// CSS
import "./OrderDiv.css";

// Induvidual order div [protected]
const OrderDiv = ({ orderObject, reRender, setReRender }) => {
  // States
  const [open, setOpen] = useState(false);

  const clickOpen = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <div className="accordion-div">
        <div className="accordion-top">
          <button className="accordion-text" onClick={clickOpen}>
            <div className="accordion-title">{orderObject.title}</div>
            <DueCheck deadline={orderObject.deadline} />
          </button>
          <button onClick={clickOpen}>
            {open ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        {open ? <OrderContent orderObject={orderObject} /> : null}
      </div>
    </React.Fragment>
  );
};

export default OrderDiv;
