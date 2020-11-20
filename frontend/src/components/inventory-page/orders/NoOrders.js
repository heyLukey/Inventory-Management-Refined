import React from "react";

import "./NoOrders.css";

const NoOrders = () => {
  return (
    <React.Fragment>
      <div className="page-noorders">
        <h1>Oops!</h1>
        <h4>Looks like you're searching for orders that don't exist...</h4>
      </div>
    </React.Fragment>
  );
};

export default NoOrders;
