import React from "react";

import "./OrderContent.css";

const OrderContent = ({ orderObject, reRender, setReRender }) => {
  return (
    <React.Fragment>
      <div className="accordion-open">
        <div className="open-content">
          <label>Customer</label>
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
          <div>{orderObject.notes ? orderObject.notes : "N/A"}</div>
        </div>
        <div className="open-buttonbar">
          <div className="qr">
            <button>
              <i className="fas fa-qrcode"></i>
            </button>
          </div>
          <div className="archive">
            <button>
              <i className="fas fa-archive"></i>
            </button>
          </div>
          <div className="edit">
            <button>
              <i className="fas fa-edit"></i>
            </button>
          </div>
          <div className="trash">
            <button>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderContent;