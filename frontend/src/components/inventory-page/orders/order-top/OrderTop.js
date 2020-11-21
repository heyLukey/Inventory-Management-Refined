import React from "react";
import DueCheck from "./DueCheck";
import "./OrderTop.css";

const OrderTop = ({ open, setOpen, orderObject }) => {
  const clickOpen = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <div className="order-top">
        <button className="order-top-text" onClick={clickOpen}>
          <div className="order-top-title">{orderObject.title}</div>
          <DueCheck
            deadline={orderObject.deadline}
            active={orderObject.active}
          />
        </button>
        <button onClick={clickOpen}>
          {open ? (
            <i className="fas fa-chevron-up"></i>
          ) : (
            <i className="fas fa-chevron-down"></i>
          )}
        </button>
      </div>
    </React.Fragment>
  );
};

export default OrderTop;
