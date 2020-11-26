import React from "react";

import "./OrderText.css";

const OrderText = ({ orderObject, textTarget }) => {
  const checkText = (text) => {
    if (textTarget === "price") {
      return `£${text}`;
    } else if (textTarget === "notes") {
      if (text === "") return "N/A";
      else return text;
    } else if (textTarget === "deadline" || textTarget === "created") {
      const dateString = new Date(text);
      return dateString
        .toLocaleString("en-GB", { timeZone: "UTC" })
        .slice(0, 10);
    } else return text;
  };

  return (
    <React.Fragment>
      <div className="order-text">
        <label className="order-text-label">
          {textTarget.charAt(0).toUpperCase() + textTarget.slice(1) + ":"}
        </label>
        <p className="order-text-text">{checkText(orderObject[textTarget])}</p>
      </div>
    </React.Fragment>
  );
};

export default OrderText;
